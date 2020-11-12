import React ,{Component,useState}from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar'
import Dropdown from './component/Navbar1'
import MenuBar from './component(menuBar)/menuBar'
import intro from './images/intro.jpg'
import ad from './images/ad.jpg'
import Box from './BOX/Box';
import CardCarousel from './BOX/Slider'
import Data from './BOX/data'
import {Adpage} from './CreatingAd/CreatingAd'
import Footer from './component/footer'
import {Login} from './component/Login'
import Home from './component/Home'
import banner from './images/intro.jpg'
import {Pages} from './component/Pages'
import {Firstframe}from './component/Frame'
import firebase from 'firebase'
import {firebaseConfig} from './firebase.js'
import Profile from './component/profile'
import {InfoPage} from './component/AdInfoPage'
import {
   Switch,
   BrowserRouter as Router,
 Link,Route
} from "react-router-dom";


function App() {
   let [user,getUser]= useState('')
   firebase.auth().onAuthStateChanged(function(users){
  if(users){


getUser((user) = users)
  }
  else{
console.log('No user SignedIn')

  }
})
  return (
     <div>
        <Navbar/>
        <MenuBar/>
       <Switch>
          <Route exact path='/' render={(props)=><Home{...props}/>}/>
          <Route path='/Login' render={(props)=><Login{...props}/>}/>
          <Route exact path='/car' render={(props)=><Pages genre="genre" data="car"/>}/>   
          <Route path='/mobile' render={(props)=><Pages genre="genre" data="mobile"/>}/>   
          <Route path='/motorcycle' render={(props)=><Pages genre="genre" data="motorcycle"/>}/>
          <Route path='/house' render={(props)=><Pages genre='genre' data="house"/>}/>   
          <Route path='/land' render={(props)=><Pages genre="genre" data='land'/>}/>   
          <Route path='/profile' render={(props)=><Profile user={user}/>}/>   

          <Route path='/electronics' render={(props)=><Pages genre='genre' data="electronics"/>}/>  
          <Route path='/tablet' render={(props)=><Pages genre='genre' data="tablet"/>}/>  
          <Route path='/Sell' render={(props)=><Adpage {...props} user={user}/>}/>  
          <Route path='/karachi' render={(props)=><Pages genre='location' data='karachi'/>}/>
          <Route path='/lahore' render={(props)=><Pages genre='location' data='lahore'/>}/>
          <Route path='/islamabad' render={(props)=><Pages genre='location 'data='islamabad'/>}/>
          <Route path='/gujranwala' render={(props)=><Pages genre='location' data='gujranwala'/>}/>
          <Route path='/rawalpindi' render={(props)=><Pages genre='location' data='rawalpindi'/>}/>          
          <Route path='/multan' render={(props)=><Pages genre='location' data='multan'/>}/>      
          <Route path='/mirzapur' render={(props)=><Pages genre='location' data='mirzapur'/>}/>          

          <Route path='/quetta' render={(props)=><Pages genre='location' data='quetta'/>}/>
          <Route path='/kalat' render={(props)=><Pages genre='location' data='kalat'/>}/>
          <Route path='/sukkur' render={(props)=><Pages genre='location' data='sukkur'/>}/>
          <Route path='/gujrat' render={(props)=><Pages genre='location' data='gujrat'/>}/>
          <Route path='/sialkot' render={(props)=><Pages genre='location' data='sialkot'/>}/>
          <Route path='/:id' exact render={(props)=><InfoPage{...props}/>}/>

          
   

       </Switch>
       
       <Firstframe/>
       
        
       <Footer/>
       


</div>
  );
}

export default App;
