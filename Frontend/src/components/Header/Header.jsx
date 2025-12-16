import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className='header-contents'>
          <h1>A.M.Auto <span>Stores</span></h1>
            <h3>Order your spare <span>parts here</span></h3>
            <p>Explore a vast selection of high-quality auto spare parts, carefully sourced to ensure durability and performance. Our mission is to provide you with reliable parts and exceptional service, keeping your vehicle running smoothly mile after mile.
            Discover a comprehensive range of premium auto spare parts, designed to enhance the performance and longevity of your vehicle. We take pride in offering top-quality products sourced from trusted manufacturers, ensuring reliability and durability.
            </p>
            <button>View Spares</button>
        </div>
    </div>
  )
}

export default Header;