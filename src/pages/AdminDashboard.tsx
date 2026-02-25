import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TrendingUp,
  Users,
  Clock,
  MessageSquare,
  Search,
  Bell,
  Filter,
  Download,
  Monitor,
  Smartphone,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { motion } from "motion/react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

interface Stats {
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

const INITIAL_STATS: Stats = {
  totalVisits: 12345,
  uniqueVisitors: 1234,
  avgDuration: "12:34",
  newMessages: 123,
  visitsTrend: [],
  deviceDistribution: [],
  recentVisitors: [],
};

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>(INITIAL_STATS);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  //const user = JSON.parse(localStorage.getItem('admin_user') || '{}');
  const user = {
    name: "Admin",
    role: "Admin",
  };

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    //if (!token) {
    //navigate('/admin');
    //return;
    //}

    // fetch('/api/admin/stats')
    //   .then(res => res.json())
    //   .then(data => {
    //     setStats(data);
    //     setLoading(false);
    //   });
    setLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_user");
    navigate("/admin");
  };

  if (loading)
    return (
      <div className="min-h-screen bg-[#0a0a0b] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="size-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
          <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">
            Loading Systems...
          </p>
        </div>
      </div>
    );

  const COLORS = ["#d4af35", "#2a2a2a", "#1a1a1a"];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-slate-300 font-sans">
      {/* Header */}
      <header className="h-20 border-b border-white/5 px-8 flex items-center justify-between sticky top-0 bg-[#0a0a0b]/80 backdrop-blur-xl z-50">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-white">Dashboard Overview</h1>
          <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest border border-white/5">
            Live Updates
          </span>
        </div>

        <div className="flex items-center gap-8">
          <div className="relative hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-600" />
            <input
              type="text"
              placeholder="Search analytics..."
              className="bg-white/[0.03] border border-white/10 rounded-xl pl-12 pr-4 py-2.5 text-sm w-64 focus:border-primary outline-none transition-all"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2.5 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/5 transition-colors relative">
              <Bell className="size-5 text-slate-400" />
              <span className="absolute top-2 right-2 size-2 bg-primary rounded-full border-2 border-[#0a0a0b]" />
            </button>

            <div className="h-8 w-px bg-white/10 mx-2" />

            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-white leading-none">
                  {user.name}
                </p>
                <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest mt-1">
                  {user.role}
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-all group"
              >
                <LogOut className="size-5 text-primary group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="p-8 max-w-[1600px] mx-auto space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              label: "Total Visits",
              value: stats.totalVisits.toLocaleString(),
              trend: "+12%",
              icon: TrendingUp,
              color: "primary",
            },
            {
              label: "Unique Visitors",
              value: stats.uniqueVisitors.toLocaleString(),
              trend: "+5.2%",
              icon: Users,
              color: "primary",
            },
            {
              label: "Avg. Duration",
              value: stats.avgDuration,
              trend: "-2.1%",
              icon: Clock,
              color: "primary",
            },
            {
              label: "New Messages",
              value: stats.newMessages,
              trend: "+18%",
              icon: MessageSquare,
              color: "primary",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/5 bg-white/[0.02] relative overflow-hidden group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    {item.label}
                  </p>
                  <h3 className="text-3xl font-black text-white">
                    {item.value}
                  </h3>
                </div>
                <div className="p-3 bg-primary/10 rounded-xl">
                  <item.icon className="size-5 text-primary" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-bold ${item.trend.startsWith("+") ? "text-emerald-500" : "text-rose-500"}`}
                >
                  {item.trend}
                </span>
                <span className="text-[10px] text-slate-600 font-medium uppercase tracking-widest">
                  from last month
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Traffic Chart */}
          <div className="lg:col-span-2 glass-card p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
            <div className="flex items-center justify-between mb-10">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">
                  Recent Visitors
                </h3>
                <p className="text-xs text-slate-500">
                  Live activity from the last 60 minutes
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/10 rounded-xl text-xs font-bold hover:bg-white/5 transition-all">
                  <Filter className="size-3.5" />
                  Filtrer par date
                  <ChevronDown className="size-3.5" />
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-xl text-xs font-bold hover:bg-primary/20 transition-all">
                  <Download className="size-3.5" />
                  Export CSV
                </button>
              </div>
            </div>

            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={stats.visitsTrend}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#d4af35" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#d4af35" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#ffffff05"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="name"
                    stroke="#ffffff20"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                    dy={10}
                  />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1a1a1b",
                      border: "1px solid #ffffff10",
                      borderRadius: "12px",
                    }}
                    itemStyle={{ color: "#d4af35" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#d4af35"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Device Distribution */}
          <div className="glass-card p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-lg font-bold text-white">
                Répartition par appareil
              </h3>
              <div className="flex gap-2">
                <button className="p-2 bg-white/[0.03] border border-white/10 rounded-lg hover:bg-white/5">
                  <Filter className="size-3.5" />
                </button>
                <button className="p-2 bg-white/[0.03] border border-white/10 rounded-lg hover:bg-white/5">
                  <Download className="size-3.5" />
                </button>
              </div>
            </div>

            <div className="h-[250px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={stats.deviceDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {stats.deviceDistribution.map(
                      (entry: any, index: number) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ),
                    )}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-3xl font-black text-white">100%</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  Total Users
                </span>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {stats.deviceDistribution.map((item: any, i: number) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="size-2 rounded-full"
                      style={{ backgroundColor: COLORS[i] }}
                    />
                    <span className="text-xs font-medium text-slate-400">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-white">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div className="glass-card rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden">
          <div className="p-8 border-b border-white/5 flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">Recent Visitors</h3>
              <p className="text-xs text-slate-500">
                Live activity from the last 60 minutes
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/10 rounded-xl text-xs font-bold hover:bg-white/5 transition-all">
                <Filter className="size-3.5" />
                Filtrer par date
                <ChevronDown className="size-3.5" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-xl text-xs font-bold hover:bg-primary/20 transition-all">
                <Download className="size-3.5" />
                Export CSV
              </button>
              <button className="text-xs font-bold text-primary hover:underline transition-all">
                View All Activity
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-white/5">
                  <th className="px-8 py-6">Date / Time</th>
                  <th className="px-8 py-6">Location</th>
                  <th className="px-8 py-6">Device / Browser</th>
                  <th className="px-8 py-6">Page Viewed</th>
                  <th className="px-8 py-6">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {stats.recentVisitors.map((visitor: any) => (
                  <tr
                    key={visitor.id}
                    className="group hover:bg-white/[0.01] transition-colors"
                  >
                    <td className="px-8 py-6">
                      <p className="text-sm font-bold text-white">
                        {visitor.date}
                      </p>
                      <p className="text-[10px] text-slate-600 mt-1">
                        {visitor.time}
                      </p>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-sm text-slate-300">
                        {visitor.location}
                      </p>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        {visitor.browser.includes("Chrome") ? (
                          <Monitor className="size-4 text-slate-500" />
                        ) : (
                          <Smartphone className="size-4 text-slate-500" />
                        )}
                        <span className="text-sm text-slate-300">
                          {visitor.browser}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/10 rounded-lg w-fit">
                        <span className="text-[10px] font-mono text-primary">
                          {visitor.page}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-sm text-slate-300">
                        {visitor.duration}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
