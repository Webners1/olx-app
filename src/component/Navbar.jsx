import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Dropdown from './Navbar1'
import { Grid } from '@material-ui/core';
import logo from '../images/olx.png';
import buttonlogo from '../images/SellButton.png';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import './nav.css'
import { render } from '@testing-library/react';
import zIndex from '@material-ui/core/styles/zIndex';
import {Login,LoginModal} from './Login.jsx'
import firebase from 'firebase'
import {firebaseConfig} from '../firebase'
import {
 BrowserRouter as Router,Link,Switch,Route,useHistory
} from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import { error } from 'jquery';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:'0px',
    zIndex:'4',
    boxShadow:'.5px 2px 1px 2px  rgba(99, 99, 99, 0.199)'
  },
  buttonlogo:{

[theme.breakpoints.up('md')]: {
      

      marginRight:'250px'

   
    },
[theme.breakpoints.down('lg')]: {
      

      marginRight:'10px'

   
    },
  },
  cityBox:{
    
    [theme.breakpoints.down('xs')]: {
      display:'none'
    },
  },
  sellBtn:{
boxShadow:'2px 2px 2px 2px black'
  },
  olx:{
[theme.breakpoints.up('lg')]: {
      

      marginLeft:'280px'

   
    },
    [theme.breakpoints.down('lg')]: {
      marginLeft:'280px'
  },[theme.breakpoints.down('md')]: {
      marginLeft:'20px'
  }},
  Navbar:{
    width:'100%',
height:'65px',
backgroundColor:'#F4F4F4'},
 menuButton: {
    marginRight: theme.spacing(2),
    
  },
  title: {
    flexGrow: 1,
    display: 'block',
   
  },
  Login:{
    borderBottom:'3px solid black',
color:'black',
fontWeight:'30px',
margin:'20px',
marginLeft:'50px',

'&:hover':{
  
  border:'0px',
  color:'black'


}
  },
 


  search: {
    marginLeft:'8%',
    border:'2.2px solid #002f34',
    borderRadius:'8px',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {

      border:'2px solid rgba(0, 255, 157, 0.405)'
    },
    marginLeft: 0,
    width: '100%',
    height:'100%',
    justifyContent:'center',
    alignContent:'center',
    
    [theme.breakpoints.down('xs')]: {
      display:'none'
    },
    [theme.breakpoints.down('lg')]: {
      width: '90ch',
      height:'6ch',
      
            marginTop:'1em',

      

   
    },
     [theme.breakpoints.up('lg')]: {
      width: '75ch',
      height:'6ch',
      marginTop:'0em',
      

   
    },
   
    [theme.breakpoints.down('md')]: {
      width: '30ch',
      height:'6ch',
      
      
      marginTop:'0em',
     

   
    },
    [theme.breakpoints.down('sm')]: {
      width: '5ch',
      height:'6ch',
      marginTop:'-.5em',
      border:'0px',
      

   
    },
  },
  body:{
'&:focus':{
  border:'6px solid red'
}
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#002f34',
    left:'-2px',
    '&:focus': {
        backgroundColor:'#00ffcc'
      },
    
  },
  inputRoot: {
    color: 'inherit',
     
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(6)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    fontFamily:'Segoe UI',
    fontWeight:'90px',
    fontSize:'18px',
    color:'black',
   
   [theme.breakpoints.down('xs')]: {
      display:'none'
    },
    [theme.breakpoints.down('lg')]: {
      width: '25ch',
      height:'6ch',
      marginTop:'1em',
      alignContent:'center',
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
      marginTop:'-1em',
      
      '&:focus': {
        width: '40ch',
      },

   
    },
     [theme.breakpoints.up('lg')]: {
      width: '50ch',
      height:'6ch',
      marginTop:'-0.8em',
      

   
    },
    [theme.breakpoints.down('md')]: {
      width: '15ch',
      height:'6ch',
      marginTop:'-1em',
      
     

   
    },
    [theme.breakpoints.down('sm')]: {
      width: '0ch',
      height:'6ch',
      marginTop:'-1em',
      
      

   
    },
  },
  inputInput1: {
    position:'absolute',
    marginTop:'6em',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
   [theme.breakpoints.down('xs')]: {
      display:'none'
    },
    [theme.breakpoints.down('lg')]: {
      width: '40ch',
      height:'6ch',
      alignContent:'center',
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
      marginTop:'-.5em',
      
      '&:focus': {
        width: '13ch',
      },

    [theme.breakpoints.down('md')]: {
      width: '60ch',
      height:'6ch',
      marginTop:'-1em',
      
      '&:focus': {
        width: '20ch',
      },

   
    },
    },
     [theme.breakpoints.up('lg')]: {
      width: '40ch',
      height:'6ch',
      marginTop:'-0.5em',
      '&:focus': {
        width: '13ch',
      },

   
    },
  },
}));


export default function SearchAppBar() {
  let[sell,sellTrigger] = useState(true)
let[sfunction,sellfunction]=useState();
  let[user,setUser] = useState(false)
  let[open,setOpen] = useState(false)
  const classes = useStyles();
 
useEffect(()=>{

   firebase.auth().onAuthStateChanged(function(users){
      if(users){
   
    console.log('SignedIn',users)
    setUser(user=true)
      }
      else{
    console.log('No user SignedIn')
   setUser(user=false)
      }
    })

},[])
const history = useHistory();
const Route=()=>{
if(user){
  sellTrigger(sell=true)
  history.push('/Sell')
}
else if(!user){
  sellfunction(sfunction=true)
  
  

 
sellTrigger(sell=false)
}


  }
  const Home=()=>{
    history.push('/')
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.Navbar}>
        <Toolbar>
         
          <Typography className={classes.title} variant="h6" noWrap>
            <img  className={classes.olx}src={logo} width='50px' onClick={()=>Home()}/>
          </Typography>
         <Dropdown className={classes.cityBox}/>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon style={{ fontSize: 35 }}/>
            </div>
            
            <InputBase
              placeholder="Find Cars, Mobile Phones and more..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
                
              }}
              className={classes.body}
              inputProps={{ 'aria-label': 'search' }}
              />
          </div>
          <Typography variant="h6" noWrap>
<Login name="Login"/>
            
          
          </Typography>

         <Typography className={classes.buttonlogo} variant="h6" noWrap>
                         
            <img className='sellBtn' src={buttonlogo} onClick={()=>Route()} width='130px'/>
              
          </Typography>
        </Toolbar>
      </AppBar>
              {!sell &&sfunction?
              (
  <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Hello Sir</strong> Please SignIn First To post Ads
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true" onClick={()=>sellfunction(sfunction = false)}>×</span>
            </button>
          </div>
              ):
              null
              }
    </div>
  );
}
