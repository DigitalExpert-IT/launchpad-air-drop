import { createThirdwebClient } from "thirdweb";

const CLIENT_ID = process.env.NEXT_PUBLIC_THIRDWEB || "0";

export const clientId = createThirdwebClient({
    clientId: CLIENT_ID,
  });