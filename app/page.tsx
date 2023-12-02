import Image from "next/image"
import PromptInput from "./components/promptInput"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900">
      <PromptInput />
    </main>
  )
}
