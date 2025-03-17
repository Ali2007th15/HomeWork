"use client"

import { useSearchParams, useRouter, usePathname } from "next/navigation"

interface ButtonMenuProps {
  name: string
  defaultActive?: boolean
}

export default function ButtonMenu({ name }: ButtonMenuProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const category = searchParams.get("category") || "Show all"
  const isActive = category === name

  const handleClick = () => {
    const params = new URLSearchParams(searchParams)
    params.set("category", name)
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded-full transition-colors ${
        isActive
          ? "bg-secondary text-inky"
          : "bg-transparent border-2 border-info text-info hover:bg-primary hover:text-natural hover:border-primary"
      }`}
    >
      {name}
    </button>
  )
}

