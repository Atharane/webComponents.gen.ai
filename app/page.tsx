"use client"
import { useState } from "react"

import Footer1 from "./components/Footer/footer1"
import PromptInput from "./components/promptInput"
import Navbar2 from "./components/Navbar/navbar2"
import ServiceSection from "./components/ServiceSection/serviceSection"
import PreviewHeader from "./components/previewHeader"
import Hero1 from "./components/Hero/hero1"

export default function Home() {
  interface Service {
    ServiceTitle: string
    ServiceDescription: string
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
  const service: Service = {
    ServiceTitle: "bread",
    ServiceDescription: "bread is great",
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900">
      <PromptInput setSiteMetadata={setSiteMetadata} />

      {siteMetadata && (
        <div className="w-full shadow-2xl p-12 bg-white/10 rounded-lg space-y-4">
          <PreviewHeader />

          <div className="space-y-4" id="site-preview">
            <Navbar2 title="HEM"></Navbar2>
            <Hero1
              title="wedding palnner websites"
              description="hello"
              imageUrl="https://image.pollinations.ai/prompt/Dynamic%20Visuals%20Celebrating%20the%20Pulse%20of%20Sports%20-%20A%20Kaleidoscope%20of%20Passion%20and%20Action?width=1080&height=1420&nologo=true"
            />
            <ServiceSection
              s1={service}
              s2={service}
              s3={service}
              s4={service}
            ></ServiceSection>
            <Footer1 footerline="lorem ispum dolor sit" />
          </div>
        </div>
      )}
    </main>
  )
}
