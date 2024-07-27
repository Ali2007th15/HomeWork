import React, {useState, useEffect} from "react";
import "./Catalog.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import phones from "../../Phones";
import CatalogFilter from "../CatalogFilter/CatalogFilter";
import CatalogList from "../CatalogList/CatalogList";

export default function Catalog() {
  const [filters, setFilters] = useState({
    price: [0, 100000],
    brands: [],
    sizes: [],
  });   
  

  
  return (
    <div className="catalog-container">
      <Header />
      <div className="filter-list-container">
        <CatalogFilter filters={filters} setFilters={setFilters} />
        <CatalogList filters={filters} />
      </div>
 
      <Footer />
    </div>
  );
}
