import { analyzeWithAI } from "@/lib/ai";
import { NextResponse } from "next/server";
import { AnalysisResponse } from "@/types";

export async function POST(request: Request) {
  const { prompt } = await request.json();

  if (!prompt) {
    return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
  }

  try {
    const analysis = await analyzeWithAI(prompt);
    return NextResponse.json<AnalysisResponse>({ analysis });
  } catch (error) {
    console.error("Analysis error:", error);
    return NextResponse.json({ error: "Failed to analyze" }, { status: 500 });
  }
}
