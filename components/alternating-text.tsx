"use client"

import { useState, useEffect } from "react"

interface AlternatingTextProps {
  texts: string[]
  interval?: number
}

export function AlternatingText({ texts, interval = 5000 }: AlternatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      // First fade out
      setIsVisible(false)

      // Change text and fade in after a short delay
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        setIsVisible(true)
      }, 500) // Half a second for the fade out
    }, interval)

    return () => clearInterval(intervalId)
  }, [texts, interval])

  return (
    <div className="h-8 flex items-center">
      <div className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        {texts[currentIndex]}
      </div>
    </div>
  )
}
