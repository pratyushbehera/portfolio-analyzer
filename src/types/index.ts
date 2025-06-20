// Stock and Portfolio types
export interface Stock {
  tradingsymbol: string;
  quantity: number;
  average_price: number;
  last_price: number;
  pnl: number;
  pnl_percentage: number;
}

export interface Portfolio {
  current_value: number;
  total_pnl: number;
  holdings: Stock[];
}

// API Response types
export interface AnalysisResponse {
  analysis: string;
}

export interface AuthTokens {
  access_token: string;
  public_token: string;
}

// Component Props
export interface StockCardProps {
  stock: Stock;
  isSelected: boolean;
  onClick: () => void;
}

export interface AnalysisPanelProps {
  stock: Stock | null;
  portfolio: Portfolio;
}

export interface QuestionTemplatesProps {
  stock: Stock | null;
  portfolio: Portfolio;
}

export interface PortfolioGridProps {
  portfolio: Portfolio;
}
