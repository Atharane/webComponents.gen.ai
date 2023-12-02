"use client"
import Image from 'next/image'
import Footer1 from './components/Footer/footer1'
import Footer2 from './components/Footer/footer2'
import PromptInput from "./components/promptInput"
import Navbar1 from './components/Navbar/navbar1'
import Navbar2 from './components/Navbar/navbar2'
import ServiceSection from './components/ServiceSection/serviceSection'
import { useState } from 'react'

interface Service {
  ServiceTitle: string;
  ServiceDescription:string;
}

export default function Home() {

  const [service , setService] = useState<Service>({ServiceTitle:"tits", ServiceDescription:"tits are great"});
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900">
      <PromptInput />
      <Navbar2 title="HEM "></Navbar2>
      <ServiceSection s1={{ServiceTitle:"tits", ServiceDescription:"tits are great"}} s2={service} s3={service} s4={service}></ServiceSection>
    </main>
  )
}
