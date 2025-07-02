"use client"
import Image from "next/image"
import { useState, useRef, useEffect, useMemo } from "react"
import { MobileMenu } from "./MobileMenu"
import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiBell,
  FiMenu,
  FiSearch,
  FiX,
  FiArrowUp,
  FiUser,
  FiSettings,
  FiLogOut,
  FiHelpCircle,
} from "react-icons/fi"

const dashboardOptions = [
  { label: "Dashboard", value: "dashboard" },
  { label: "Analytics", value: "analytics" },
  { label: "Projects", value: "projects" },
  { label: "Reports", value: "reports" },
]

export const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [selectedDashboard, setSelectedDashboard] = useState("dashboard")
  const [isDashboardOpen, setIsDashboardOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const dashboardRef = useRef(null)
  const profileRef = useRef(null)

  // Format date as 'Today, Mon D'
  const formattedDate = useMemo(() => {
    const now = new Date();
    const options = { month: 'short', day: 'numeric' };
    const formatted = now.toLocaleDateString('en-US', options);
    return `Today, ${formatted}`;
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dashboardRef.current && !dashboardRef.current.contains(event.target)) {
        setIsDashboardOpen(false)
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleMobileMenuToggle = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsMobileMenuOpen((prev) => !prev)
  }

  return (
    <>
      <div className="hidden md:flex items-center justify-between px-6 py-3 border-b border-[#16151A] bg-black relative z-40">
        <div className="relative" ref={dashboardRef}>
          <button
            onClick={() => setIsDashboardOpen(!isDashboardOpen)}
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200 py-2 px-1"
          >
            <span className="text-lg font-medium">
              {dashboardOptions.find((opt) => opt.value === selectedDashboard)?.label}
            </span>
            <FiChevronDown
              className={`text-gray-400 transition-transform duration-200 ${isDashboardOpen ? "rotate-180" : ""}`}
              size={16}
            />
          </button>

          {isDashboardOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-[#1A191E] border border-[#2A2930] rounded-xl shadow-xl z-50 py-2">
              {dashboardOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setSelectedDashboard(option.value)
                    setIsDashboardOpen(false)
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 ${
                    selectedDashboard === option.value
                      ? "text-white bg-[#2A2930]"
                      : "text-gray-300 hover:text-white hover:bg-[#2A2930]"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex-1 max-w-md mx-8">
          {/* Search Bar */}
          <div className="relative">
            <div className="flex items-center bg-[#1A191E] border border-[#2A2930] rounded-full px-2 py-2 focus-within:border-[#3A3940] transition-colors duration-200">
              <FiSearch className="text-gray-400 mr-3" size={18} />
              <input
                type="text"
                placeholder="Search something..."
                className="flex-1 bg-transparent text-white text-sm placeholder:text-gray-500 outline-none"
              />
              <button className="ml-3 p-1 hover:bg-[#2A2930] rounded-md transition-colors duration-150">
                <FiArrowUp className="text-gray-400" size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Notification Bell with New Count */}
          <div className="relative">
            <div className="flex items-center bg-[#1A191E] border border-[#2A2930] rounded-full px-4 py-2.5 transition-colors duration-200 cursor-pointer gap-2">
              <div className="relative">
                <FiBell size={18} className="text-gray-300" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
              </div>
              <span className="hidden lg:block text-sm text-white font-medium">2 new</span>
            </div>
          </div>

          {/* Date Section with Navigation */}
          <div className="hidden lg:flex items-center gap-3 text-gray-300">
            <div className="flex items-center bg-[#1A191E] border border-[#2A2930] rounded-full px-2 py-2 gap-2">
              <button className="p-1 hover:text-white transition-colors duration-200">
                <FiChevronLeft size={16} />
              </button>
              <span className="text-sm font-medium whitespace-nowrap text-white">{formattedDate}</span>
              <button className="p-1 hover:text-white transition-colors duration-200">
                <FiChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Profile Badge Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-3 hover:bg-[#1A191E] rounded-lg p-2 transition-colors duration-200"
            >
              <Image src="/person.jpg" alt="Profile" width={32} height={32} className="rounded-full" />
              <div className="hidden lg:flex flex-col items-start">
                <div className="flex items-center gap-1">
                  <span className="text-white text-sm font-medium">Hossein</span>
                  <FiChevronDown
                    className={`text-gray-400 transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""}`}
                    size={14}
                  />
                </div>
                <span className="text-gray-400 text-xs">@user680523</span>
              </div>
            </button>

            {isProfileOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-[#1A191E] border border-[#2A2930] rounded-xl shadow-xl z-50 py-2">
                <div className="px-4 py-3 border-b border-neutral-800">
                  <div className="flex items-center gap-3">
                    <Image src="/person.jpg" alt="Profile" width={36} height={36} className="rounded-full" />
                    <div>
                      <div className="text-white text-sm font-medium">Hossein</div>
                      <div className="text-gray-400 text-xs">@user680523</div>
                    </div>
                  </div>
                </div>

                <div className="py-2">
                  <button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-300 hover:text-white hover:bg-[#2A2930] transition-colors duration-150">
                    <FiUser size={16} />
                    <span className="text-sm">Profile</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-300 hover:text-white hover:bg-[#2A2930] transition-colors duration-150">
                    <FiSettings size={16} />
                    <span className="text-sm">Settings</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-300 hover:text-white hover:bg-[#2A2930] transition-colors duration-150">
                    <FiHelpCircle size={16} />
                    <span className="text-sm">Help & Support</span>
                  </button>
                </div>

                <div className="border-t border-[#2A2930] pt-2">
                  <button className="w-full flex items-center gap-3 px-4 py-2.5 text-red-400 hover:text-red-300 hover:bg-[#2A2930] transition-colors duration-150">
                    <FiLogOut size={16} />
                    <span className="text-sm">Sign out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-[#16151A] bg-black relative z-40">
        <div className="flex items-center">
          <Image alt="Logo" src={"/Logo.webp"} width={28} height={28} />
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2.5 text-gray-400 hover:text-white hover:bg-[#1A191E] rounded-lg transition-all duration-200">
            <FiSearch size={20} />
          </button>

          <button className="p-2.5 text-gray-400 hover:text-white hover:bg-[#1A191E] rounded-lg transition-all duration-200 relative">
            <FiBell size={20} />
            <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></div>
          </button>

          <button className="p-1.5 hover:bg-[#1A191E] rounded-lg transition-all duration-200">
            <Image src="/person.jpg" alt="Profile" width={28} height={28} className="rounded-full" />
          </button>

          <button
            onClick={handleMobileMenuToggle}
            className={`p-2.5 rounded-lg transition-all duration-200 ${
              isMobileMenuOpen ? "text-white bg-[#1A191E]" : "text-gray-400 hover:text-white hover:bg-[#1A191E]"
            }`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
