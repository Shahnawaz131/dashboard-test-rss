"use client"
import { useState } from "react"
import { Package, Calendar, MoreHorizontal, Edit, Trash2 } from "lucide-react"

export default function WarehousePage() {
  const [activeTab, setActiveTab] = useState("unsold")

  // Static product data
  const products = {
    unsold: [
      {
        id: 1,
        name: "Louis Vuitton T-Shirt",
        category: "Fashion",
        boughtFor: 800,
        currentValue: 850,
        purchaseDate: "2024-01-15",
        condition: "New",
        description: "Premium designer t-shirt in excellent condition",
      },
      {
        id: 2,
        name: "Balenciaga T-Shirt",
        category: "Fashion",
        boughtFor: 400,
        currentValue: 420,
        purchaseDate: "2024-02-10",
        condition: "Like New",
        description: "Stylish streetwear piece with modern design",
      },
      {
        id: 3,
        name: "Burberry T-Shirt",
        category: "Fashion",
        boughtFor: 200,
        currentValue: 220,
        purchaseDate: "2024-02-20",
        condition: "Good",
        description: "Classic British luxury brand item",
      },
      {
        id: 4,
        name: "Louis Vuitton Bag",
        category: "Accessories",
        boughtFor: 1200,
        currentValue: 1350,
        purchaseDate: "2024-01-05",
        condition: "New",
        description: "Iconic handbag with timeless design",
      },
      {
        id: 5,
        name: "Gucci Hoodie",
        category: "Fashion",
        boughtFor: 550,
        currentValue: 580,
        purchaseDate: "2024-03-01",
        condition: "New",
        description: "Comfortable luxury hoodie with signature design",
      },
      {
        id: 6,
        name: "Prada Sneakers",
        category: "Footwear",
        boughtFor: 650,
        currentValue: 680,
        purchaseDate: "2024-03-05",
        condition: "New",
        description: "Limited edition designer sneakers",
      },
    ],
    sold: [
      {
        id: 7,
        name: "Louis Vuitton Bag",
        category: "Accessories",
        boughtFor: 1000,
        soldFor: 1100,
        profit: 100,
        saleDate: "2024-03-15",
        condition: "Like New",
        description: "Successfully sold luxury handbag",
      },
      {
        id: 8,
        name: "Gucci Bag",
        category: "Accessories",
        boughtFor: 900,
        soldFor: 980,
        profit: 80,
        saleDate: "2024-03-10",
        condition: "Good",
        description: "Profitable sale of designer bag",
      },
      {
        id: 9,
        name: "Dior T-Shirt",
        category: "Fashion",
        boughtFor: 400,
        soldFor: 460,
        profit: 60,
        saleDate: "2024-02-28",
        condition: "New",
        description: "Quick sale of premium fashion item",
      },
    ],
  }

  const currentProducts = products[activeTab]

  // Calculate statistics
  const totalRevenue = products.sold.reduce((sum, item) => sum + item.soldFor, 0)
  const totalProfit = products.sold.reduce((sum, item) => sum + item.profit, 0)
  const itemsSold = products.sold.length
  const itemsInStock = products.unsold.length
  const totalInventoryValue = products.unsold.reduce((sum, item) => sum + item.currentValue, 0)

  return (
    <div className="bg-[#0a0a0a] min-h-full">
      <div className="max-w-[1400px] mx-auto p-6 space-y-8">
        {/* Clean Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[#A2BEF7] to-[#7298F1] rounded-xl flex items-center justify-center shadow-lg shadow-[#A2BEF7]/20">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white mb-1 tracking-tight">My Warehouse</h1>
              <p className="text-gray-400 text-sm">Manage your inventory and track sales performance</p>
            </div>
          </div>

          {/* Clean Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1A191E] border border-[#2A2930] rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm">Total Revenue</span>
                <button className="text-gray-500 hover:text-gray-300">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
              <div className="text-2xl font-bold text-white mb-1">${totalRevenue.toLocaleString()}</div>
              <div className="text-emerald-400 text-sm">+{Math.round((totalProfit / totalRevenue) * 100)}%</div>
            </div>

            <div className="bg-[#1A191E] border border-[#2A2930] rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm">Items Sold</span>
                <button className="text-gray-500 hover:text-gray-300">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{itemsSold}</div>
              <div className="text-blue-400 text-sm">+25%</div>
            </div>

            <div className="bg-[#1A191E] border border-[#2A2930] rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm">Items in Stock</span>
                <button className="text-gray-500 hover:text-gray-300">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{itemsInStock}</div>
              <div className="text-purple-400 text-sm">+8%</div>
            </div>

            <div className="bg-[#1A191E] border border-[#2A2930] rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm">Inventory Value</span>
                <button className="text-gray-500 hover:text-gray-300">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
              <div className="text-2xl font-bold text-white mb-1">${totalInventoryValue.toLocaleString()}</div>
              <div className="text-orange-400 text-sm">+8%</div>
            </div>
          </div>
        </div>

        {/* Clean Tab System and Products */}
        <div>
          {/* Tab Headers */}
          <div className="flex bg-[#0F0F23]/50 backdrop-blur-sm rounded-xl p-1 border border-[#A2BEF7]/10 mb-6 w-fit">
            <button
              onClick={() => setActiveTab("unsold")}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === "unsold"
                  ? "bg-gradient-to-r from-[#A2BEF7] to-[#7298F1] text-white shadow-lg shadow-[#A2BEF7]/20"
                  : "text-gray-400 hover:text-white hover:bg-[#A2BEF7]/10"
              }`}
            >
              Unsold Items ({itemsInStock})
            </button>
            <button
              onClick={() => setActiveTab("sold")}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === "sold"
                  ? "bg-gradient-to-r from-[#A2BEF7] to-[#7298F1] text-white shadow-lg shadow-[#A2BEF7]/20"
                  : "text-gray-400 hover:text-white hover:bg-[#A2BEF7]/10"
              }`}
            >
              Sold Items ({itemsSold})
            </button>
          </div>

          {/* Products Grid - 3 columns on desktop with consistent card heights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="relative bg-[#1A191E] border border-[#2A2930] rounded-xl overflow-hidden transition-all duration-300 flex flex-col"
              >
                {/* Subtle inner glow effect - ambient lighting from bottom center */}
                <div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-32 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 100% at center bottom, rgba(162, 190, 247, 0.06) 0%, rgba(114, 152, 241, 0.04) 30%, rgba(90, 133, 238, 0.02) 50%, transparent 70%)",
                    filter: "blur(1px)",
                  }}
                />

                {/* Additional soft feathered glow for frosted glass effect */}
                <div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-20 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 120% at center bottom, rgba(162, 190, 247, 0.04) 0%, rgba(114, 152, 241, 0.02) 40%, transparent 70%)",
                    filter: "blur(3px)",
                  }}
                />

                {/* Inner core glow for depth */}
                <div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-12 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 100% 150% at center bottom, rgba(162, 190, 247, 0.03) 0%, rgba(114, 152, 241, 0.015) 50%, transparent 80%)",
                    filter: "blur(2px)",
                  }}
                />

                <div className="p-6 flex flex-col h-full relative z-10">
                  {/* Product Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-white text-lg font-semibold mb-1 line-clamp-1">{product.name}</h3>
                      <p className="text-gray-400 text-sm line-clamp-2">{product.description}</p>
                    </div>
                    <button className="ml-3 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Condition and Category */}
                  <div className="flex items-center gap-2 mb-6">
                    <span
                      className={`px-2 py-1 rounded-lg text-xs font-medium ${
                        product.condition === "New"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : product.condition === "Like New"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {product.condition}
                    </span>
                    <span className="px-2 py-1 bg-[#A2BEF7]/10 text-[#A2BEF7] text-xs font-medium rounded-lg">
                      {product.category}
                    </span>
                  </div>

                  {/* Price Information - Flexible height */}
                  <div className="space-y-2 mb-6 flex-1">
                    {activeTab === "unsold" ? (
                      <>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Bought for:</span>
                          <span className="text-white font-semibold">${product.boughtFor}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Current value:</span>
                          <span className="text-[#A2BEF7] font-semibold">${product.currentValue}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Potential profit:</span>
                          <span className="text-emerald-400 font-semibold">
                            +${product.currentValue - product.boughtFor}
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Bought for:</span>
                          <span className="text-white font-semibold">${product.boughtFor}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Sold for:</span>
                          <span className="text-[#A2BEF7] font-semibold">${product.soldFor}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Profit:</span>
                          <span className="text-emerald-400 font-semibold">+${product.profit}</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Action Buttons - Fixed at bottom */}
                  <div className="flex gap-2 mb-4 mt-auto">
                    {activeTab === "unsold" ? (
                      <>
                        <button className="flex-1 bg-gradient-to-r from-[#A2BEF7] to-[#7298F1] text-white py-2 px-3 rounded-lg text-sm font-medium hover:from-[#8AABF4] hover:to-[#5A85EE] transition-all duration-300">
                          Mark as Sold
                        </button>
                        <button className="w-10 h-10 bg-[#2A2930] border border-[#3A3940] rounded-lg flex items-center justify-center hover:bg-[#3A3940] transition-all duration-300">
                          <Edit className="w-4 h-4 text-gray-400" />
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="flex-1 bg-[#2A2930] border border-[#3A3940] text-gray-300 py-2 px-3 rounded-lg text-sm font-medium hover:bg-[#3A3940] hover:text-white transition-all duration-300">
                          View Details
                        </button>
                        <button className="w-10 h-10 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center hover:bg-red-500/30 transition-all duration-300">
                          <Trash2 className="w-4 h-4 text-red-400" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Date - Fixed at bottom */}
                  <div className="pt-3 border-t border-[#2A2930]">
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>
                        {activeTab === "unsold"
                          ? `Purchased: ${new Date(product.purchaseDate).toLocaleDateString()}`
                          : `Sold: ${new Date(product.saleDate).toLocaleDateString()}`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {currentProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-br from-[#A2BEF7] to-[#7298F1] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">No items found</h3>
              <p className="text-gray-400 text-sm">
                {activeTab === "unsold" ? "You don't have any items in stock yet." : "You haven't sold any items yet."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
