import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our spares</h1>
        <p className='explore-menu-text'>Explore a vast selection of high-quality auto spare parts, carefully sourced to ensure durability and performance. Our mission is to provide you with reliable parts and exceptional service, keeping your vehicle running smoothly mile after mile.</p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=''/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })

            }
        </div>
        <hr></hr>
    </div>
  )
}

export default ExploreMenu;