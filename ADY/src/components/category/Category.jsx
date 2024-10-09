import React from 'react';
import { Link } from 'react-router-dom';
import Train1 from "../../assets/train6.png";
import Train2 from "../../assets/train8.png";
import Train3 from "../../assets/train2.png";
import './Category.css';

const Category = () => {
    return (
        <div className='category-container'>
            <div className="category-header">
                <h1 className="category-title">Category</h1>
                <Link to={"/train"} className='view-all'>View All</Link>
            </div>
            <div className="category-grid">
                <Link to={"/train/train-details"} className='category-item'>
                    <img src={Train1} alt="train img" className="train-img" />
                    <div className="overlay">
                        <h2 className="train-name">Private Train</h2>
                    </div>
                </Link>

                <Link to={"/train/train-details"} className='category-item'>
                    <img src={Train2} alt="train img" className="train-img" />
                    <div className="overlay">
                        <h2 className="train-name">Tourist Train</h2>
                    </div>
                </Link>

                <Link to={"/train/train-details"} className='category-item'>
                    <img src={Train3} alt="train img" className="train-img" />
                    <div className="overlay">
                        <h2 className="train-name">Fast Train</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Category;
