// app/(auth)/login/page.tsx
import Link from "next/link";
import { generateAuthUrl } from "@/lib/zerodha";
import { FaChartLine, FaArrowRight } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex flex-col justify-center items-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-float1"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600 rounded-full filter blur-3xl opacity-20 animate-float2"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-float3"></div>
      </div>

      {/* Login card */}
      <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full filter blur-xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-xl"></div>

        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
            <FaChartLine className="text-white text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome to PortfolioAI
          </h1>
          <p className="text-white/70 text-center">
            Connect your Zerodha account to unlock intelligent portfolio
            insights
          </p>
        </div>

        {/* Login button */}
        <a
          href={generateAuthUrl()}
          className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 mb-6 group"
        >
          <span className="flex items-center">
            <svg
              className="w-6 h-6 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-7 7z" />
            </svg>
            Continue with Zerodha
          </span>
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Features list */}
        <div className="space-y-4 mb-8">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
            </div>
            <p className="ml-3 text-white/80">Real-time portfolio analysis</p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-5 h-5 bg-indigo-500/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              </div>
            </div>
            <p className="ml-3 text-white/80">
              AI-powered stock recommendations
            </p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              </div>
            </div>
            <p className="ml-3 text-white/80">
              Personalized investment insights
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-white/50 text-sm">
          <p>
            Don't have a Zerodha account?{" "}
            <Link
              href="https://zerodha.com"
              className="text-blue-300 hover:underline"
            >
              Sign up here
            </Link>
          </p>
          <Link
            href="/"
            className="inline-flex items-center mt-4 text-white/70 hover:text-white transition-colors"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
