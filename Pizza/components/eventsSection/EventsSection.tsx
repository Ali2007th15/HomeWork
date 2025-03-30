import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./EventsSection.module.css";

// Array of event items with title, image, and link
const EVENT_ITEMS = [
  {
    title: "How we cooking",
    image: "/images/pizza.png",
    link: "/events/how-we-cooking",
  },
  {
    title: "Our Blog",
    image: "/images/pizza2.png",
    link: "/events/our-blog",
  },
  {
    title: "Two pizza for 1 price",
    image: "/images/pizza3.png",
    link: "/events/two-pizza-for-1-price",
  },
  {
    title: "Kitchen tour",
    image: "/images/pizza4.png",
    link: "/events/kitchen-tour",
  },
  {
    title: "Free coffee for 3 pizza",
    image: "/images/pizza5.png",
    link: "/events/free-coffee-for-3-pizza",
  },
  {
    title: "Our instagram",
    image: "/images/pizza6.png",
    link: "/events/our-instagram",
  },
  {
    title: "Why choose us?",
    image: "/images/pizza7.png",
    link: "/events/why-choose-us",
  },
];

// EventCard component to render each event item
const EventCard: React.FC<{
  title: string;
  image: string;
  link: string;
}> = ({ title, image, link }) => {
  return (
    <div className={styles.event_card}>
      <Image src={image} alt={title} width={300} height={200} className={styles.event_image} />
      <h3 className={styles.event_title}>{title}</h3>
      <Link href={link}>
        <button className={styles.event_button}>More</button>
      </Link>
    </div>
  );
};

// EventsSection component to render the entire events section
const EventsSection: React.FC = () => {
  return (
    <section className={styles.events_section}>
      {/* Decorative Elements */}
      <Image
        src="/images/bacon-egg.png"
        alt="Bacon and Egg"
        width={100}
        height={100}
        className={styles.decor_bacon}
      />
      <Image
        src="/images/coffee-cup.png"
        alt="Coffee Cup"
        width={80}
        height={80}
        className={styles.decor_coffee}
      />
      <Image
        src="/images/sandwich.png"
        alt="Sandwich"
        width={100}
        height={100}
        className={styles.decor_sandwich}
      />

      {/* Section Title and Description */}
      <h2 className={styles.section_title}>Events</h2>
      <p className={styles.section_description}>
        There are regular events in our pizzeria that will allow you to eat delicious food for a lower price!
      </p>

      {/* Events Grid */}
      <div className={styles.events_grid}>
        {/* Row 1: How we cooking, Our Blog */}
        <div className={styles.grid_row}>
          <EventCard {...EVENT_ITEMS[0]} />
          <EventCard {...EVENT_ITEMS[1]} />
        </div>

        {/* Row 2: Two pizza for 1 price, Kitchen tour */}
        <div className={styles.grid_row}>
          <EventCard {...EVENT_ITEMS[2]} />
          <EventCard {...EVENT_ITEMS[3]} />
        </div>

        {/* Row 3: Free coffee for 3 pizza, Our Instagram, Why choose us? */}
        <div className={styles.grid_row}>
          <EventCard {...EVENT_ITEMS[4]} />
          <EventCard {...EVENT_ITEMS[5]} />
          <EventCard {...EVENT_ITEMS[6]} />
        </div>
      </div>
    </section>
  );
};

export default EventsSection;