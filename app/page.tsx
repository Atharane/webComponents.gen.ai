"use client"
import { useState } from "react"

import Footer1 from "./components/Footer/footer1"
import PromptInput from "./components/promptInput"

export default function Home() {
  interface Service {
    "Service Title": string
    "Service Description": string
  }

  interface SiteMetadata {
    Title: string
    Heading: string
    Service1: Service
    Service2: Service
    Service3: Service
    Service4: Service
    Footer: string
    "Image Description": string
  }

  const [siteMetadata, setSiteMetadata] = useState<SiteMetadata | null>(null)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900">
      <PromptInput setSiteMetadata={setSiteMetadata} />

      {siteMetadata && (
        <div className="w-full shadow-2xl p-12 bg-white/10 rounded-lg">
          <Footer1 footerline="lorem ispum dolor sit" />
        </div>
      )}
    </main>
  )
}
