"use client";

import { useState } from "react";
import { Portfolio, Stock } from "@/types";

export default function AnalysisPanel({
  stock,
  portfolio,
}: {
  stock: Stock | null;
  portfolio: Portfolio;
}) {
  const [customQuestion, setCustomQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState("");

  const generatePrompt = (
    stock: Stock,
    question: string,
    portfolio: Portfolio
  ): string => {
    return `
      As a financial analyst, answer this question about ${stock.tradingsymbol}:
      "${question}"
      
      Stock Details:
      - Quantity: ${stock.quantity}
      - Avg Price: ₹${stock.average_price}
      - LTP: ₹${stock.last_price}
      - P&L: ₹${stock.pnl} (${stock.pnl_percentage}%)
      
      Portfolio Context:
      - Total Value: ₹${portfolio.current_value}
      - ${stock.tradingsymbol} makes up ${(
      ((stock.quantity * stock.last_price) / portfolio.current_value) *
      100
    ).toFixed(2)}% of portfolio
      
      Provide:
      1. Concise answer
      2. Key factors to consider
      3. Suggested action (Hold/Add/Reduce) with rationale
    `;
  };

  const handleAnalyze = async () => {
    if (!stock || !customQuestion.trim()) return;

    setIsLoading(true);
    setCustomQuestion(customQuestion);

    try {
      const prompt = generatePrompt(stock, customQuestion, portfolio);
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setAnalysis(data.analysis);
    } catch (error) {
      console.error("Analysis failed:", error);
      setAnalysis("Failed to get analysis. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">
        {stock ? `Analyze ${stock.tradingsymbol}` : "Select a stock to analyze"}
      </h2>

      {stock && (
        <>
          <div className="mb-4">
            <label
              htmlFor="question"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Ask a specific question
            </label>
            <input
              type="text"
              id="question"
              value={customQuestion}
              onChange={(e) => setCustomQuestion(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. Should I hold this stock given current market conditions?"
            />
            <button
              onClick={handleAnalyze}
              disabled={!customQuestion.trim() || isLoading}
              className="mt-2 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {isLoading ? "Analyzing..." : "Get Analysis"}
            </button>
          </div>

          {analysis && (
            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <h3 className="font-semibold mb-2">AI Analysis:</h3>
              <p className="whitespace-pre-line">{analysis}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
