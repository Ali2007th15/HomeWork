"use client"

import Button from "@/features/shared/button"
import Section from "@/features/shared/section"
import Banner from "./banner"

export default function Hero() {
  return (
    <div id="home" className="mt-[50px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 p-5 flex flex-col justify-center items-center">
            <div className="w-full">
              <Section head="The Faster Pizza Delivery" />
              <div className="container">
                <p className="py-3 text-gray-600">
                  We will deliver juicy pizza for your family in 30 minutes, if the courier is late - pizza is free!
                </p>
                <p className="py-3 text-gray-600">Cooking process:</p>
                <iframe
                  src="https://www.youtube.com/embed/8Q_9h6VKm9c?si=hm2OmM08FRWLzDxU"
                  title="YouTube video player"
                  className="my-3 rounded-[20px] w-full aspect-video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>

                <div className="flex items-center gap-4 relative mt-4">
                  <Button name="To order" />
                  <button className="px-4 py-2 border border-[#ff6432] text-[#ff6432] rounded-full hover:bg-gray-100 transition-colors">
                    Pizza menu
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-3">
            <Banner />
          </div>
        </div>
      </div>
    </div>
  )
}

