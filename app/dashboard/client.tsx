"use client"

import { useEffect, useState } from "react"

import FooterOne from "@/components/footers/one"
import HeroOne from "@/components/hero/one"
import PreviewHeader from "@/components/previewHeader"
import PromptInput from "@/components/promptInput"
import NavbarTwo from "@/components/navbar/two"
import ServiceSection from "@/components/services/one"

export default function DashboardClient() {
  interface Service {
    ServiceTitle: string
    ServiceDescription: string
  }

  interface SiteMetadata {
    WebsiteName: string
    ShortDescription: string
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PromptInput setSiteMetadata={setSiteMetadata} />

      {siteMetadata && (
        <div className="w-full shadow-2xl p-12 bg-white/10 rounded-lg space-y-4">
          <PreviewHeader />

          <div className="space-y-4" id="site-preview">
            <NavbarTwo title={siteMetadata.WebsiteName}></NavbarTwo>
            <HeroOne
              title={siteMetadata.Title}
              description={
                siteMetadata.ShortDescription || siteMetadata.Heading || ""
              }
              imageUrl={`https://image.pollinations.ai/prompt/Dynamic${siteMetadata.ImageDescription}?width=1420&height=1080&nologo=true`}
            />
            <ServiceSection
              s1={siteMetadata.Service1}
              s2={siteMetadata.Service2}
              s3={siteMetadata.Service3}
              s4={siteMetadata.Service4}
            ></ServiceSection>
            <FooterOne footerline={siteMetadata.Footer} />
          </div>
        </div>
      )}
    </main>
  )
}
