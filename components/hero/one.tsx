import React from "react"

const HeroOne = ({
  title,
  description,
  imageUrl,
}: {
  title: string
  description: string
  imageUrl: string
}) => {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mb-6 ">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
            <span className="text-blue-600">{title.split(" ")[0]}</span>&nbsp;
            {title.split(" ").slice(1).join(" ")}
          </h1>
          <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
            {description}
          </p>
        </div>

        <div className=" ms-4">
          <img
            className="w-full rounded-md"
            src={imageUrl}
            alt="Image Description"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroOne
