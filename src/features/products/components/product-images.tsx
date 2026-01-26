import { useState } from 'react'

interface ProductImagesProps {
  images: string[]
  title: string
}

export function ProductImages({ images, title }: ProductImagesProps) {
  const [activeImage, setActiveImage] = useState(images[0])

  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden border border-gray-100 flex items-center justify-center p-8">
        <img
          src={activeImage}
          alt={title}
          className="max-w-full max-h-full object-contain mix-blend-multiply"
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(img)}
              className={`aspect-square rounded-lg border-2 overflow-hidden bg-gray-50 p-2 transition-all ${
                activeImage === img
                  ? 'border-blue-500 shadow-sm'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={img}
                alt={`${title} - ${idx + 1}`}
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
