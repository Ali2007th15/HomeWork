"use client"
interface SectionProps {
    head: string
}
export default function Section({head}:SectionProps) {
    return (
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#ff6432]">{head}</h1>
    );
}