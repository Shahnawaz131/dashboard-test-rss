"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import {
  FiMessageCircle,
  FiBarChart,
  FiBookOpen,
  FiClock,
  FiBell,
  FiInbox,
  FiSave,
  FiDivideSquare,
  FiSettings,
  FiLogOut,
  FiX,
  FiChevronDown,
} from "react-icons/fi"
import { useEffect, useState, useCallback } from "react"

export const MobileMenu = ({ isOpen, onClose }) => {
  const pathname = usePathname()
  const [isClassExpanded, setIsClassExpanded] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
    } else {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
    }

    return () => {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
    }
  }, [isOpen, mounted])

  const handleBackdropClick = useCallback(
    (e) => {
      e.preventDefault()
      e.stopPropagation()
      onClose()
    },
    [onClose],
  )

  const handleClose = useCallback(
    (e) => {
      if (e) {
        e.preventDefault()
        e.stopPropagation()
      }
      onClose()
    },
    [onClose],
  )

  const handleLinkClick = useCallback(() => {
    setTimeout(() => {
      onClose()
    }, 100)
  }, [onClose])

  const navigationItems = [
    { path: "/", icon: <FiInbox size={18} />, label: "Dashboard" },
    { path: "/messages", icon: <FiMessageCircle size={18} />, label: "Messages" },
    { path: "/analytics", icon: <FiBarChart size={18} />, label: "Analytics" },
    { path: "/docs", icon: <FiBookOpen size={18} />, label: "Documentation" },
    { path: "/projects", icon: <FiDivideSquare size={18} />, label: "Projects" },
    { path: "/history", icon: <FiClock size={18} />, label: "History" },
    { path: "/saved", icon: <FiSave size={18} />, label: "Saved" },
    { path: "/notifications", icon: <FiBell size={18} />, label: "Notifications" },
  ]

  const accountItems = [
    { path: "/settings", icon: <FiSettings size={18} />, label: "Settings" },
    { path: "/logout", icon: <FiLogOut size={18} />, label: "Sign-out" },
  ]

  if (!mounted || !isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        onClick={handleBackdropClick}
        style={{
          opacity: isOpen ? 1 : 0,
          transition: "opacity 300ms ease-out",
        }}
      />

      <div
        className="fixed top-4 right-4 left-4 max-w-sm mx-auto bg-[#1A191E] border border-[#2A2930] rounded-2xl shadow-2xl z-50 md:hidden overflow-hidden"
        style={{
          transform: isOpen ? "translateY(0) scale(1)" : "translateY(-16px) scale(0.95)",
          opacity: isOpen ? 1 : 0,
          transition: "all 300ms ease-out",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-[#2A2930]">
          <div className="flex items-center gap-3">
            <Image alt="Logo" src={"/Logo.webp"} width={24} height={24} />
            <span className="text-white font-semibold text-lg">
              rwa.<span className="text-sm">xyz</span>
            </span>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-[#2A2930] rounded-lg transition-all duration-200"
            aria-label="Close menu"
          >
            <FiX size={18} />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto">
          <div className="p-4">
            <nav className="space-y-1">
              {navigationItems.map((item, index) => {
                const isActive = item.path === pathname
                return (
                  <Link
                    key={index}
                    href={item.path}
                    onClick={handleLinkClick}
                    className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-[#7d5a47] to-[#5a4037] text-white"
                        : "text-gray-300 hover:bg-[#2A2930] hover:text-white"
                    }`}
                  >
                    <div className={`${isActive ? "text-white" : "text-gray-400"}`}>{item.icon}</div>
                    <span className="font-medium text-sm">{item.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-gradient-to-b from-[#ffb86c] to-[#ff6b6b] rounded-full shadow-[0_0_8px_2px_rgba(255,184,108,0.7)]" />
                    )}
                  </Link>
                )
              })}

              <div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsClassExpanded(!isClassExpanded)
                  }}
                  className="w-full flex items-center justify-between px-3 py-3 text-gray-300 hover:bg-[#2A2930] hover:text-white rounded-xl transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <FiBookOpen className="text-gray-400" size={18} />
                    <span className="font-medium text-sm">Class</span>
                  </div>
                  <FiChevronDown
                    className={`text-gray-400 transition-transform duration-200 ${isClassExpanded ? "rotate-180" : ""}`}
                    size={16}
                  />
                </button>

                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isClassExpanded ? "128px" : "0px",
                    opacity: isClassExpanded ? 1 : 0,
                  }}
                >
                  <div className="ml-6 mt-1 space-y-1">
                    <Link
                      href="/class/program"
                      onClick={handleLinkClick}
                      className="flex items-center gap-2 px-3 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-[#2A2930] rounded-lg transition-all duration-200"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Program View
                    </Link>
                    <Link
                      href="/class/premium"
                      onClick={handleLinkClick}
                      className="flex items-center gap-2 px-3 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-[#2A2930] rounded-lg transition-all duration-200"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Premium Class
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/lifestyle"
                onClick={handleLinkClick}
                className="flex items-center gap-3 px-3 py-3 text-gray-300 hover:bg-[#2A2930] hover:text-white rounded-xl transition-all duration-200"
              >
                <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md flex items-center justify-center">
                  <span className="text-white text-xs font-bold">L</span>
                </div>
                <span className="font-medium text-sm">Lifestyle</span>
              </Link>
            </nav>
          </div>

          <div className="border-t border-[#2A2930] p-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">Account</h3>
            <nav className="space-y-1">
              {accountItems.map((item, index) => {
                const isActive = item.path === pathname
                return (
                  <Link
                    key={index}
                    href={item.path}
                    onClick={handleLinkClick}
                    className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-[#7d5a47] to-[#5a4037] text-white"
                        : "text-gray-300 hover:bg-[#2A2930] hover:text-white"
                    }`}
                  >
                    <div className={`${isActive ? "text-white" : "text-gray-400"}`}>{item.icon}</div>
                    <span className="font-medium text-sm">{item.label}</span>
                  </Link>
                )
              })}
            </nav>
          </div>

          <div className="border-t border-[#2A2930] p-4">
            <div className="flex items-center gap-3 p-3 bg-[#2A2930] rounded-xl">
              <Image src="/person.jpg" alt="Profile" width={32} height={32} className="rounded-full" />
              <div className="flex-1">
                <div className="text-white text-sm font-medium">Hossein</div>
                <div className="text-gray-400 text-xs">@user680523</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
