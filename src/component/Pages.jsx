
import React, {Component, useEffect} from 'react';
import Box from '../BOX/Box'
import firebase from 'firebase'
import { useState } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import banner from '../images/intro.jpg'
import { CardMedia } from '@material-ui/core';
import './Page.css'
import {
 Link,useHistory
} from "react-router-dom";
const useStyles = makeStyles({
  root: {
    minWidth: 200,
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
marginRight:'15%'
  },
  Icon:{
      
float:'right',
left:'5px'
,'&:focus':{
color:'red'
},  
},
  

});

function CardBox(props) {
  var history = useHistory()
  

  let[New,checkNew]=useState(false)
var[value,setValue]=useState({})

const {price,description,image,location,category,date,genre,} = props
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
  
  return(
    
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
        ):genre!=='mobile'?(
          <div>
             <div className='premium'>
      Featured
    </div>
          </div>
        ):null
    }
          <IconButton aria-label="add to favorites" className={classes.Icon}>
              
          <FavoriteIcon/>
          
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
  
    )
}


function Pages(props){
  
    var{genre,data} = props
    
return(
  <div>
{props===undefined?<CircularProgress color='primary'/>: props===undefined?(
<div>
  <h1>No Ads</h1>
  </div>
):(<div>
    <img  className='uppic'src={banner}/>
  
        
<Grid container direction="column">
        <Grid item>
           
        </Grid>
        <Grid item container>
            <Grid item xs={false} sm={2}/>
            <Grid item xs={12} sm={8}>
<Content stating={genre} dataValue={data}/>
            

            </Grid>
            <Grid item xs={false} sm={2}/>

        </Grid>
        </Grid>
        </div>)}
        </div>
 )
}
const Content= (props)=>{
 var{stating,dataValue} = props



const Delete=(e)=>{
firebase.database().ref('AdData/' + e).remove()

}


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
let [show,setShow]=useState(7)
const addAds=()=>{
setShow(show+5)
}

let i =1
  return(
    
    <Grid container spacing={3}>
{Object.keys(value).map((id,index) => {
    

if(stating==='genre'){
  
  if(value[id].genre===dataValue){
   

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


}
else if(value[id].stating!==dataValue){
    return(
        <div>

        </div>
    )
}
}
else if(stating==='uid'){
  
  if((value[id].uid)===dataValue){

    if(i<show){
      i++
      return(
       
        <Grid item xs={6} sm={6} md={4} lg={3}>
        <button className='deleteBtn' onClick={()=>Delete(id)}>Delete</button>
                         <CardBox key={index} val={id}{...value[id]}/>
                     </Grid>
    
      )
      
    }
    else if(i ==show){
      i++
      return(
        <button className='load'onClick={()=>addAds()}>LoadMore</button>
      )
    }


}
else if(value[id].stating!==dataValue){
    return(
        <div>

        </div>
    )
}
}
else if(stating==='location'){
if((value[id].location)===dataValue){

    if(i<show){
      i++
      return(
      <Grid item xs={6} sm={6} md={4} lg={3}>
                         <CardBox key={index}val={id}{...value[id]}/>
                     </Grid>
    
      )
      
    }
    else if(i ==show){
      i++
      return(
        <button className='load'onClick={()=>addAds()}>LoadMore</button>
      )
    }


}
else if(value[id].stating!==dataValue){
    return(
        <div>

        </div>
    )
}
}
})}
      </Grid>
      )
    }
    export {Pages,Content,};