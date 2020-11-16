import React from 'react'
import { Grid } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';


import logo from '../images/olx.png';
import buttonlogo from '../images/SellButton.png';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import '../component(menuBar)/menuBar.css'
import { render } from '@testing-library/react';
import {
 Link,useHistory
} from "react-router-dom";



function MenuBar(){
const history = useHistory();
const link=(e)=>{
    console.log(e.target.name)
   history.push(`/${e.target.name}`)
    
}
    return(
        
        <div className='menu-bar'>
                <ul>            
                <li className='innerList dropdown'><a href='#'><b>ALL CATEGORIES</b><i className=" down fas fa-chevron-down fa-lg fa-2x"></i></a>
                <ul className="menu-area">
                <ul>
                    <Link to="/car">
                    <h5>Vehicles</h5>
</Link>
                    <li><a href="#">Tractors & Trailers</a></li>
                    <li><a href="#">Boats</a></li>
                    <li><a href="#">Other Vehicles</a></li>
                    <li><a href="#">Rickshaw & Chinqchi</a></li>
                    <li><a href="#">Buses,Van & Trucks</a></li>
                    <li><a href="#">Spare Parts</a></li>
                    <li><a href="#">Cars Accessories</a></li>
                    <li><a href="#">Cars on Installments</a></li>
                    <li><a href="#">Cars</a></li>

                    </ul>
                    <ul>
                    <h5>Animal</h5>
                    <li><a href="#">Other Animal</a></li>
                    <li><a href="#">Pet Food & Accessories</a></li>
                    <li><a href="#">Horses</a></li>
                    <li><a href="#">Livestock</a></li>
                    <li><a href="#">Dogs</a></li>
                    <li><a href="#">Cats</a></li>
                    <li><a href="#">Hens & Aseel</a></li>
                    <li><a href="#">Birds</a></li>
                    <li><a href="#">Fish & Aquariums</a></li>
                    
                    </ul>
                    <ul>
                    <h5>Fashion & Beauty</h5>
                    <li><a href="#">Other Fashion</a></li>
                    <li><a href="#">Couture</a></li>
                    <li><a href="#">Lawn & Pret</a></li>
                    <li><a href="#">Wedding</a></li>
                    <li><a href="#">Watches</a></li>
                    <li><a href="#">Skin& Hair</a></li>
                    <li><a href="#">Make Up</a></li>
                    <li><a href="#">Jewellery</a></li>
                    <li><a href="#">Footwear</a></li>
                    <li><a href="#">Accessories</a></li>
                    
                    </ul>
                    <ul>
                    <h5>Services</h5>
                    <li><a href="#">Farm & Fresh Food</a></li>
                    <li><a href="#">Catering & Restaurant</a></li>
                    <li><a href="#">Home & Office Repair</a></li>
                    <li><a href="#">Movers & Packers</a></li>
                    <li><a href="#">Maids & Domestic Help</a></li>
                    <li><a href="#">Health & Beauty</a></li>
                    <li><a href="#">Event Services</a></li>
                    <li><a href="#">Electronics & Computer Repair</a></li>
                    <li><a href="#">Other Services</a></li>
                    <li><a href="#">Drivers & Taxi</a></li>
                    <li><a href="#">Car Rental</a></li>
                    <li><a href="#">Travel & Visa</a></li>
                    <li><a href="#">Web Development</a></li>
                    
                    </ul>
                     <ul>
                    <Link to="/mobile">
                    
                    <h5>Mobiles</h5>
                    </Link>
                    <li><a href="#">Mobile Phones</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Tablets</a></li>
                    
                    </ul>
                     <ul>
                    <h5>Furnitute & Home Decor</h5>
                    <li><a href="#">Other Household Items</a></li>
                    <li><a href="#">Office Furniture</a></li>
                    <li><a href="#">Curtains & Blinds</a></li>
                    <li><a href="#">Rugs & Carpets</a></li>
                    <li><a href="#">Painting & Mirrors</a></li>
                    <li><a href="#">Garden & Outdoor</a></li>
                    <li><a href="#">Tables & Dining</a></li>
                    <li><a href="#">Home Decoration</a></li>
                    <li><a href="#">Beds & Wardrobes</a></li>
                    <li><a href="#">Sofa & Chairs</a></li>
                    </ul>
                     <ul>
                    <Link to="/house">

                    <h5>Property for Rent</h5></Link>
                    <li><a href="#">Land & Plots</a></li>
                    <li><a href="#">Vacation Rentals - Guest Houses</a></li>
                    <li><a href="#">Roommates & Paying Guests</a></li>
                    <li><a href="#">Rooms</a></li>
                    <li><a href="#">Shops - Offices - Commercial Space</a></li>
                    <li><a href="#">Portions & Floors</a></li>
                    <li><a href="#">Apartments & Flats</a></li>
                    <li><a href="#">Houses</a></li>
                
                   
                    </ul>
                     <ul>
                    <h5>Books,Sports, & Hobbies</h5>
                    <li><a href="#">Other Hobbies</a></li>
                    <li><a href="#">Gym & Fitness</a></li>
                    <li><a href="#">Sports Equipment</a></li>
                    <li><a href="#">Musical Instruments</a></li>
                    <li><a href="#">Books & Magazines</a></li>
                   
                    </ul>
                     <ul>
                    <h5>Furnitute</h5>
                    <li><a href="#">Other Household Items</a></li>
                    <li><a href="#">Office Furniture</a></li>
                    <li><a href="#">Curtains & Blinds</a></li>
                    <li><a href="#">Rugs & Carpets</a></li>
                    <li><a href="#">Painting & Mirrors</a></li>
                    <li><a href="#">Garden & Outdoor</a></li>
                    <li><a href="#">Tables & Dining</a></li>
                    <li><a href="#">Home Decoration</a></li>
                    <li><a href="#">Beds & Wardrobes</a></li>
                    <li><a href="#">Sofa & Chairs</a></li>
                    </ul>
                    <ul>
                    <h5>Property for Rent</h5>
                    <li><a href="#">Land & Plots</a></li>
                    <li><a href="#">Vacation Rentals - Guest Houses</a></li>
                    <li><a href="#">Roommates & Paying Guests</a></li>
                    <li><a href="#">Rooms</a></li>
                    <li><a href="#">Shops - Offices - Commercial Space</a></li>
                    <li><a href="#">Portions & Floors</a></li>
                    <li><a href="#">Apartments & Flats</a></li>
                    <li><a href="#">Houses</a></li>
                    
                    </ul>

                    </ul>
                    </li>
                <li  className='Boxlist' onClick={(e)=>link(e)}><a name='mobile' href='#'>Mobile Phones</a></li>
                <li className='Boxlist' onClick={(e)=>link(e)}><a name='car' href='#' >Cars</a></li>
                <li className='Boxlist' onClick={(e)=>link(e)}><a name='motorcycle' href='#'>Motorcycles</a></li>
                <li className='Boxlist' onClick={(e)=>link(e)}><a name='house'href='#' >Houses</a></li>
                <li className='Boxlist' onClick={(e)=>link(e)}><a name='electronics' href='#'>TV-Video-Audio</a></li>
                <li className='Boxlist' onClick={(e)=>link(e)}><a name='tablet'href='#'>Tablets</a></li>
                <li onClick={(e)=>link(e)} className='lastlist Boxlist'><a href='#' name='land'>Land & Plots</a></li>
            </ul>
        </div>
        
    )
}
export default MenuBar;