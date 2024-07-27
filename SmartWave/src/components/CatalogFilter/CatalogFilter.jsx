import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./CatalogFilter.css";

const brands = [
  "Samsung",
  "Apple",
  "Xiaomi",
  "Huawei",
  "Nothing",
  "One Plus",
  "Oppo",
  "Google",
  "Vivo"
];
 
const sizes = [
  "64GB",
  "128GB",
  "256GB",
  "512GB",
  "1TB"
];

export default function CatalogFilter({ filters, setFilters }) {
  const [price, setPrice] = useState([0, 10000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleBrandChange = (brand) => {
    setSelectedBrands((prevSelectedBrands) =>
      prevSelectedBrands.includes(brand)
        ? prevSelectedBrands.filter((b) => b !== brand)
        : [...prevSelectedBrands, brand]
    );
  };

  const handleSizeChange = (size) => {
    setSelectedSizes((prevSelectedSizes) =>
      prevSelectedSizes.includes(size)
        ? prevSelectedSizes.filter((s) => s !== size)
        : [...prevSelectedSizes, size]
    );
  };

  const handleSearch = () => {
    setFilters({ price, brands: selectedBrands, sizes: selectedSizes });
  };

  const handleReset = () => {
    setPrice([0, 100000]);
    setSelectedBrands([]);
    setSelectedSizes([]);
    setFilters({ price: [0, 10000], brands: [], sizes: [] });
  };

  return (
    <div className="filter-container">
      <div className="filter-section">
        <h2>Price:</h2>
        <Slider
          range
          min={0}
          max={10000}
          value={price}
          onChange={(value) => setPrice(value)}
          className="slider"
        />
        <div className="price-labels">
          <span>От {price[0]} $</span>
          <span>До {price[1]} $</span>
        </div>
      </div>
      <div className="filter-section">
        <hr></hr>
        <h2>Brands:</h2>
        {brands.map((brand, index) => (
          <div key={index} className="brand-checkbox">
            <input
              type="checkbox"
              id={brand}
              name={brand}
              checked={selectedBrands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
            />
            <label htmlFor={brand}>{brand}</label>
          </div>
        ))}
      </div>
      <div className="filter-section">
        <hr />
        <h2>Memory:</h2>
        <div className="size-switch-section">
          {sizes.map((size, index) => (
            <div
              key={index}
              className={`size-option ${
                selectedSizes.includes(size) ? "selected" : ""
              }`}
              onClick={() => handleSizeChange(size)}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
      <div className="filter-section">
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>

        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
