import { AuthTokens } from "@/types";

export const generateAuthUrl = (): string => {
  return `https://kite.trade/connect/login?api_key=${process.env.NEXT_PUBLIC_KITE_API_KEY}&redirect=${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`;
};

export const exchangeToken = async (
  requestToken: string
): Promise<AuthTokens> => {
  // In production, implement actual token exchange
  return {
    access_token: requestToken,
    public_token: `dummy_public_token_${Date.now()}`,
  };
};
