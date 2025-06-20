"use client";

import { useState } from "react";
import StockCard from "./StockCard";
import AnalysisPanel from "./AnalysisPanel";
import { Portfolio, Stock } from "@/types";
import QuestionTemplates from "./QuestionTemplates";

export default function PortfolioGrid({ portfolio }: { portfolio: Portfolio }) {
  const [selectedStock, setSelectedStock] = useState<Stock | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1 space-y-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Your Holdings</h2>
          <div className="space-y-3">
            {portfolio.holdings.map((stock) => (
              <StockCard
                key={stock.tradingsymbol}
                stock={stock}
                isSelected={
                  selectedStock?.tradingsymbol === stock.tradingsymbol
                }
                onClick={() => setSelectedStock(stock)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 space-y-4">
        <AnalysisPanel stock={selectedStock} portfolio={portfolio} />
        <QuestionTemplates stock={selectedStock} portfolio={portfolio} />
      </div>
    </div>
  );
}
