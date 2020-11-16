import React, {Component, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import FavoriteIcon from '@material-ui/icons/Favorite';

import { CardMedia, CircularProgress, Grid } from '@material-ui/core';
import DataBase from '../BOX/data'
import firebase from 'firebase'
import firbaseConfig from '../firebase.js'
import {LoginModal} from '../component/Login'
import'./Box.css';
import {
 Link,useHistory
} from "react-router-dom";
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 100,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  location: {
      marginLeft:'8px',
    fontSize: 14,
    
  },
  date:{
fontSize: 14,
float:'right',
marginRight:'8px'

  },
  price:{
color:'rgb(0, 57, 59)'
  },
  pos: {
    marginBottom: 12,
  },
  media:{
      marginTop:'3%',
      alignItems:'center',
marginLeft:'15%',
marginRight:'15%',
 [theme.breakpoints.down('md')]: {
 marginLeft:'10%',
 
marginRight:'10%',
},
[theme.breakpoints.down('sm')]: {
 marginLeft:'10%',
 
marginRight:'10%',
},
 [theme.breakpoints.down('xs')]: {
 marginLeft:'10%',
 marginRight:'5%',
 width:'100%',

}
  },
  Icon:{
      
float:'right',
left:'5px'
,'&:focus':{
color:'red'
},  
},
  

}));



function CardBox(props) {
  var history = useHistory()
  let[login,checklogin]=useState(false)
let[favorite,checkFavorite]= useState(false)
  let[New,checkNew]=useState(false)
  let[open,setOpen]= useState(true)
var[value,setValue]=useState({})

const {price,description,image,location,category,date,genre} = props
const{val} = props

  
  const classes = useStyles();
useEffect(()=>{

  if(category==="new"){
checkNew(New=true)

}
else if(category==="New"){
checkNew(New=true)
}
else{

checkNew(New=false)
}
},[]) 
const handleClose=()=>{
setOpen(false)
}
useEffect(()=>{

   firebase.auth().onAuthStateChanged(function(users){
      if(users){
   checklogin(login=true)
    
      }
      else{
       checklogin(login=false)

      }
    })

},[])
const setFavorite=()=>{
  if(login){
    checkFavorite(true)
    
  }
  else if(!login){
    return(
<LoginModal open={open} handleClose={handleClose}/>
    )
  }
  else{
console.log('check')
  }
}

  return(
    <div>
    <Card className={classes.root} variant="outlined" onClick={()=>history.push(`/${val}`)}>
     
        {genre ==='mobile' && New?
        (
    <p className='new'>
      New
    </p>
        ):
        genre ==='mobile' && !New?(

        <div className='old'>
      Used
    </div>
        ):(
          <div>
             <div className='premium'>
      Featured
    </div>
          </div>
        )
    }
        
          <IconButton aria-label="add to favorites" className={classes.Icon}>
              
          <FavoriteIcon onFocus={setFavorite}/>
          
        </IconButton>
       <CardMedia
       style={{height:190+"px",width:'190px',
    alignItems:'center'}}
       image={image}
        className={classes.media}
        
      />
      <CardContent>
         <Typography  className={classes.price}gutterBottom variant="h5" component="h2">
        {New?(
        <div className='NewboxStyling'></div>)
      :
      (
        <div className='UsedboxStyling'></div>
      )}
            <b>
               Rs {price}
                </b>
          </Typography>
        
        <Typography variant="body2" color="textSecondary" component="h5">
            <b>              
                {description}
                </b>
          </Typography>
      </CardContent>
      <Typography className={classes.location} color="textSecondary" gutterBottom>
          {location}
           <Typography className={classes.date} color="textSecondary" gutterBottom>
          {date}
        </Typography>
        </Typography>
        
    </Card>
  </div>
    )
}
function Box(){
  
    return(
        
<Grid container direction="column">
  
        <Grid item>
           
        </Grid>
        <Grid item container>
            <Grid item xs={false} sm={2}/>
            <Grid item xs={12} sm={8}>
<Content/>
            

            </Grid>
            <Grid item xs={false} sm={2}/>

        </Grid>
        </Grid>
 )



    
}
const Content= ()=>{
 
var[value,setValue]=useState({})

useEffect(()=>{
  firebase.database().ref('AdData').on('value',snapshot=>{
    if(snapshot.val()!=null){
      setValue({
        ...snapshot.val()
      })
    }
  })
},[])
let [show,setShow]=useState(9)
const addAds=()=>{
setShow(show+7)
}

let i =1

  return(
    
    <Grid container spacing={1}>
{Object.keys(value).map((id,index) => {


 if(i<show){
   i++
   return(
     
   <Grid item xs={6} sm={6} md={4} lg={3}>
    
                      <CardBox key={index} val={id} {...value[id]}/>
                  </Grid>
 
   )
   
 }
 else if(i ==show){
   i++
   return(
     <button className='load'onClick={()=>addAds()}>LoadMore</button>
   )
 }
})}
      </Grid>
      
      )
    }
    
         
export default Box