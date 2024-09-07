import React from 'react';
import './Item.css';

const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt={props.common_name} className='item-image' /> {/* Use imgClass prop */}
      <p>{props.name}</p>
      <div className='item-name'>
        <div className='item-cn'>
          <h6><span>Common Name:</span> {props.common_name}</h6>
        </div>
        <div className='item-sn'>
          <h6><span>Scientific Name:</span> {props.scientific_name}</h6>
        </div>
      </div>
    </div>
  );
}

export default Item;
