import Image from "next/image"
import banner from "./banner.png"
import pizza from "./pizza.png"
import fries from "./fries.png"

export default function Banner() {
  return (
    <div className="p-5 relative">
      <div className="absolute w-1/2 z-10 -top-[82px] -right-[35px]">
        <Image
          src={pizza}
          alt="Pizza slice"
          width={200}
          height={200}
          className="w-full"
          priority
        />
      </div>
      <div className="relative z-0">
        <Image
          src={banner}
          alt="Pizza"
          width={500}
          height={500}
          className="w-full rounded-[46px] z-10 relative"
          priority
        />
      </div>
      <div className="absolute w-1/2 z-10 -bottom-[50px] -left-[100px]">
        <Image
          src={fries}
          alt="Fries"
          width={200}
          height={200}
          className="w-full"
          priority
        />
      </div>
    </div>
  )
}

