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
  const service1: Service = {
    ServiceTitle: "Customized Itineraries",
    ServiceDescription: "We create personalized honeymoon itineraries based on your preferences and budget.",
  }

  const service2: Service = {
    ServiceTitle:"Luxury Accommodations",
    ServiceDescription:"We offer a wide range of luxury accommodations to make your honeymoon extra special.",
  }

  const service3: Service = {
    ServiceTitle:"Romantic Activities",
    ServiceDescription:"From candlelit dinners to couples massages, we help you plan the most romantic activities for your honeymoon.",
  }

  const service4: Service = {
    ServiceTitle:"Expert Advice",
    ServiceDescription:"Our team of experienced travel experts are always available to provide you with expert advice and recommendations for your honeymoon.",
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900">
      <PromptInput setSiteMetadata={setSiteMetadata} />

      {siteMetadata && (
        <div className="w-full shadow-2xl p-12 bg-white/10 rounded-lg space-y-4">
          <PreviewHeader />

          <div className="space-y-4" id="site-preview">
            <Navbar2 title="SHUBHMUHRAT"></Navbar2>
            <Hero1
              title="Honeymoon Planner"
              description="Plan Your Dream Honeymoon with Us"
              imageUrl="https://www.wedaways.com/wp-content/uploads/2018/08/honeymoon-planning.jpg"
            />
            <ServiceSection
              s1={service1}
              s2={service2}
              s3={service3}
              s4={service4}
            ></ServiceSection>
            <Footer1 footerline="lorem ispum dolor sit" />
          </div>
        </div>
      )}
    </main>
  )
}
