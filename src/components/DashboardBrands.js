"use client"
import { useState } from "react"
import { Search, Building2, Globe, Users, ChevronDown, Award } from "lucide-react"

export default function DashboardBrands() {
  // Static data for professional brands directory
  const brandsData = [
    {
      id: 1,
      name: "Apple",
      description:
        "Apple Inc. is an American multinational technology company that designs, develops, and sells consumer electronics, computer software, and online services.",
      logo: "AP",
      type: "Technology",
      category: "Consumer Electronics",
      isLive: true,
      isClaimed: true,
      color: "#A2BEF7",
    },
    {
      id: 2,
      name: "Adidas",
      description:
        "Adidas AG is a German multinational corporation that designs and manufactures shoes, clothing and accessories.",
      logo: "AD",
      type: "Fashion",
      category: "Sportswear",
      isLive: true,
      isClaimed: false,
      color: "#7298F1",
    },
    {
      id: 3,
      name: "Dyson",
      description:
        "Dyson Ltd. is a British technology company that designs and manufactures household appliances such as vacuum cleaners, air purifiers, and hair care products.",
      logo: "DY",
      type: "Home Appliances",
      category: "Technology",
      isLive: true,
      isClaimed: true,
      color: "#5A85EE",
    },
    {
      id: 4,
      name: "eBay",
      description:
        "eBay Inc. is an American multinational e-commerce corporation that facilitates consumer-to-consumer and business-to-consumer sales through its website.",
      logo: "EB",
      type: "E-commerce",
      category: "Online Marketplace",
      isLive: false,
      isClaimed: true,
      color: "#4272EB",
    },
    {
      id: 5,
      name: "Amazon",
      description:
        "Amazon.com, Inc. is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      logo: "AM",
      type: "E-commerce",
      category: "Technology",
      isLive: true,
      isClaimed: false,
      color: "#A2BEF7",
    },
    {
      id: 6,
      name: "Nike",
      description:
        "Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing of footwear, apparel, equipment, accessories, and services.",
      logo: "NK",
      type: "Fashion",
      category: "Sportswear",
      isLive: true,
      isClaimed: true,
      color: "#7298F1",
    },
    {
      id: 7,
      name: "Samsung",
      description:
        "Samsung Electronics Co., Ltd. is a South Korean multinational electronics company that manufactures a wide variety of consumer and industry electronics.",
      logo: "SM",
      type: "Technology",
      category: "Consumer Electronics",
      isLive: false,
      isClaimed: false,
      color: "#5A85EE",
    },
    {
      id: 8,
      name: "Tesla",
      description:
        "Tesla, Inc. is an American electric vehicle and clean energy company that designs and manufactures electric cars, battery energy storage, and solar panels.",
      logo: "TS",
      type: "Automotive",
      category: "Electric Vehicles",
      isLive: true,
      isClaimed: true,
      color: "#4272EB",
    },
    {
      id: 9,
      name: "Microsoft",
      description:
        "Microsoft Corporation is an American multinational technology company that produces computer software, consumer electronics, personal computers, and related services.",
      logo: "MS",
      type: "Technology",
      category: "Software",
      isLive: true,
      isClaimed: false,
      color: "#A2BEF7",
    },
  ]

  const categories = [
    { label: "Technology Companies", count: 142, active: true },
    { label: "Fashion & Lifestyle", count: 26, active: false },
    { label: "E-commerce Platforms", count: 41, active: false },
    { label: "Consumer Electronics", count: 77, active: false },
  ]

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("Any")
  const [selectedAssetClass, setSelectedAssetClass] = useState("Any")
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false)
  const [isAssetDropdownOpen, setIsAssetDropdownOpen] = useState(false)

  const regions = ["Any", "North America", "Europe", "Asia Pacific", "Latin America", "Middle East", "Africa"]
  const assetClasses = [
    "Any",
    "Consumer Electronics",
    "Sportswear",
    "Technology",
    "Online Marketplace",
    "Electric Vehicles",
    "Software",
  ]

  const totalBrands = brandsData.length
  const activeBrands = brandsData.filter((brand) => brand.isLive).length

  // Filter brands based on current filters
  const filteredBrands = brandsData.filter((brand) => {
    const matchesSearch =
      brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesAssetClass = selectedAssetClass === "Any" || brand.category === selectedAssetClass

    return matchesSearch && matchesAssetClass
  })

  return (
    <div>
      {/* Professional Header Section */}
      <div className="relative bg-gradient-to-br from-[#0F0F23] via-[#1A1A2E] to-[#16213E] rounded-2xl border border-[#A2BEF7]/10 p-8 mb-6 overflow-hidden shadow-2xl">
        {/* Professional Gradient Overlays */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#A2BEF7]/12 via-[#8AABF4]/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#7298F1]/10 via-[#5A85EE]/6 to-transparent rounded-full blur-2xl"></div>

        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#A2BEF7]/3 via-transparent to-[#5A85EE]/3 rounded-2xl"></div>

        <div className="relative z-10">
          {/* Header with Title and Action */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#A2BEF7] to-[#7298F1] rounded-xl flex items-center justify-center shadow-lg shadow-[#A2BEF7]/20">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-1 tracking-tight">Company Directory</h2>
                <p className="text-gray-400 text-sm">
                  View all companies involved in the real world asset tokenization industry
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 bg-gradient-to-r from-[#A2BEF7] to-[#7298F1] rounded-xl px-6 py-3 text-white text-sm font-medium hover:from-[#8AABF4] hover:to-[#5A85EE] transition-all duration-300 shadow-lg hover:shadow-[#A2BEF7]/30">
              <Users className="w-4 h-4" />
              List Your Company
            </button>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  category.active
                    ? "bg-gradient-to-r from-[#A2BEF7] to-[#7298F1] text-white shadow-lg shadow-[#A2BEF7]/20"
                    : "bg-[#0F0F23]/60 backdrop-blur-sm border border-[#A2BEF7]/20 text-gray-300 hover:text-white hover:bg-[#A2BEF7]/10 hover:border-[#A2BEF7]/40"
                }`}
              >
                <span>{category.label}</span>
                <span
                  className={`px-2 py-0.5 rounded-lg text-xs font-bold ${
                    category.active ? "bg-white/20" : "bg-[#A2BEF7]/20"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Filters Section - REMOVED SEARCH BUTTON */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Left Side - Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Enhanced Search Bar with Better Icon */}
              <div className="relative flex-1 max-w-md">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-[#A2BEF7]" />
                </div>
                <input
                  type="text"
                  placeholder="Search companies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[#0F0F23]/80 backdrop-blur-xl border border-[#A2BEF7]/20 rounded-xl text-white text-sm placeholder:text-gray-500 focus:border-[#A2BEF7]/40 focus:outline-none focus:ring-2 focus:ring-[#A2BEF7]/20 transition-all duration-300"
                />
              </div>

              {/* Filter Dropdowns */}
              <div className="flex gap-3">
                {/* Asset Regions Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
                    className="flex items-center gap-2 bg-[#0F0F23]/80 backdrop-blur-xl border border-[#A2BEF7]/20 rounded-xl px-4 py-3 text-white text-sm font-medium hover:border-[#A2BEF7]/40 transition-all duration-300 min-w-[140px]"
                  >
                    <span className="text-gray-400 text-xs">Asset Regions</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isRegionDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isRegionDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-[#0F0F23]/95 backdrop-blur-xl border border-[#A2BEF7]/20 rounded-xl shadow-2xl z-50 py-2 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#A2BEF7]/8 to-transparent"></div>
                      {regions.map((region) => (
                        <button
                          key={region}
                          onClick={() => {
                            setSelectedRegion(region)
                            setIsRegionDropdownOpen(false)
                          }}
                          className={`relative w-full text-left px-4 py-2.5 text-sm transition-all duration-200 ${
                            selectedRegion === region
                              ? "text-white bg-[#A2BEF7]/20 border-r-2 border-[#A2BEF7]"
                              : "text-gray-300 hover:text-white hover:bg-[#A2BEF7]/10"
                          }`}
                        >
                          {region}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Asset Class Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsAssetDropdownOpen(!isAssetDropdownOpen)}
                    className="flex items-center gap-2 bg-[#0F0F23]/80 backdrop-blur-xl border border-[#A2BEF7]/20 rounded-xl px-4 py-3 text-white text-sm font-medium hover:border-[#A2BEF7]/40 transition-all duration-300 min-w-[130px]"
                  >
                    <span className="text-gray-400 text-xs">Asset Class</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isAssetDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isAssetDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-[#0F0F23]/95 backdrop-blur-xl border border-[#A2BEF7]/20 rounded-xl shadow-2xl z-50 py-2 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#A2BEF7]/8 to-transparent"></div>
                      {assetClasses.map((assetClass) => (
                        <button
                          key={assetClass}
                          onClick={() => {
                            setSelectedAssetClass(assetClass)
                            setIsAssetDropdownOpen(false)
                          }}
                          className={`relative w-full text-left px-4 py-2.5 text-sm transition-all duration-200 ${
                            selectedAssetClass === assetClass
                              ? "text-white bg-[#A2BEF7]/20 border-r-2 border-[#A2BEF7]"
                              : "text-gray-300 hover:text-white hover:bg-[#A2BEF7]/10"
                          }`}
                        >
                          {assetClass}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 flex items-center justify-between">
            <div className="text-white text-lg font-semibold">
              Companies <span className="text-[#A2BEF7]">{filteredBrands.length}</span>
            </div>
            <div className="text-gray-400 text-sm">
              {activeBrands} of {totalBrands} companies are live
            </div>
          </div>
        </div>
      </div>

      {/* Professional Companies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBrands.map((brand) => (
          <div
            key={brand.id}
            className="relative bg-gradient-to-br from-[#0F0F23] via-[#1A1A2E] to-[#16213E] rounded-2xl border border-[#A2BEF7]/10 p-6 overflow-hidden shadow-2xl hover:shadow-[#A2BEF7]/20 transition-all duration-300 group hover:border-[#A2BEF7]/20 flex flex-col h-full"
          >
            {/* Subtle gradient overlays */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#A2BEF7]/8 via-[#8AABF4]/4 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#7298F1]/6 via-[#5A85EE]/3 to-transparent rounded-full blur-xl"></div>

            {/* Mesh gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#A2BEF7]/2 via-transparent to-[#5A85EE]/2 rounded-2xl"></div>

            <div className="relative z-10 flex flex-col h-full">
              {/* Header with Logo and Status */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${brand.color} 0%, ${brand.color}CC 100%)`,
                      boxShadow: `0 8px 32px ${brand.color}40`,
                    }}
                  >
                    {brand.logo}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-white text-lg font-semibold mb-1 truncate">{brand.name}</h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      {brand.isLive && (
                        <span className="flex items-center gap-1 px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-lg">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                          Live
                        </span>
                      )}
                      {brand.isClaimed && (
                        <span className="flex items-center gap-1 px-2 py-1 bg-[#A2BEF7]/20 text-[#A2BEF7] text-xs font-medium rounded-lg">
                          <Award className="w-3 h-3" />
                          Claimed
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description - Fixed height container */}
              <div className="flex-1 mb-4">
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{brand.description}</p>
              </div>

              {/* Type and Category Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1.5 bg-[#0F0F23]/60 backdrop-blur-sm border border-[#A2BEF7]/20 text-gray-300 text-xs font-medium rounded-lg">
                  <span className="text-gray-500">Type:</span> {brand.type}
                </span>
                <span className="px-3 py-1.5 bg-[#0F0F23]/60 backdrop-blur-sm border border-[#A2BEF7]/20 text-gray-300 text-xs font-medium rounded-lg">
                  <span className="text-gray-500">Category:</span> {brand.category}
                </span>
              </div>

              {/* Action Buttons - Always at bottom */}
              <div className="flex gap-3 mt-auto">
                <button className="flex-1 bg-[#0F0F23]/60 backdrop-blur-sm border border-[#A2BEF7]/20 text-gray-300 py-2.5 px-4 rounded-xl text-sm font-medium hover:bg-[#A2BEF7]/10 hover:border-[#A2BEF7]/40 hover:text-white transition-all duration-300">
                  Cancel
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#A2BEF7] to-[#7298F1] text-white py-2.5 px-4 rounded-xl text-sm font-medium hover:from-[#8AABF4] hover:to-[#5A85EE] transition-all duration-300 shadow-lg hover:shadow-[#A2BEF7]/30">
                  <Globe className="w-4 h-4" />
                  Website
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredBrands.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gradient-to-br from-[#A2BEF7] to-[#7298F1] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#A2BEF7]/20">
            <Search className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-white text-lg font-semibold mb-2">No companies found</h3>
          <p className="text-gray-400 text-sm">Try adjusting your search criteria or filters</p>
        </div>
      )}
    </div>
  )
}
