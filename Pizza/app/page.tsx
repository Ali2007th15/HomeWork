import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import HomeComp from "@/components/homeComp/HomeComp";
import styles from "./page.module.css";
import PizzaMenu from "@/components/pizzamenu/PizzaMenu";
import EventsSection from "@/components/eventsSection/EventsSection";
import About from "@/components/about/about";


export default function Home() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main className={styles.main}>
        <div id="home">
          <HomeComp/>
        </div>
        <div id="menu">
          <PizzaMenu/>
        </div>

        <div id="events">
          <EventsSection/>
        </div>
        <div id="about us">
          <About/>
        </div>
       
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
