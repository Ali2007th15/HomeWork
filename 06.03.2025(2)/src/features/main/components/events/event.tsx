import Image from "next/image"

interface EventProps {
  title: string
  imagePath: string
}

export default function Event({ title, imagePath }: EventProps) {
  return (
    <div className="event-item p-2 relative">
      <div className="relative w-full h-[260px] rounded-[20px] overflow-hidden">
        <Image
          src={imagePath || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover opacity-60 rounded-[20px]"
        />
      </div>
      <h4 className="absolute top-[20%] left-[10%] uppercase font-bold text-natural">{title}</h4>
      <div className="btn-event absolute bottom-[20%] left-[10%] flex items-center justify-center bg-secondary h-[35px] w-[200px] rounded-[20px] transition-all duration-300 cursor-pointer hover:bg-primary text-inky">
        More
      </div>
    </div>
  )
}

