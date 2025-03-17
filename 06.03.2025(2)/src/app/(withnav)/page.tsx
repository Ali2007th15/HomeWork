import About from "@/features/main/components/about/about";
import Events from "@/features/main/components/events";
import Hero from "@/features/main/components/hero";
import Menu from "@/features/main/components/menu";

export default function Main() {
  return (
    <>
      <Hero />
      <Menu />
      <Events />
      <About />
    </>
  );
}
