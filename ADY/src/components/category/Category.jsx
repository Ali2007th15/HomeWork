import React from 'react';
import { Link } from 'react-router-dom';
import Baku from "../../assets/Baku.png";
import Aze from "../../assets/Aze.png";
import './Category.css';
import { SiAzureartifacts, SiAzuredataexplorer } from 'react-icons/si';

const Category = () => {
    return (
        <div className='category-container'>
            
            <div className="category-grid">
                <Link to={"/train/train-details"} className='category-item'>
                <img src={Baku} alt="train img" className="train-img" />
                    <div className="overlay">
                        <h2 className="train-name">Absheron</h2>
                    </div>
                </Link>

                <Link to={"/train/train-details"} className='category-item'>
                <img src={Aze} alt="train img" className="train-img" />
                    <div className="overlay">
                        <h2 className="train-name">Regional</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Category;
