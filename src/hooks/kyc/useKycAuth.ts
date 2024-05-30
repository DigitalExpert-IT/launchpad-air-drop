import { useToast } from '@chakra-ui/react';
import faceIO, { FaceIOErrorCode } from '@faceio/fiojs';
import { useAddress } from '@thirdweb-dev/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useRegisterMutation } from '../contract/airdrop/useRegisterMutation';
import { useSelector } from "react-redux";
import { RootState } from '@/redux/store';

if (typeof window !== 'undefined') {
  const faceIOId = process.env.NEXT_PUBLIC_FACEIO || "";
  var faceioInstance = new faceIO(faceIOId)
}

const UseKycAuth = () => {
    const toast = useToast()
    const router = useRouter()
    const address = useAddress()
    const local = sessionStorage.getItem("local");
    const email = sessionStorage.getItem("email");
    const phone = sessionStorage.getItem("phone");
    const referrer = useSelector((state: RootState) => state.referrer.referrer);
    const [userInfo, setUserInfo] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState("")
    const {register, ...rest} = useRegisterMutation()

    const errorCodeHandler = (errorCode: FaceIOErrorCode) => {
        const fioErrs = faceioInstance.fetchAllErrorCodes();
        switch (errorCode) {
        case fioErrs.PERMISSION_REFUSED:
            setError("Access to the Camera stream was denied by the end user");
        break;
        case fioErrs.NO_FACES_DETECTED:
            setError("No faces were detected during the enroll or authentication process");
        break;
        case fioErrs.UNRECOGNIZED_FACE:
            setError("Unrecognized face on this application's Facial Index");
        break;
        case fioErrs.MANY_FACES:
            setError("Two or more faces were detected during the scan process");
        break;
        case fioErrs.FACE_DUPLICATION:
            setError("User enrolled previously (facial features already recorded). Cannot enroll again!");
        break;
        case fioErrs.MINORS_NOT_ALLOWED:
            setError("Minors are not allowed to enroll on this application!");
        break;
        case fioErrs.PAD_ATTACK:
            setError("Presentation (Spoof) Attack (PAD) detected during the scan process");
        break;
        case fioErrs.FACE_MISMATCH:
            setError("Calculated Facial Vectors of the user being enrolled do not matches");
        break;
        case fioErrs.WRONG_PIN_CODE:
            setError("Wrong PIN code supplied by the user being authenticated");
        break;
    }
  }

    useEffect(() => {
        const enrollNewUser = async () => {
        setLoading(true)
        if (local && email && phone) {
          try {
            // userInfo can be sent to BE for email or phone validation
              const userInfo = await faceioInstance.enroll({
                  "locale": local, // user country based on dial code on phone number
                  "payload": {
                      "whoami": address,
                      "email": email,
                      "phoneNumber": phone
                  }
              })
              await register(referrer || '0xFE92B6d24Fe92b9EdBEE08240959682dFaAf63D7', `user-${address}`);
              setLoading(false);
              router.push('/');
              
          } catch (errCode) {
              errorCodeHandler(errCode as FaceIOErrorCode);
              setLoading(false);
          }
        }
      }
      enrollNewUser();
    }, [address, email, local, phone, referrer, register, router])

      return {
        userInfo,
        loading,
        error
      }
}

export default UseKycAuth;