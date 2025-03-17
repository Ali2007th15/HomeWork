import Section from "@/features/shared/section"
import Image from "next/image"
import Banner from "../hero/banner"

export default function About() {
  return (
    <div id="about" className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="about-us">
              <Section head="About us" />
              <p className="text-info mb-6">
                In just a couple of years, we have opened 6 outlets in different cities: Kazan, Chelyabinsk, Ufa,
                Samara, Izhevsk, and in the future we plan to develop the network in other major cities of Russia.
              </p>

              <div className="about-pizza relative h-[300px] my-8">
                <div className="second-layer absolute z-10 flex justify-between w-full">
                  <div className="relative w-[150px] h-[150px]">
                    <Image src="/images/pizza/tomato.png" alt="tomato pizza" fill className="object-contain" />
                  </div>
                  <div className="relative w-[150px] h-[150px]">
                    <Image src="/images/pizza/argentina.png" alt="argentina pizza" fill className="object-contain" />
                  </div>
                </div>

                <div className="first-layer absolute top-[50px] left-0 right-0 z-20 flex justify-around">
                  <div className="relative w-[150px] h-[150px]">
                    <Image src="/images/pizza/italian.png" alt="italian pizza" fill className="object-contain" />
                  </div>
                  <div className="relative w-[150px] h-[150px]">
                    <Image src="/images/pizza/meet.png" alt="meat pizza" fill className="object-contain" />
                  </div>
                  <div className="relative w-[150px] h-[150px]">
                    <Image src="/images/pizza/cheese.png" alt="cheese pizza" fill className="object-contain" />
                  </div>
                </div>
              </div>

              <p className="text-info">
                The kitchen of each point is at least: 400-500 sq. m. meters, hundreds of employees, smoothly performing
                work in order to receive / prepare / form / deliver customer orders on time.
              </p>
            </div>
          </div>

          <div className="p-3 flex items-center justify-center">
            <Banner />
          </div>
        </div>
      </div>
    </div>
  )
}

