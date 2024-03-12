"use client"
import { useEffect, useState } from "react"

import Footer1 from "./components/Footer/footer1"
import PromptInput from "./components/promptInput"
import Navbar2 from "./components/Navbar/navbar2"
import ServiceSection from "./components/ServiceSection/serviceSection"
import PreviewHeader from "./components/previewHeader"
import Hero1 from "./components/Hero/hero1"
import Template1 from "./components/Template2/template"
import { metadata } from "./layout"

export default function Home() {
  interface Service {
    ServiceTitle: string
    ServiceDescription: string
  }

  interface SiteMetadata {
    WebsiteName: string
    ShortDescription:string
    Title: string
    Heading: string
    Service1: Service
    Service2: Service
    Service3: Service
    Service4: Service
    Footer: string
    ImageDescription: string
  }

  const [siteMetadata, setSiteMetadata] = useState<SiteMetadata | null>(null)

  useEffect(() => {
    const element = document.getElementById("site-preview")
    element?.scrollIntoView({ behavior: "smooth" })
  }, [siteMetadata?.Heading])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900">
      <PromptInput setSiteMetadata={setSiteMetadata} />

      <Template1/>

      {siteMetadata && (
        <div className="w-full shadow-2xl p-12 bg-white/10 rounded-lg space-y-4">
          <PreviewHeader />

          <div className="space-y-4" id="site-preview">
            <Navbar2 title={siteMetadata.WebsiteName}></Navbar2>
            <Hero1
              title={siteMetadata.Title}
              description={
                siteMetadata.ShortDescription || siteMetadata.Heading || ""
              }
              // imageUrl="https://www.wedaways.com/wp-content/uploads/2018/08/honeymoon-planning.jpg"
              imageUrl={`https://image.pollinations.ai/prompt/Dynamic${siteMetadata.ImageDescription}?width=1420&height=1080&nologo=true`}
            />
            <ServiceSection
              s1={siteMetadata.Service1}
              s2={siteMetadata.Service2}
              s3={siteMetadata.Service3}
              s4={siteMetadata.Service4}
            ></ServiceSection>
            <Footer1 footerline={siteMetadata.Footer} />
          </div>
        </div>
      )}
    </main>
  )
}
