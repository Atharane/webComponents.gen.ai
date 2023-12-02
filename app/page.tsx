import Image from 'next/image'
import Footer1 from './components/Footer/footer1'
import Footer2 from './components/Footer/footer2'
import PromptInput from "./components/promptInput"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900">
      <PromptInput />
    </main>
  )
}
