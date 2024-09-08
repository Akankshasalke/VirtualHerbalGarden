import React, { useContext } from 'react' ;
import './CSS/PlantCategory.css';
import { HomeContext } from '../Context/HomeContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const PlantCategory = (props) => {
  const { all_plant } = useContext(HomeContext);

  return (
    <div className='plant-category'>
      <img className='plantcategory-banner' src={props.banner} alt="" />
      <div className="plantcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {all_plant.length} plants
        </p>

        <div className="plantcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="plantcategory-plants">
        {all_plant.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item 
                key={item.id}
                image={item.image}
                name={item.description}
                common_name={item.common_name}
                scientific_name={item.scientific_name} // Updated to match the available property
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="plantcategory-loadmore">
        Explore More
      </div>
    </div>
  );
}

export default PlantCategory;
