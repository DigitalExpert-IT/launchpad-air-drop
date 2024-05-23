declare module '@faceio/fiojs' {
    // Example of declaring a class with methods

    export type FaceIOErrorCode =
  | 'PERMISSION_REFUSED'
  | 'NO_FACES_DETECTED'
  | 'UNRECOGNIZED_FACE'
  | 'MANY_FACES'
  | 'FACE_DUPLICATION'
  | 'MINORS_NOT_ALLOWED'
  | 'PAD_ATTACK'
  | 'FACE_MISMATCH'
  | 'WRONG_PIN_CODE';

    export default class FaceIO {
      constructor(apiKey: string);
      authenticate(options?: any): Promise<any>;
      enroll(options?: any): Promise<any>;
      fetchAllErrorCodes(): { [key: string]: FaceIOErrorCode };
    }
}