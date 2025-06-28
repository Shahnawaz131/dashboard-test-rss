"use client"
import { useState } from "react"
import Sidebar from "@/components/layout/sidebar"
import { Header } from "@/components/layout/Header"

export default function ClientWrapper({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black flex h-full">
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <div className="w-full flex flex-col">
        <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        {children}
      </div>
    </div>
  )
}
