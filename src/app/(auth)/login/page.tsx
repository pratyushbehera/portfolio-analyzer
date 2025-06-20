import { generateAuthUrl } from "@/lib/zerodha";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI-Powered Zerodha Portfolio Analyzer
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Connect your Zerodha account to get intelligent insights about your
          stocks and portfolio
        </p>
        <a
          href={generateAuthUrl()}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          Connect Zerodha Account
        </a>
      </div>
    </div>
  );
}
