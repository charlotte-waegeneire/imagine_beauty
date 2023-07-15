import { testimony } from "../../data/testimony"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"

const Testimony = () => {
  const [index, setIndex] = useState(0)

  const handlePrev = () => {
    setIndex(index > 0 ? index - 1 : testimony.length - 1)
  }

  const handleNext = () => {
    setIndex(index < testimony.length - 1 ? index + 1 : 0)
  }

  useEffect(() => {
    setTimeout(() => handleNext(), 5000)
    // todo: transition
  }, [handleNext]);

  return (
    <div className="px-5 bg-gray-100 flex flex-col justify-evenly items-center h-screen">
      <h1 className="text-center uppercase text-3xl tracking-[0.3em]">
        {"Ce qu'ils disent de moi"}
      </h1>
      <div className="flex gap-5 justify-center items-center w-full px-5">
        <ChevronLeftIcon className="hidden md:block h-6 w-6 lg:h-10 lg:w-10" onClick={() => handlePrev()}/>
        <div
          className="bg-white rounded-lg flex flex-col gap-5 shadow-xl px-10 py-8 justify-start md:w-[500px] lg:w-[700px] transition ease-in-out delay-150">
          <div className="text-lg lg:text-2xl tracking-widest text-center">
            {testimony[index].name}
          </div>
          <div>
            <FontAwesomeIcon icon={faQuoteLeft} className="h-6 w-6 text-gray-500"/>
          </div>
          <div className="text-sm lg:text-base text-justify h-[150px] sm:h-[75px] flex items-center">
            {testimony[index].description}
          </div>
          <div>
            <FontAwesomeIcon icon={faQuoteRight} className="h-6 w-6 text-gray-500"/>
          </div>
        </div>
        <ChevronRightIcon className="hidden md:block h-6 w-6 lg:h-10 lg:w-10" onClick={() => handleNext()}/>
      </div>
    </div>
  )
}

export default Testimony