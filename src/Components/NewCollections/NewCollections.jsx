
import React from 'react' ;
import './NewCollections.css';
import new_collection from '../Assets/new_collections';
import Item from '../Item/Item'

const NewCollections=()=>{

    
    return(
        <div className='new-collections'>
            <h1>Plant Collections</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item,i)=>{
                    return <Item  key={item.id}
                    image={item.image}
                    name={item.name}
                    common_name={item.commonName}
                    scientific_name={item.scientificName}/>

                })}

            </div>
         
        </div>
    );
}

export default NewCollections;
