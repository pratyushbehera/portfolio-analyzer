import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import PortfolioGrid from "./components/PortfolioGrid";
import { Portfolio } from "@/types";

export default async function DashboardPage() {
  const token = (await cookies()).get("kite_access_token")?.value;

  if (!token) {
    redirect("/");
  }

  // Mock data - replace with actual MCP connection
  const mockPortfolio: Portfolio = {
    current_value: 1250000,
    total_pnl: 125000,
    holdings: [
      {
        tradingsymbol: "RELIANCE",
        quantity: 10,
        average_price: 2450,
        last_price: 2575,
        pnl: 1250,
        pnl_percentage: 5.1,
      },
      {
        tradingsymbol: "TCS",
        quantity: 15,
        average_price: 3200,
        last_price: 3400,
        pnl: 3000,
        pnl_percentage: 6.25,
      },
      {
        tradingsymbol: "HDFCBANK",
        quantity: 8,
        average_price: 1400,
        last_price: 1350,
        pnl: -400,
        pnl_percentage: -3.57,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Portfolio Overview
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Current Value</p>
              <p className="text-xl font-semibold">
                ₹{mockPortfolio.current_value.toLocaleString()}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Total P&L</p>
              <p
                className={`text-xl font-semibold ${
                  mockPortfolio.total_pnl >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                ₹{mockPortfolio.total_pnl.toLocaleString()}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Holdings</p>
              <p className="text-xl font-semibold">
                {mockPortfolio.holdings.length}
              </p>
            </div>
          </div>
        </div>

        <PortfolioGrid portfolio={mockPortfolio} />
      </div>
    </div>
  );
}
