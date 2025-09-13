"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Dashboard } from "@/components/dashboard"
import { LineStatusOverview } from "@/components/line-status-overview"
import { FaultDetection } from "@/components/fault-detection"
import { MaintenanceSchedule } from "@/components/maintenance-schedule"
import { GridMap } from "@/components/grid-map"
import { Settings } from "@/components/settings"

export default function PowerGridMonitor() {
  const [activeView, setActiveView] = useState("dashboard")
  const [selectedRegion, setSelectedRegion] = useState("all")

  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return <Dashboard selectedRegion={selectedRegion} activeView={activeView} />
      case "analytics":
        return <Dashboard selectedRegion={selectedRegion} activeView={activeView} />
      case "line-status":
        return <LineStatusOverview selectedRegion={selectedRegion} />
      case "fault-detection":
        return <FaultDetection />
      case "maintenance":
        return <MaintenanceSchedule />
      case "grid-map":
        return <GridMap />
      case "settings":
        return <Settings />
      default:
        return <Dashboard selectedRegion={selectedRegion} activeView={activeView} />
    }
  }

  return (
    <div className="w-full h-screen bg-background dark:bg-slate-950 flex flex-col transition-colors duration-300">
      <Header selectedRegion={selectedRegion} onRegionChange={setSelectedRegion} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeView={activeView} onViewChange={setActiveView} />

        <main className="flex-1 overflow-auto bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}
