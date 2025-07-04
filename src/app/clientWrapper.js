"use client"
import { useState } from "react"
import Sidebar from "@/components/layout/sidebar"
import { Header } from "@/components/layout/Header"

export default function ClientWrapper({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black flex h-screen overflow-hidden">
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <div className="flex-1 flex flex-col min-w-0">
        <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  )
}
