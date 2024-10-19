'use client'
import { useState } from 'react'

const images = ['/img1.png', '/img2.png']

export default function Assignments() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-[800px] h-[600px]">
        {' '}
        {/* 너비와 높이를 늘림 */}
        <img
          src={images[currentIndex]}
          alt={`Assignment ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-lg"
          onClick={handleNextImage}
        />
      </div>
    </div>
  )
}
