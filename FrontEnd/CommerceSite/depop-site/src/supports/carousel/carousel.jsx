import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Carousel({children: slides,autoSlide = false, autoSlideInterval = 2000}){
  const [curr, setCurr] = useState(0)
  const prev = () => setCurr((curr) === 0 ? slides.length-1 : curr - 1)
  const next = () => setCurr((curr) === slides.length-1 ? 0 : curr + 1)
  
  useEffect(() => {
    if(!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  },[])

  return(
    <div className="overflow-hidden relative w-full h-[300px] mx-auto">
      <div className="w-full bg-red-400">
      <div></div>
      <div className="w-[300px] flex transition-transform ease-out duration-500" style={{transform: `translateX(-${curr*100}%)`}}>
          {slides[0]}
      </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev}>
          <FaChevronLeft size={30} className="bg-white/80 hover:bg-white p-2 rounded-full"/>
        </button>
        <button onClick={next}>
          <FaChevronRight size={30} className="bg-white/80 hover:bg-white p-2 rounded-full"/>
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-2 h-2 bg-white rounded-full
              ${curr === i ? "p-1" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
    
  )
}