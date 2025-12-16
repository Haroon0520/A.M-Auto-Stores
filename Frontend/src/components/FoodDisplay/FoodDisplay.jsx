import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    const formatINR = (price) => {
  if (!price) return '';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(price);
};

    const {food_list}=useContext(StoreContext)
  return (

    <div className='food-display' id='food-display'>
        <h2>Spare Parts Available</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
                if(category==="All" || category===item.category){

                  return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={formatINR(item.price)} image={item.image}/>

                }
            })}
        </div>
    </div>
  )

}

export default FoodDisplay;
