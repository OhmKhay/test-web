'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Card } from "./ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'



// const images = [
//   {
//     image: image
//   },
//   {
//     image: image3
//   },
//   {
//     image: image4
//   }
// ]
/* eslint-disable  @typescript-eslint/no-explicit-any */

export default function BackgroundImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [api, setApi]: any = useState(null);
  const [isInteracting, setIsInteracting] = useState(false)
  const interactionTimeoutRef = useRef<NodeJS.Timeout>()
  const [fade, setFade] = useState(false)

  const onInteractionStart = useCallback(() => {
    setIsInteracting(true)
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current)
    }
  }, [])

  const onInteractionEnd = useCallback(() => {
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current)
    }
    interactionTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false)
    }, 1000)
  }, [])

  useEffect(() => {
    if (!api) return

    api.on('select', () => {
      setFade(true)
      setTimeout(() => {
        setCurrentIndex(api.selectedScrollSnap())
        setFade(false)
      }, 300) // This should match the transition duration in CSS
    })


    
    api.on('dragStart', onInteractionStart)
    api.on('dragEnd', onInteractionEnd)

    return () => {
      api.off('select', () => {})
      api.off('dragStart', onInteractionStart)
      api.off('dragEnd', onInteractionEnd)
    }
  }, [api, onInteractionStart, onInteractionEnd])

  useEffect(() => {
    const interval = setInterval(() => {
      if (api && !isInteracting) {
        setFade(true)
        setTimeout(() => {
          api.scrollNext()
        }, 300) // This should match the transition duration in CSS
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [api, isInteracting])

  return (
    <div className="relative w-[32rem] pt-20 h-[32rem] rounded-md overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full h-full"
        setApi={setApi}
      >
        <CarouselContent>
          {[1,2,3].map((item, index) => {
            return (
                <CarouselItem key={index} className="w-full h-full rounded-md">
                  <Card className={` w-full h-[32rem] rounded-md transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                    <img
                      className='object-cover w-full h-full rounded-md'
                      src={`/assets/scc-banner-0${item}.jpg`}
                      alt={`Background ${index + 1}`}
                    />
                  </Card>
                </CarouselItem>
              )
          })}
        </CarouselContent>
        <div className="absolute inset-0 flex items-center justify-between p-4 top-5">
          <CarouselPrevious 
            className="relative left-0 w-12 h-12 transition-opacity rounded-full opacity-70 hover:opacity-100"
            onMouseEnter={onInteractionStart}
            onMouseLeave={onInteractionEnd}
          >
            <ChevronLeft className="w-8 h-8" />
          </CarouselPrevious>
          <CarouselNext 
            className="relative right-0 w-12 h-12 transition-opacity rounded-full opacity-70 hover:opacity-100"
            onMouseEnter={onInteractionStart}
            onMouseLeave={onInteractionEnd}
          >
            <ChevronRight className="w-8 h-8" />
          </CarouselNext>
        </div>
      </Carousel>
      <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
        {[1,2,3].map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}