import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../Item/Item'; // Correct path to Item component

const Popular = () => {
  return (
    <div className='popular'>
      <h1>Beneficial For  Health</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item) => (
          <Item
            key={item.id}
            image={item.image}
            name={item.name}
            common_name={item.commonName}
            scientific_name={item.scientificName}
            imgClass="popular-image" // Add class name here
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
