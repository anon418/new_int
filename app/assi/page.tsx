'use client'
import { useState } from 'react'
import Image from 'next/image' // Image 컴포넌트 import

const images = ['/img1.png', '/img2.png', '/img4.png', '/img5.png']

export default function Assignments() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="relative w-[800px] h-[600px]">
        <Image
          src={images[currentIndex]}
          alt={`Assignment ${currentIndex + 1}`}
          width={1000}
          height={800}
          objectFit="contain"
          className="rounded-lg cursor-pointer"
          onClick={handleNextImage}
        />
      </div>
    </div>
  )
}
