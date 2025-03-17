"use client"

interface ButtonProps {
  name: string
  onClick?: () => void
}

export default function Button({ name, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 bg-gradient-to-r from-[#ff6432] to-[#ffa228] text-white rounded-full hover:opacity-90 transition-opacity"
    >
      {name}
    </button>
  )
}