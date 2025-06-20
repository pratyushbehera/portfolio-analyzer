import { exchangeToken } from "@/lib/zerodha";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextPage } from "next";

interface CallbackPageProps {
  searchParams: {
    request_token?: string;
  };
}

const CallbackPage: NextPage<CallbackPageProps> = async ({ searchParams }) => {
  const requestToken = searchParams.request_token;

  if (!requestToken) {
    redirect("/");
  }

  try {
    const tokens = await exchangeToken(requestToken);
    (await cookies()).set("kite_access_token", tokens.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });
    redirect("/dashboard");
  } catch (error) {
    console.error("Authentication failed:", error);
    redirect("/");
  }
};

export default CallbackPage;
