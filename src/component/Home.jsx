import React from 'react'

import './Home.css';
import Navbar from './Navbar'

import MenuBar from '../component(menuBar)/menuBar'
import intro from '../images/intro.jpg'
import ad from '../images/ad.jpg'
import Box from '../BOX/Box';
import CardCarousel from '../BOX/Slider'
import Data from '../BOX/data'
import Adpage from '../CreatingAd/CreatingAd'
import banner from '../images/intro.jpg'
import Footer from './footer'
import {Firstframe} from './Frame'

import {
 Link
} from "react-router-dom";
 function Home(){
return(
      <div>

    <img  className='uppic'src={banner} width="100%"/>
       <img  className='ad'src={ad}/>
 <div className = "card-carousel">
         <CardCarousel/>
      </div>
      <h3 style={{textAlign:'center'}}>Fresh Recommendation</h3>
      <div className='boxStyle'>
            
    <Box/>      </div>
    <img className='downpic'src='https://tpc.googlesyndication.com/simgad/10440243720951453009'/>
       
       
    </div>

)
 }

export default Home