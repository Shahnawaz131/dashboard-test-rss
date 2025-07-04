"use client"
import { useEffect, useState, useRef, useCallback } from "react"
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
} from "react-icons/fi"
import { TbLayoutSidebarRightCollapse } from "react-icons/tb"

import { useScreenSize } from "@/hooks/screenSize"

const MIN_SIDEBAR_WIDTH = 80
const MAX_SIDEBAR_WIDTH = 400
const DEFAULT_SIDEBAR_WIDTH = 280
const COLLAPSED_SIDEBAR_WIDTH = 80

export default function Sidebar({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [sidebarWidth, setSidebarWidth] = useState(DEFAULT_SIDEBAR_WIDTH)
  const [isResizing, setIsResizing] = useState(false)
  const [showCollapseButton, setShowCollapseButton] = useState(false)
  const [isLogoHovered, setIsLogoHovered] = useState(false)
  const screenWidth = useScreenSize().width
  const sidebarRef = useRef(null)
  const resizeHandleRef = useRef(null)

  useEffect(() => {
    if (screenWidth < 980) {
      setIsSidebarOpen(false)
    } else {
      setIsSidebarOpen(true)
    }
  }, [screenWidth])

  const startResizing = useCallback((e) => {
    e.preventDefault()
    setIsResizing(true)
    document.body.style.cursor = "col-resize"
    document.body.style.userSelect = "none"
  }, [])

  const stopResizing = useCallback(() => {
    setIsResizing(false)
    document.body.style.cursor = ""
    document.body.style.userSelect = ""
  }, [])

  const resize = useCallback(
    (e) => {
      if (!isResizing) return

      const sidebarRect = sidebarRef.current?.getBoundingClientRect()
      if (!sidebarRect) return

      const newWidth = e.clientX - sidebarRect.left
      const clampedWidth = Math.min(Math.max(newWidth, MIN_SIDEBAR_WIDTH), MAX_SIDEBAR_WIDTH)

      setSidebarWidth(clampedWidth)

      if (clampedWidth <= MIN_SIDEBAR_WIDTH + 20 && isSidebarOpen) {
        setIsSidebarOpen(false)
      } else if (clampedWidth > MIN_SIDEBAR_WIDTH + 20 && !isSidebarOpen) {
        setIsSidebarOpen(true)
      }
    },
    [isResizing, isSidebarOpen],
  )

  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", resize)
      document.addEventListener("mouseup", stopResizing)
      return () => {
        document.removeEventListener("mousemove", resize)
        document.removeEventListener("mouseup", stopResizing)
      }
    }
  }, [isResizing, resize, stopResizing])

  const toggleSidebar = () => {
    if (screenWidth > 980) {
      setIsSidebarOpen((prev) => !prev)
      if (!isSidebarOpen) {
        setSidebarWidth(DEFAULT_SIDEBAR_WIDTH)
      }
    }
  }

  const currentWidth = isSidebarOpen ? sidebarWidth : COLLAPSED_SIDEBAR_WIDTH

  const navigationGroups = [
    [
      { path: "/", icon: <FiInbox size={18} />, label: "Dashboard" },
      { path: "/warehouse", icon: <FiDivideSquare size={18} />, label: "Warehouse" },
      { path: "/messages", icon: <FiMessageCircle size={18} />, label: "Messages" },
      { path: "/analytics", icon: <FiBarChart size={18} />, label: "Analytics" },
      { path: "/docs", icon: <FiBookOpen size={18} />, label: "Documentation" },
      { path: "/projects", icon: <FiDivideSquare size={18} />, label: "Projects" },
      { path: "/history", icon: <FiClock size={18} />, label: "History" },
      { path: "/saved", icon: <FiSave size={18} />, label: "Saved" },
      { path: "/notifications", icon: <FiBell size={18} />, label: "Notifications" },
    ],
    [
      { path: "/settings", icon: <FiSettings size={18} />, label: "Settings" },
      { path: "/logout", icon: <FiLogOut size={18} />, label: "Sign-out" },
    ],
  ]

  // Hide sidebar on mobile unless it's desktop
  if (screenWidth < 980) {
    return null
  }

  return (
    <div
      ref={sidebarRef}
      className="relative border-r border-[#16151A] min-h-screen h-full px-1 transition-all duration-300 ease-in-out"
      style={{ width: `${currentWidth}px` }}
    >
      <div className="flex flex-col h-screen pb-10 pt-3">
        <div
          className="relative flex items-center justify-between ml-2.5 mb-10 cursor-pointer transition-all duration-300 ease-in-out"
          onMouseEnter={() => {
            setShowCollapseButton(true)
            if (!isSidebarOpen) setIsLogoHovered(true)
          }}
          onMouseLeave={() => {
            setShowCollapseButton(false)
            setIsLogoHovered(false)
          }}
        >
          <div className="relative flex items-center">
            <div className="relative">
              <Image
                alt="Logo"
                src={"/Logo.webp"}
                width={36}
                height={36}
                className={`flex-shrink-0 transition-all duration-300 ease-in-out ${
                  !isSidebarOpen && isLogoHovered ? "blur-sm opacity-60" : ""
                }`}
              />

              {!isSidebarOpen && isLogoHovered && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg backdrop-blur-sm transition-all duration-200 ease-in-out"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleSidebar()
                  }}
                >
                  <TbLayoutSidebarRightCollapse className="text-white drop-shadow-lg" size={20} />
                </div>
              )}
            </div>

            {isSidebarOpen && (
              <span className="text-white text-[24px] leading-[24px] ml-3 transition-all duration-300 ease-in-out whitespace-nowrap">
                rwa.<span className="text-[16px]">xyz</span>
              </span>
            )}
          </div>

          {isSidebarOpen && screenWidth > 980 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                toggleSidebar()
              }}
              className="p-2 rounded-lg hover:bg-[#18181A] transition-all duration-200 ease-in-out text-[#565658] hover:text-white group"
              title="Collapse sidebar"
            >
              <TbLayoutSidebarRightCollapse
                size={20}
                className="transition-transform duration-200 group-hover:scale-110"
              />
            </button>
          )}
        </div>

        <div className="flex flex-col flex-1 justify-between h-full">
          <nav>
            <ul className="flex flex-col gap-1 px-2.5">
              {navigationGroups[0].map((navItem, navIdx) => {
                const isActive = navItem.path === pathname
                return (
                  <Link
                    href={navItem.path}
                    key={`0-${navIdx}`}
                    className={`group transition-all duration-200 ease-in-out ${
                      isSidebarOpen
                        ? `flex items-center rounded-lg ${isActive ? "bg-gradient-to-r from-[#7d5a47] to-black" : "hover:bg-[#18181A]"}`
                        : "flex justify-center"
                    }`}
                    title={!isSidebarOpen ? navItem.label : ""}
                  >
                    {isSidebarOpen ? (
                      <div className="relative flex items-center gap-2 px-2.5 py-2 overflow-hidden rounded-lg h-full min-h-[44px] w-full">
                        {isActive && (
                          <span className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-[#ffb86c] to-[#ff6b6b] shadow-[0_0_8px_2px_rgba(255,184,108,0.7)]"></span>
                        )}
                        <div
                          className={`my-1 rounded-lg ml-2 transition-colors duration-200 ${
                            isActive ? "text-white" : "text-[#272629] group-hover:text-[#565658]"
                          }`}
                        >
                          {navItem.icon}
                        </div>
                        <span
                          className={`text-[16px] min-w-38 transition-all duration-300 ease-in-out whitespace-nowrap ${
                            isActive ? "text-white" : "text-[#272629] group-hover:text-[#565658]"
                          }`}
                        >
                          {navItem.label}
                        </span>
                      </div>
                    ) : (
                      <div
                        className={`p-2.5 my-1 rounded-lg flex items-center justify-center transition-all duration-200 ease-in-out ${
                          isActive
                            ? "bg-[#18181A] text-[#565658]"
                            : "bg-transparent text-[#272629] hover:bg-[#18181A] hover:text-[#565658]"
                        }`}
                      >
                        {navItem.icon}
                      </div>
                    )}
                  </Link>
                )
              })}
            </ul>
          </nav>

          <nav className="mt-8">
            <ul className="flex flex-col gap-1 px-2.5">
              {navigationGroups[1].map((navItem, navIdx) => {
                const isActive = navItem.path === pathname
                return (
                  <Link
                    href={navItem.path}
                    key={`1-${navIdx}`}
                    className={`group transition-all duration-200 ease-in-out ${
                      isSidebarOpen
                        ? `flex items-center rounded-lg ${isActive ? "bg-gradient-to-r from-[#7d5a47] to-black" : "hover:bg-[#18181A]"}`
                        : "flex justify-center"
                    }`}
                    title={!isSidebarOpen ? navItem.label : ""}
                  >
                    {isSidebarOpen ? (
                      <div className="relative flex items-center gap-2 px-2.5 py-2 overflow-hidden rounded-lg h-full min-h-[44px] w-full">
                        {isActive && (
                          <span className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-[#ffb86c] to-[#ff6b6b] shadow-[0_0_8px_2px_rgba(255,184,108,0.7)]"></span>
                        )}
                        <div
                          className={`my-1 rounded-lg ml-2 transition-colors duration-200 ${
                            isActive ? "text-white" : "text-[#272629] group-hover:text-[#565658]"
                          }`}
                        >
                          {navItem.icon}
                        </div>
                        <span
                          className={`text-[16px] min-w-38 transition-all duration-300 ease-in-out whitespace-nowrap ${
                            isActive ? "text-white" : "text-[#272629] group-hover:text-[#565658]"
                          }`}
                        >
                          {navItem.label}
                        </span>
                      </div>
                    ) : (
                      <div
                        className={`p-2.5 my-1 rounded-lg flex items-center justify-center transition-all duration-200 ease-in-out ${
                          isActive
                            ? "bg-[#18181A] text-[#565658]"
                            : "bg-transparent text-[#272629] hover:bg-[#18181A] hover:text-[#565658]"
                        }`}
                      >
                        {navItem.icon}
                      </div>
                    )}
                  </Link>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>

      {screenWidth > 980 && (
        <div
          ref={resizeHandleRef}
          className={`absolute top-0 right-0 w-1 h-full cursor-col-resize bg-transparent hover:bg-[#565658] transition-all duration-200 ease-in-out group ${
            isResizing ? "bg-[#565658]" : ""
          }`}
          onMouseDown={startResizing}
        >
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-3 h-8 bg-[#565658] rounded-l-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out flex items-center justify-center">
            <div className="w-0.5 h-4 bg-[#272629] rounded-full"></div>
          </div>
        </div>
      )}
    </div>
  )
}
