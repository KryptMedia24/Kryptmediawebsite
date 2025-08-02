import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const images = [
  "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
]

const Projects = () => {
  const [details, setDetails] = useState(null)

  const [sliderRef] = useKeenSlider({
    loop: true,
    detailsChanged(s) {
      setDetails(s.track.details)
    },
    initial: 2,
  })

  const scaleStyle = (idx) => {
    if (!details) return {}
    const slide = details.slides[idx]
    const scaleSize = 0.7
    const scale = 1 - (scaleSize - scaleSize * slide.portion)
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    }
  }

  return (
    <div id="projects" className="w-full flex flex-col items-center justify-center py-12 bg-black relative">
      {/* Overlay Title */}
      <div className="absolute top-8 text-center z-10">
        <h2 className="text-4xl font-bold text-white">Projects</h2>
        <p className="text-lg text-gray-200 mt-2">A glimpse into some of our recent work</p>
      </div>

      {/* Slider */}
      <div className="max-w-4xl w-full mt-24">
        <div ref={sliderRef} className="keen-slider zoom-out">
          {images.map((src, idx) => (
            <div key={idx} className="keen-slider__slide zoom-out__slide flex justify-center">
              <div style={scaleStyle(idx)} className="transition-transform duration-50">
                <img
                  src={src}
                  alt={`Project ${idx + 1}`}
                  className="rounded-xl shadow-lg max-h-[500px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
