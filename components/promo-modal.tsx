"use client"

import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Sparkles } from "lucide-react"

export function PromoModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 5000)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md border-none p-0 overflow-hidden">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-6 text-white text-center">
          <Sparkles className="w-10 h-10 mx-auto mb-2" />
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white text-center">
              Route 66 Car Wash Club Members
            </DialogTitle>
            <DialogDescription className="text-white/90 text-base text-center mt-2">
              Get <span className="font-bold text-white">20% OFF</span> any #1 Ultra Shine Detail Service!
            </DialogDescription>
          </DialogHeader>
        </div>
        <div className="p-6 flex justify-center gap-3">
          <button
            onClick={() => {
              setOpen(false)
              setTimeout(() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }, 150)
            }}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-md hover:opacity-90 transition-opacity shadow-md shadow-blue-500/30"
          >
            Book Now
          </button>
          <button
            onClick={() => setOpen(false)}
            className="px-6 py-2 bg-white text-gray-700 font-medium rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Got it
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
