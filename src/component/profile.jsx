
import React, {Component, useEffect,} from 'react';

import { useState } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';

import './profile.css'

import {Pages} from './Pages'

import './profile.css'
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



function Profile(props){
  const{user} = props
  let [deletion,setDelete]= useState(true)
  

  if(user){
return(
    
    <div>
            <Grid  className='profileCard'container direction='row' spacing={2}>
            <Grid item lg={2} md={1}xs={false} sm={false}/>
<Grid item lg={2} md={1}xs={false} sm={1}>
    {user.photoURL!=null?
   <Avatar style={{width:'200px',height:'200px',boxShadow:'4px 3px 4px 2px black'}}alt="Remy Sharp" src={user.photoURL} />
:(
   <Avatar style={{width:'200px',height:'200px',boxShadow:'4px 3px 4px 2px black'}}alt="Remy Sharp" src='https://statics.olx.com.pk/external/base/img/avatar_4.png' />

)
}
</Grid>
<Grid item lg={3} md={1}xs={false} sm={2}>
<h1>Name:{user.displayName}</h1>
<h3>Email:{user.email}</h3>
</Grid>
<Grid item lg={2} md={1}xs={false} sm={2}>
   
</Grid>

            <Grid item lg={2} md={1}xs={false} sm={2}/>

            </Grid>

<h1 className='AdHead'>
    Your Ads
</h1>

<Pages deletion='gfdg' genre='uid' data={user.uid}/>
</div>
 )
}
else if(user===undefined || user===null){
    return(
        <div>
      <CircularProgress/>
    </div>
    )
}
else{
  return(
    
    <div>
            <h1>Please SignIn to View your profile</h1>
        </div>
  )
}
}

    export default Profile