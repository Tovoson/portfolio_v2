export type Project= {
  title: string
  description: string
  longDescription: string
  tags: string[]
  techStack: string[]
  date: string
  image: string
  lienBackend: string
  lienFrontend: string
  lienProd: string
}

export interface Stats {
  totalVisits: number;
  uniqueVisitors: number;
  avgDuration: string;
  newMessages: number;
  visitsTrend: Array<{ name: string; value: number }>;
deviceDistribution: Array<{ name: string; value: number }>;  
  recentVisitors: Array<{
    id: string;
    date: string;
    time: string;
    location: string;
    browser: string;
    page: string;
    duration: string;
  }>;
}

export interface Visits {
  session_id: string;
  city: string;
  page_path: string;
  userAgent: string;
  country: string;
  duration: number;
  language: string;
  screen: string;
  ip: string;
  created_at: string;
}
