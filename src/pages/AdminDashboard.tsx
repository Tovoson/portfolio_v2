import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CONSTANTS } from '@/constants/Constants';
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
import { Stats } from "../Types/Project-type";
import { useAuthStore } from "../store/useAdminStore";
import { useShallow } from "zustand/shallow";
import { useVisitorStore } from "../store/useVisitorStore";
import { summary } from "motion/react-client";

const INITIAL_STATS: Stats = {
  totalVisits: 12345,
  uniqueVisitors: 1234,
  avgDuration: "12:34",
  newMessages: 123,
  visitsTrend: [
    { name: "Jan", value: 120 },
    { name: "Feb", value: 200 },
    { name: "Mar", value: 150 },
    { name: "Apr", value: 340 },
  ],
  deviceDistribution: [
    { name: "Mobile", value: 2 },   // 2 visitors on mobile
    { name: "Desktop", value: 1 }
  ],
  recentVisitors: [],
};

export default function AdminDashboard() {
  const { user, signOut } = useAuthStore(
    useShallow((state) => ({ user: state.user, signOut: state.signOut }))
  )

  const { visitor, isLoading, error } = useVisitorStore(
    useShallow((state) => ({ visitor: state.visitor, isLoading: state.isLoading, error: state.error }))
  )

  const fetchVisitor = useVisitorStore(state => state.fetchVisitor)

  const COLORS = ["#d4af35", "#2a2a2a", "#1a1a1a"];
  const [stats, setStats] = useState(INITIAL_STATS)
  const navigate = useNavigate()

  const onLogOut = () => {
    signOut()
    navigate("/admin")
  }

  const avgDuration = () => {

    if (!visitor || visitor.length === 0) return

    const totalDuration = visitor?.reduce((sum, v) => sum + v.duration, 0) ?? 0
    return (totalDuration / visitor?.length).toFixed(1)
  }

  useEffect(() => {
    fetchVisitor()

  }, [fetchVisitor])

  useEffect(() => {
    if (visitor) console.log(visitor.map(c => c.page_path));
  }, [visitor])

  return (
    <div className={`min-h-screen ${CONSTANTS.Dark.BACKGROUND} font-sans`}>
      {/* Header */}
      <header className={`h-20 border-b ${CONSTANTS.BACKGROUNDS.BORDER_WHITE_5} px-8 flex items-center justify-between sticky top-0 ${CONSTANTS.Dark.BACKGROUND} backdrop-blur-xl z-50`}>
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-white">Dashboard Overview</h1>
          <span className={`px-3 py-1 ${CONSTANTS.BACKGROUNDS.WHITE_5} rounded-full text-[10px] font-bold ${CONSTANTS.TEXT.LABEL_TXT} uppercase tracking-widest border ${CONSTANTS.BACKGROUNDS.BORDER_WHITE_5}`}>
            Live Updates
          </span>
        </div>

        <div className="flex items-center gap-8">
          <div className="relative hidden md:block">
            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 size-4 ${CONSTANTS.TEXT.ICON_COLOR_FORM}`} />
            <input
              type="text"
              placeholder="Search analytics..."
              className={`${CONSTANTS.BACKGROUNDS.WHITE_3} border ${CONSTANTS.BACKGROUNDS.BORDER_WHITE_10} rounded-xl pl-12 pr-4 py-2.5 text-sm w-64 focus:border-primary outline-none transition-all`}
            />
          </div>

          <div className="flex items-center gap-4">
            <button type="button" className={`p-2.5 ${CONSTANTS.BACKGROUNDS.WHITE_3} border ${CONSTANTS.BACKGROUNDS.BORDER_WHITE_10} rounded-xl ${CONSTANTS.BACKGROUNDS.HOVER_WHITE_5} transition-colors relative`}>
              <Bell className={`size-5 ${CONSTANTS.TEXT.DESCRIPTION}`} />
              <span className="absolute top-2 right-2 size-2 bg-primary rounded-full border-2 border-[#0a0a0b]" />.
            </button>

            <div className="h-8 w-px bg-white/10 mx-2" />

            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-white leading-none">
                  {user?.email}
                </p>
                <p className={`text-[10px] ${CONSTANTS.TEXT.LABEL_TXT} font-medium uppercase tracking-widest mt-1`}>
                  {user?.email}
                </p>
              </div>
              <button
                type="button"
                onClick={onLogOut}
                className={`size-10 rounded-xl ${CONSTANTS.BACKGROUNDS.PRIMARY_10} border ${CONSTANTS.BACKGROUNDS.BORDER_PRIMARY_10} flex items-center justify-center ${CONSTANTS.BACKGROUNDS.BTN_STATE} transition-all group`}
              >
                <LogOut className={`size-5 ${CONSTANTS.TEXT.PRIMARY} group-hover:scale-110 transition-transform`} />
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
              value: visitor?.length || 0,
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
              value: `${(avgDuration())} s`,
              trend: "-2.1%",
              icon: Clock,
              color: "primary",
            },
            {
              label: "New Messages",
              value: 0,
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
              className={`glass-card p-6 rounded-2xl border ${CONSTANTS.BACKGROUNDS.BORDER_WHITE_5} ${CONSTANTS.BACKGROUNDS.WHITE_2} relative overflow-hidden group`}
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
          <div className="lg:col-span-2 glass-card p-8 rounded-3xl border border-white/5 bg-white/2">
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
                <button type="button" className="flex items-center gap-2 px-4 py-2 bg-white/3 border border-white/10 rounded-xl text-xs font-bold hover:bg-white/5 transition-all">
                  <Filter className="size-3.5" />
                  Filtrer par date
                  <ChevronDown className="size-3.5" />
                </button>
                <button type="button" className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-xl text-xs font-bold hover:bg-primary/20 transition-all">
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
          <div className="glass-card p-8 rounded-3xl border border-white/5 bg-white/2">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-lg font-bold text-white">
                Répartition par appareil
              </h3>
              <div className="flex gap-2">
                <button type="button" className="p-2 bg-white/3 border border-white/10 rounded-lg hover:bg-white/5">
                  <Filter className="size-3.5" />.
                </button>
                <button type="button" className="p-2 bg-white/3 border border-white/10 rounded-lg hover:bg-white/5">
                  <Download className="size-3.5" />.
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
        <div className="glass-card rounded-3xl border border-white/5 bg-white/2 overflow-hidden">
          <div className="p-8 border-b border-white/5 flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">Recent Visitors</h3>
              <p className="text-xs text-slate-500">
                Live activity from the last 60 minutes
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button type="button" className="flex items-center gap-2 px-4 py-2 bg-white/3 border border-white/10 rounded-xl text-xs font-bold hover:bg-white/5 transition-all">
                <Filter className="size-3.5" />
                Filtrer par date
                <ChevronDown className="size-3.5" />
              </button>
              <button type="button" className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-xl text-xs font-bold hover:bg-primary/20 transition-all">
                <Download className="size-3.5" />
                Export CSV
              </button>
              <button type="button" className="text-xs font-bold text-primary hover:underline transition-all">
                View All Activity
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-white/5">
                  <th className="px-8 py-6">City</th>
                  <th className="px-8 py-6">Page path</th>
                  <th className="px-8 py-6">User Agent</th>
                  <th className="px-8 py-6">Country</th>
                  <th className="px-8 py-6">Duration</th>
                  <th className="px-8 py-6">Language</th>
                  <th className="px-8 py-6">Screen</th>
                  <th className="px-8 py-6">Ip</th>
                  <th className="px-8 py-6">Created at</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {visitor?.map((visitor: any) => (
                  <tr
                    key={visitor.id}
                    className="group bg-white/1 transition-colors"
                  >
                    <td className="px-8 py-6">
                      <p className="text-sm font-bold text-white">
                        {visitor.city}
                      </p>

                    </td>
                    <td className="px-8 py-6">
                      <p className="text-sm text-slate-200 mt-1">
                        {visitor.page_path}
                      </p>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-sm text-slate-300">
                        {visitor.userAgent}
                      </p>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-sm text-slate-300">
                        {visitor.country}
                      </p>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/10 rounded-lg w-fit">
                        <span className="text-[10px] font-mono text-primary">
                          {visitor.duration}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-sm text-slate-300">
                        {visitor.language}
                      </p>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-sm text-slate-300">
                        {visitor.screen}
                      </p>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-sm text-slate-300">
                        {visitor.ip}
                      </p>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-sm text-slate-300">
                        {visitor.created_at}
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
