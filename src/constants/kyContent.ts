

export type iKycCard = {
    title: string;
    description: string;
    icon?: React.ReactNode;
    validity?: boolean;
}

export const kycContent: Array<iKycCard>  = [
    {
        title: "kyc.email.title",
        description: "kyc.email.description",
        validity: true,
    },
    {
        title: "kyc.phoneNumber.title",
        description: "kyc.phoneNumber.description",
        validity: false,
    },
    {
        title: "kyc.face.title",
        description: "kyc.face.description",
        validity: false,
    },
]