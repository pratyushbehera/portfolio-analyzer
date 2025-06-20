import { QuestionTemplatesProps } from "@/types";

// components/QuestionTemplates.js
export default function QuestionTemplates({
  stock,
  portfolio,
}: QuestionTemplatesProps) {
  const questions = [
    "Should I hold this stock given current market conditions?",
    "What's the technical outlook for this stock?",
    "How does this stock's valuation compare to peers?",
    "What are the key risks for this stock?",
    "Is this stock overbought or oversold currently?",
  ];

  if (!stock) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium mb-3">Quick Analysis Questions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {questions.map((q, i) => (
          <button
            key={i}
            onClick={() => {
              // In a real implementation, this would trigger the analysis
              alert(
                `Question: ${q}\n\nThis would trigger the AI analysis in a real app`
              );
            }}
            className="text-left p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
