export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  longDescription?: string;
  techStack?: string[];
  date?: string;
  lienBackend?: string;
  lienFrontend?: string;
  lienProd?: string;
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
  location: string;
  browser: string;
  page_path: string;
  duration: number;
  device_type: string;
  device_name: string;
  created_at: string;
}
