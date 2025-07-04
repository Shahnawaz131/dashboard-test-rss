"use client"
import { useState } from "react"
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from "recharts"
import {
  TrendingUp,
  ChevronDown,
  Download,
  Activity,
  FileText,
  Mail,
  Printer,
  Smartphone,
  BarChart3,
  PieChart,
} from "lucide-react"
import DashboardBrands from "@/components/DashboardBrands"

export default function Home() {
  // Enhanced data for professional charts
  const receiptsData = [
    { date: "Jan", count: 186, fullDate: "January 2024" },
    { date: "Feb", count: 305, fullDate: "February 2024" },
    { date: "Mar", count: 237, fullDate: "March 2024" },
    { date: "Apr", count: 173, fullDate: "April 2024" },
    { date: "May", count: 209, fullDate: "May 2024" },
    { date: "Jun", count: 214, fullDate: "June 2024" },
  ]

  // Receipt categories data - Professional layout
  const receiptCategories = [
    { name: "Paper", count: 156, percentage: 52.3, color: "#A2BEF7", icon: <FileText className="w-3.5 h-3.5" /> },
    { name: "Email", count: 89, percentage: 29.8, color: "#7298F1", icon: <Mail className="w-3.5 h-3.5" /> },
    { name: "A4", count: 34, percentage: 11.4, color: "#5A85EE", icon: <Printer className="w-3.5 h-3.5" /> },
    { name: "Emulator", count: 19, percentage: 6.5, color: "#4272EB", icon: <Smartphone className="w-3.5 h-3.5" /> },
  ]

  // Data for receipt distribution - Updated with meaningful content
  const receiptDistribution = [
    { name: "Paper", symbol: "PPR", count: 156, percentage: 45, color: "#A2BEF7" },
    { name: "Email", symbol: "EML", count: 89, percentage: 30, color: "#7298F1" },
    { name: "A4", symbol: "A4", count: 34, percentage: 15, color: "#5A85EE" },
    { name: "Mobile", symbol: "MOB", count: 19, percentage: 10, color: "#4272EB" },
  ]

  const [selectedPeriod, setSelectedPeriod] = useState("1m")
  const [selectedReceiptType, setSelectedReceiptType] = useState("All")
  const [selectedDistributionType, setSelectedDistributionType] = useState("All")
  const [isReceiptDropdownOpen, setIsReceiptDropdownOpen] = useState(false)
  const [isDistributionDropdownOpen, setIsDistributionDropdownOpen] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState(null)

  const periods = ["24h", "7d", "1m", "3m", "1y", "All"]
  const receiptTypes = ["All", "Paper", "A4", "Emulators", "Email"]
  const distributionTypes = ["All", "Paper", "Email", "A4", "Mobile"]

  const totalReceipts = receiptsData.reduce((sum, item) => sum + item.count, 0)
  const totalDistribution = receiptDistribution.reduce((sum, item) => sum + item.count, 0)
  const totalCategories = receiptCategories.reduce((sum, item) => sum + item.count, 0)

  // Professional tooltip for gradient chart
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#0F0F23]/95 backdrop-blur-xl border border-[#A2BEF7]/20 rounded-xl px-4 py-3 shadow-2xl">
          <p className="text-white text-sm font-medium mb-1">{`${payload[0].payload.fullDate}`}</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#A2BEF7] rounded-full shadow-[0_0_4px_#A2BEF7]"></div>
            <p className="text-[#A2BEF7] text-sm font-semibold">{`${payload[0].value} receipts`}</p>
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <div className="bg-[#0a0a0a] min-h-full">
      <div className="max-w-[1400px] mx-auto p-6 space-y-8">
        {/* Professional Header */}
        <div>
          <h1 className="text-2xl font-semibold text-white mb-2 tracking-tight">Receipt Analytics</h1>
          <p className="text-gray-400 text-sm">Real-time insights and performance metrics</p>
        </div>

        {/* Three Boxes in One Row - Enhanced Professional Design */}
        <div className="grid grid-cols-12 gap-6">
          {/* Box 1 - Premium Analytics Chart */}
          <div className="col-span-12 lg:col-span-6">
            <div className="relative bg-gradient-to-br from-[#0F0F23] via-[#1A1A2E] to-[#16213E] rounded-2xl border border-[#A2BEF7]/10 p-6 h-full flex flex-col overflow-hidden shadow-2xl">
              {/* Professional Gradient Overlays */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#A2BEF7]/12 via-[#8AABF4]/8 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#7298F1]/10 via-[#5A85EE]/6 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-[#A2BEF7]/8 to-[#7298F1]/8 rounded-full blur-2xl"></div>

              {/* Subtle mesh gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A2BEF7]/3 via-transparent to-[#5A85EE]/3 rounded-2xl"></div>

              {/* Professional Header Row */}
              <div className="relative z-10 flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#A2BEF7] to-[#7298F1] rounded-lg flex items-center justify-center shadow-lg shadow-[#A2BEF7]/20">
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">Receipt Analytics</div>
                    <div className="text-gray-400 text-xs">Performance Overview</div>
                  </div>
                </div>

                {/* Enhanced Dropdown */}
                <div className="relative z-50">
                  <button
                    onClick={() => setIsReceiptDropdownOpen(!isReceiptDropdownOpen)}
                    className="flex items-center gap-2 bg-[#0F0F23]/80 backdrop-blur-xl border border-[#A2BEF7]/20 rounded-xl px-4 py-2.5 text-white text-sm font-medium hover:border-[#A2BEF7]/40 hover:bg-[#0F0F23]/90 transition-all duration-300 shadow-lg"
                  >
                    <div className="w-2 h-2 bg-[#A2BEF7] rounded-full shadow-[0_0_6px_#A2BEF7]"></div>
                    <span>{selectedReceiptType}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isReceiptDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Enhanced Dropdown Menu */}
                  {isReceiptDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 w-40 bg-[#0F0F23]/95 backdrop-blur-xl border border-[#A2BEF7]/20 rounded-xl shadow-2xl z-[100] py-2 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#A2BEF7]/8 to-transparent"></div>
                      {receiptTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => {
                            setSelectedReceiptType(type)
                            setIsReceiptDropdownOpen(false)
                          }}
                          className={`relative w-full text-left px-4 py-2.5 text-sm transition-all duration-200 ${
                            selectedReceiptType === type
                              ? "text-white bg-[#A2BEF7]/20 border-r-2 border-[#A2BEF7]"
                              : "text-gray-300 hover:text-white hover:bg-[#A2BEF7]/10"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                type === "All"
                                  ? "bg-[#A2BEF7] shadow-[0_0_6px_#A2BEF7]"
                                  : type === "Paper"
                                    ? "bg-emerald-400 shadow-[0_0_6px_#10b981]"
                                    : type === "A4"
                                      ? "bg-blue-400 shadow-[0_0_6px_#3b82f6]"
                                      : type === "Emulators"
                                        ? "bg-purple-400 shadow-[0_0_6px_#a855f7]"
                                        : "bg-pink-400 shadow-[0_0_6px_#ec4899]"
                              }`}
                            ></div>
                            {type}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Simplified Value Display */}
              <div className="relative z-10 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-3xl font-bold text-[#A2BEF7] tracking-tight">Receipts</div>
                </div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-3xl font-bold text-white">{totalReceipts.toLocaleString()}</span>
                  <span className="text-gray-400 text-sm">total processed</span>
                </div>
              </div>

              {/* Enhanced Chart Area */}
              <div className="relative z-10 flex-1 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={receiptsData} margin={{ top: 10, right: 15, left: 0, bottom: 10 }}>
                    <defs>
                      {/* Professional Blue Gradient */}
                      <linearGradient id="professionalBlueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#A2BEF7" stopOpacity={0.9} />
                        <stop offset="25%" stopColor="#8AABF4" stopOpacity={0.7} />
                        <stop offset="50%" stopColor="#7298F1" stopOpacity={0.5} />
                        <stop offset="75%" stopColor="#5A85EE" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#4272EB" stopOpacity={0.05} />
                      </linearGradient>

                      {/* Enhanced Glow Filter */}
                      <filter id="professionalGlow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    <CartesianGrid strokeDasharray="2 2" stroke="#A2BEF7" vertical={false} opacity={0.1} />
                    <XAxis
                      dataKey="date"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9CA3AF", fontSize: 11, fontWeight: 500 }}
                      tickMargin={8}
                    />
                    <YAxis hide />
                    <Tooltip content={<CustomTooltip />} />

                    {/* Professional Blue Area Chart with Clean Dots */}
                    <Area
                      type="monotone"
                      dataKey="count"
                      stroke="#A2BEF7"
                      strokeWidth={3}
                      fill="url(#professionalBlueGradient)"
                      filter="url(#professionalGlow)"
                      dot={{
                        fill: "#A2BEF7",
                        strokeWidth: 0,
                        r: 4,
                        filter: "drop-shadow(0 0 6px #A2BEF7)",
                      }}
                      activeDot={{
                        r: 6,
                        fill: "#A2BEF7",
                        strokeWidth: 0,
                        filter: "drop-shadow(0 0 10px #A2BEF7)",
                      }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Enhanced Footer */}
              <div className="relative z-10 flex items-center justify-between">
                {/* Professional Action Buttons */}
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 bg-gradient-to-r from-[#A2BEF7] to-[#7298F1] rounded-xl flex items-center justify-center hover:from-[#8AABF4] hover:to-[#5A85EE] transition-all duration-300 shadow-lg hover:shadow-[#A2BEF7]/30">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </button>
                  <button className="w-10 h-10 bg-[#0F0F23]/60 backdrop-blur-sm border border-[#A2BEF7]/20 rounded-xl flex items-center justify-center hover:bg-[#A2BEF7]/10 hover:border-[#A2BEF7]/40 transition-all duration-300">
                    <Download className="w-4 h-4 text-gray-400 hover:text-[#A2BEF7]" />
                  </button>
                </div>

                {/* Enhanced Period Selector */}
                <div className="flex bg-[#0F0F23]/50 backdrop-blur-sm rounded-xl p-1 border border-[#A2BEF7]/10">
                  {periods.map((period) => (
                    <button
                      key={period}
                      onClick={() => setSelectedPeriod(period)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                        selectedPeriod === period
                          ? "bg-gradient-to-r from-[#A2BEF7] to-[#7298F1] text-white shadow-lg shadow-[#A2BEF7]/20"
                          : "text-gray-400 hover:text-white hover:bg-[#A2BEF7]/10"
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Box 2 - Professional Receipt Categories */}
          <div className="col-span-12 lg:col-span-3">
            <div className="relative bg-gradient-to-br from-[#0F0F23] via-[#1A1A2E] to-[#16213E] rounded-2xl border border-[#A2BEF7]/10 p-6 h-full flex flex-col overflow-hidden shadow-2xl">
              {/* Professional Gradient Overlays */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#A2BEF7]/12 via-[#8AABF4]/8 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#7298F1]/10 via-[#5A85EE]/6 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-[#A2BEF7]/8 to-[#7298F1]/8 rounded-full blur-2xl"></div>

              {/* Subtle mesh gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A2BEF7]/3 via-transparent to-[#5A85EE]/3 rounded-2xl"></div>

              {/* Professional Header */}
              <div className="relative z-10 flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-[#A2BEF7] to-[#7298F1] rounded-lg flex items-center justify-center shadow-lg shadow-[#A2BEF7]/20">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Receipt Categories</div>
                  <div className="text-gray-400 text-xs">Distribution Overview</div>
                </div>
              </div>

              {/* Professional Categories Display */}
              <div className="relative z-10 flex-1 flex flex-col justify-end pb-4">
                {/* Categories Grid */}
                <div className="flex items-end justify-center gap-4 px-4 py-2 mb-2 bg-transparent rounded-xl">
                  {receiptCategories.map((category, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center group relative"
                      onMouseEnter={() => setHoveredCategory(index)}
                      onMouseLeave={() => setHoveredCategory(null)}
                    >
                      {/* Hover Tooltip */}
                      {hoveredCategory === index && (
                        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-[#0F0F23]/95 backdrop-blur-xl border border-[#A2BEF7]/20 rounded-lg px-3 py-2 shadow-2xl z-50">
                          <div className="text-white text-xs font-medium mb-1">{category.name}</div>
                          <div className="text-[#A2BEF7] text-sm font-semibold">{category.percentage}%</div>
                          <div className="text-gray-400 text-xs">{category.count} receipts</div>
                        </div>
                      )}

                      {/* Professional Bar */}
                      <div
                        className="w-11 rounded-lg relative overflow-hidden transition-all duration-300"
                        style={{
                          height: `${Math.max(category.percentage * 4, 70)}px`,
                          background: `linear-gradient(135deg, ${category.color} 0%, ${category.color}DD 100%)`,
                          boxShadow: `0 8px 32px ${category.color}40`,
                        }}
                      >
                        {/* Inner gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/30 rounded-lg"></div>

                        {/* Subtle shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Category Name Below Bar */}
                      <div className="text-center mt-2">
                        <div className="text-white text-xs font-medium">{category.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Footer */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 bg-gradient-to-r from-[#A2BEF7] to-[#7298F1] rounded-xl flex items-center justify-center hover:from-[#8AABF4] hover:to-[#5A85EE] transition-all duration-300 shadow-lg hover:shadow-[#A2BEF7]/30">
                    <BarChart3 className="w-4 h-4 text-white" />
                  </button>
                  <button className="w-10 h-10 bg-[#0F0F23]/60 backdrop-blur-sm border border-[#A2BEF7]/20 rounded-xl flex items-center justify-center hover:bg-[#A2BEF7]/10 hover:border-[#A2BEF7]/40 transition-all duration-300">
                    <Download className="w-4 h-4 text-gray-400 hover:text-[#A2BEF7]" />
                  </button>
                </div>

                {/* Category Selector */}
                <div className="flex bg-[#0F0F23]/50 backdrop-blur-sm rounded-xl p-1 border border-[#A2BEF7]/10">
                  {receiptCategories.slice(0, 2).map((category, index) => (
                    <button
                      key={index}
                      className="px-2 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 text-gray-400 hover:text-white hover:bg-[#A2BEF7]/10"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Box 3 - Professional Receipt Distribution */}
          <div className="col-span-12 lg:col-span-3">
            <div className="relative bg-gradient-to-br from-[#0F0F23] via-[#1A1A2E] to-[#16213E] rounded-2xl border border-[#A2BEF7]/10 p-6 h-full flex flex-col overflow-hidden shadow-2xl">
              {/* Professional Gradient Overlays */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#A2BEF7]/12 via-[#8AABF4]/8 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#7298F1]/10 via-[#5A85EE]/6 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-[#A2BEF7]/8 to-[#7298F1]/8 rounded-full blur-2xl"></div>

              {/* Subtle mesh gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A2BEF7]/3 via-transparent to-[#5A85EE]/3 rounded-2xl"></div>

              {/* Professional Header */}
              <div className="relative z-10 flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#A2BEF7] to-[#7298F1] rounded-lg flex items-center justify-center shadow-lg shadow-[#A2BEF7]/20">
                    <PieChart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">Receipt Distribution</div>
                    <div className="text-gray-400 text-xs">Type breakdown</div>
                  </div>
                </div>

                {/* Professional Dropdown */}
                <div className="relative z-50">
                  <button
                    onClick={() => setIsDistributionDropdownOpen(!isDistributionDropdownOpen)}
                    className="flex items-center gap-2 bg-[#0F0F23]/80 backdrop-blur-xl border border-[#A2BEF7]/20 rounded-xl px-4 py-2.5 text-white text-sm font-medium hover:border-[#A2BEF7]/40 hover:bg-[#0F0F23]/90 transition-all duration-300 shadow-lg"
                  >
                    <div className="w-2 h-2 bg-[#A2BEF7] rounded-full shadow-[0_0_6px_#A2BEF7]"></div>
                    <span>{selectedDistributionType}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isDistributionDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Enhanced Dropdown Menu */}
                  {isDistributionDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 w-40 bg-[#0F0F23]/95 backdrop-blur-xl border border-[#A2BEF7]/20 rounded-xl shadow-2xl z-[100] py-2 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#A2BEF7]/8 to-transparent"></div>
                      {distributionTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => {
                            setSelectedDistributionType(type)
                            setIsDistributionDropdownOpen(false)
                          }}
                          className={`relative w-full text-left px-4 py-2.5 text-sm transition-all duration-200 ${
                            selectedDistributionType === type
                              ? "text-white bg-[#A2BEF7]/20 border-r-2 border-[#A2BEF7]"
                              : "text-gray-300 hover:text-white hover:bg-[#A2BEF7]/10"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                type === "All"
                                  ? "bg-[#A2BEF7] shadow-[0_0_6px_#A2BEF7]"
                                  : type === "Paper"
                                    ? "bg-[#A2BEF7] shadow-[0_0_6px_#A2BEF7]"
                                    : type === "Email"
                                      ? "bg-[#7298F1] shadow-[0_0_6px_#7298F1]"
                                      : type === "A4"
                                        ? "bg-[#5A85EE] shadow-[0_0_6px_#5A85EE]"
                                        : "bg-[#4272EB] shadow-[0_0_6px_#4272EB]"
                              }`}
                            ></div>
                            {type}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Main Value Display */}
              <div className="relative z-10 mb-6">
                <div className="text-3xl font-bold text-white mb-1 tracking-tight">
                  {totalDistribution.toLocaleString()}
                </div>
                <div className="text-gray-400 text-sm">receipts processed</div>
              </div>

              {/* Professional Receipt Distribution Bars */}
              <div className="relative z-10 flex-1 flex flex-col justify-center space-y-3">
                {receiptDistribution.map((item, index) => (
                  <div key={index} className="group">
                    {/* Receipt Type Name */}
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-white text-sm font-medium">{item.name}</span>
                    </div>

                    {/* Compact Progress Bar */}
                    <div className="relative w-full h-6 rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#A2BEF7]/20">
                      {/* Background */}
                      <div className="absolute inset-0 bg-[#0F0F23]/60 rounded-lg"></div>

                      {/* Progress Fill */}
                      <div
                        className="absolute left-0 top-0 h-full rounded-lg transition-all duration-700 ease-out"
                        style={{
                          width: `${item.percentage}%`,
                          background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}CC 100%)`,
                          boxShadow: `0 0 16px ${item.color}25`,
                        }}
                      >
                        {/* Inner gradient overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-black/20 rounded-lg"></div>
                      </div>

                      {/* Percentage Text */}
                      <div className="absolute left-3 top-0 h-full flex items-center z-10">
                        <span className="text-white text-sm font-bold drop-shadow-lg">{item.percentage}%</span>
                      </div>

                      {/* Receipt Count */}
                      <div className="absolute right-3 top-0 h-full flex items-center z-10">
                        <span className="text-gray-300 text-xs font-medium">{item.count}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Brands Directory Section - PROPER SPACING */}
        <div className="pt-4">
          <DashboardBrands />
        </div>
      </div>
    </div>
  )
}
