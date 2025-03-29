import React from "react";
import cssStyles from "./Footer.module.css"; 
import TopLogo from "../header/HeaderLogo"; 
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { TfiTwitterAlt } from "react-icons/tfi";


const NAVIGATION_ITEMS = {
  main: [
    { label: "Place Order", url: "#" },
    { label: "Who We Are", url: "#" },
    { label: "Occasions", url: "#" },
    { label: "Food List", url: "#" },
  ],
  occasions: [
    { label: "3 Pizzas and Free Drink", url: "#" },
    { label: "2 Pizzas 1 Cost", url: "#" },
    { label: "Chefs Tour", url: "#" },
  ],
  dishes: [
    { label: "View All", url: "#" },
    { label: "Seafood", url: "#" },
    { label: "Plant-Based", url: "#" },
    { label: "Protein", url: "#" },
  ],
  info: [
    { label: "Our Story", url: "#" },
    { label: "Why Choose Us?", url: "#" },
  ],
};

const SOCIAL_ICONS = [
  { Component: FaInstagram, url: "#" },
  { Component: TfiTwitterAlt, url: "#" },
  { Component: FaFacebook, url: "#" },
];


interface NavGroupProps {
  heading: string;
  items: { label: string; url: string }[];
}

const NavGroup: React.FC<NavGroupProps> = ({ heading, items }) => (
  <div className={cssStyles.nav_segment}>
    <h3>{heading}</h3>
    {items.map(({ label, url }) => (
      <Link key={label} href={url}>
        {label}
      </Link>
    ))}
  </div>
);

const Footer = () => {
  return (
    <footer className={cssStyles.bottom}>
      
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#ffa228", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#ff6432", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      <div className={cssStyles.bottom_wrapper}>
     
        <div className={cssStyles.nav_collection}>
          <div className={cssStyles.nav_segment}>
            <TopLogo />
          </div>
          <NavGroup heading="Main" items={NAVIGATION_ITEMS.main} />
          <NavGroup heading="Occasions" items={NAVIGATION_ITEMS.occasions} />
          <NavGroup heading="Dishes" items={NAVIGATION_ITEMS.dishes} />
          <NavGroup heading="Info" items={NAVIGATION_ITEMS.info} />
        </div>

        <div className={cssStyles.contact_area}>
          <div>
            
            <span className={cssStyles.contact_digits}>099 (907) 7707</span>
          </div>
          <div className={cssStyles.social_zone}>
            {SOCIAL_ICONS.map(({ Component, url }, idx) => (
              <Link key={idx} href={url}>
                <Component className={cssStyles.social_icon} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;