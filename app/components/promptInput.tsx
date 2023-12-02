"use client"

import { useState } from "react"

const PromptInput = () => {
  const [prompt, setPrompt] = useState("")

  const fetchLLMResponse = async () => {
    // const response = await fetch("http://localhost:8000/llm", {
    //   method: "POST",
    //   body: JSON.stringify({ prompt }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })

    // const data = await response.json()
    console.log("fetching...")
  }

  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
        <div className="lg:col-span-3">
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
            Text -&gt; Code
          </h1>
          <p className="mt-3 text-lg text-gray-800 dark:text-gray-400 line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            dolorem aspernatur placeat aperiam aliquid maiores in obcaecati
            doloremque! Explicabo dolore natus delectus ab praesentium adipisci
            atque amet similique molestiae harum!
          </p>

          <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <div className="w-full sm:w-auto">
              <label htmlFor="hero-input" className="sr-only">
                Search
              </label>
              <textarea
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                id="hero-input"
                name="hero-input"
                rows={1}
                className="py-3 px-4 block w-full xl:min-w-[18rem] border-gray-200 rounded-md text-sm  focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="An affiliate marketing website"
              />
            </div>
            <a
              className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
              onClick={fetchLLMResponse}
            >
              ✨ Generate
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 mt-10 lg:mt-0">
          <img
            className="w-full rounded-xl"
            src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
            alt="Image Description"
          />
        </div>
      </div>
    </div>
  )
}

export default PromptInput
