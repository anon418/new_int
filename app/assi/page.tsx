'use client'
import { useState } from 'react'
import Image from 'next/image' // Image 컴포넌트 import

const images = ['/img1.png', '/img2.png']

export default function Assignments() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-[800px] h-[600px]">
        {/* Image 컴포넌트 사용 */}
        <Image
          src={images[currentIndex]}
          alt={`Assignment ${currentIndex + 1}`}
          layout="fill" // 부모 요소의 크기에 맞게 조정
          objectFit="cover" // 이미지 비율을 유지하며 커버
          className="rounded-lg cursor-pointer" // 클릭 가능하게 하기 위해 cursor-pointer 추가
          onClick={handleNextImage} // 클릭 시 이미지 변경
        />
      </div>
    </div>
  )
}
