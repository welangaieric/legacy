"use client"

import Link from "next/link"
import { Home, Building, HeartPulse } from "lucide-react"
import { useEffect } from "react"

export default function HomePage() {
  useEffect(() => {
    const animateCounter = (elementId, targetValue, duration) => {
      const element = document.getElementById(elementId)
      const startTime = performance.now()
      const startValue = 0

      const updateCounter = (currentTime) => {
        const elapsedTime = currentTime - startTime
        if (elapsedTime < duration) {
          const progress = elapsedTime / duration
          const currentValue = Math.round(startValue + progress * (targetValue - startValue))
          element.textContent = `${currentValue}+`
          requestAnimationFrame(updateCounter)
        } else {
          element.textContent = `${targetValue}+`
        }
      }

      requestAnimationFrame(updateCounter)
    }

    animateCounter("homeCounter", 600, 2000)
    animateCounter("businessCounter", 200, 2000)
    animateCounter("hostelCounter", 100, 2000)
  }, [])

  return (
    <>
      <section className="bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Welcome to <span className="text-green">Konnekt Smart Life</span>
            </h1>
            <p className="text-white text-lg mb-8">
              Experience lightning-fast internet and seamless connectivity with Konnekt Smart Life. Elevate your digital
              lifestyle today.
            </p>
            <Link
              href="/packages"
              className="bg-darkgreen text-white px-6 py-3 rounded-lg hover:bg-green transition-colors"
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-green py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-white text-center">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <Home size={48} className="mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2" id="homeCounter">
                0+
              </div>
              <div>homes connected</div>
            </div>
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <Building size={48} className="mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2" id="businessCounter">
                0+
              </div>
              <div>businesses connected</div>
            </div>
            <div className="w-full md:w-1/3">
              <HeartPulse size={48} className="mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2" id="hostelCounter">
                0+
              </div>
              <div>hostels connected</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

