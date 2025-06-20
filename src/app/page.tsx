import Link from "next/link";
import FloatingGraphic from "./components/FloatingGraphics";
import { FaChartLine } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-900 opacity-95"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 mix-blend-screen filter blur-3xl opacity-70"></div>
            <div className="absolute top-2/3 left-1/3 w-80 h-80 rounded-full bg-indigo-500 mix-blend-screen filter blur-3xl opacity-70"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-500 mix-blend-screen filter blur-3xl opacity-70"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation */}
        <header className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <FaChartLine className="text-black text-xl" />
            </div>
            <span className="text-white font-bold text-xl">PortfolioAI</span>
          </div>
          <Link
            href="/login"
            className="px-6 py-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full text-black border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
          >
            Sign In
          </Link>
        </header>

        {/* Hero Section */}
        <main className="flex-grow flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Intelligent Portfolio Analysis <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
              Powered by AI
            </span>
          </h1>

          <p className="text-xl text-white text-opacity-80 max-w-2xl mb-10">
            Connect your Zerodha account and get real-time AI-powered insights
            about your investments. Make smarter decisions with personalized
            stock analysis and portfolio recommendations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/login"
              className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started - It's Free
            </Link>
            {/* <button className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border border-white border-opacity-30 hover:bg-white hover:bg-opacity-10 transition-all duration-300">
              Watch Demo
            </button> */}
          </div>
          <FloatingGraphic />
        </main>

        {/* Features Grid */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📈",
                title: "Real-time Analysis",
                description:
                  "Get instant insights on your portfolio performance with live data from Zerodha",
              },
              {
                icon: "🤖",
                title: "AI Recommendations",
                description:
                  "Smart suggestions on when to buy, hold or sell based on market conditions",
              },
              {
                icon: "🔍",
                title: "Deep Stock Insights",
                description:
                  "Detailed analysis of individual stocks in your portfolio",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-black text-opacity-70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 px-6 text-center text-white text-opacity-50 text-sm">
          <p>
            © {new Date().getFullYear()} PortfolioAI. Not affiliated with
            Zerodha.
          </p>
        </footer>
      </div>
    </div>
  );
}
