import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Avatar, Button, IconButton, Menu, MenuItem, TextField } from '@material-ui/core';
import {Alert,Carousel } from 'bootstrap';
import jquery from 'jquery'
import './login.css'
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import firebase from 'firebase'
import {firebaseConfig} from '../firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import Input from '@material-ui/core/Input';
import { AccountCircle } from '@material-ui/icons';
import FacebookIcon from '@material-ui/icons/Facebook';
import {
 Link,useHistory
} from "react-router-dom";





const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  corouselItem:{
      
width:'150px',
height:'300px',

marginTop:'20px',
marginLeft:'5%',
[theme.breakpoints.down('md')]: {
  width:'250px',
  
  marginLeft:'25%'
    },
    [theme.breakpoints.down('xs')]: {
  width:'100px',
  marginLeft:'27%',
marginTop:'10px',
    },


  },
  SignUpBtn:{
    border:'3px solid #002f34',
    marginTop:'10px',
      alignItems:'center',
  alignContent:'center',
marginLeft:'40%',
'&:hover':{
backgroundColor:'#002f34'
 ,
  color:'white'
},[theme.breakpoints.down('md')]: {
  marginTop:'19px',
  marginLeft:'51%',
  width:'100px'
 },
 [theme.breakpoints.down('xs')]: {
  marginTop:'10px',
  marginLeft:'40%',
  width:'100px'
 },
  },
  corouselText:{
    textAlign:'center',
      color:'rgb(92, 92, 92)',
      fontWeight:'400',
      fontSize:'18px',
      width:'368px',
      height:'50px',
      marginLeft:'15px',
      marginTop:'20px',
margin:'2px',
marginBottom:'10px',
 [theme.breakpoints.down('md')]: {
   marginTop:'35px',
  fontSize:'25px',
  marginLeft:'65%',
  
    },
  [theme.breakpoints.down('xs')]: {
   marginTop:'10%',
  fontSize:'22px',
  marginLeft:'-84%',
  marginBottom:'5px',
  
    }, },
  corousel:{
    zIndex:'0',
      
width:'350px',
height:'100px',
marginBottom:'50px',
[theme.breakpoints.down('md')]: {
  width:'800px',
  marginLeft:'30%'
    },
    [theme.breakpoints.down('xs')]: {
  width:'700px',
marginBottom:'5px'
    },

  
  },
  logText:{
    marginLeft:'10%',
    marginTop:'10px',
[theme.breakpoints.down('md')]: {
  marginLeft:'30%'
},
[theme.breakpoints.down('xs')]: {
  marginLeft:'10%'
},
  },
  input:{

marginTop:'3%',
width:'370px',
marginRight:'20%',marginLeft:'6%', 
border:'3px solid #002f34',
borderRadius:'3px',
fontSize:'300px',
[theme.breakpoints.down('md')]: {
marginLeft:'35%',
  width:'450px',

},
[theme.breakpoints.down('xs')]: {
marginLeft:'9%',
  width:'80%',

},
'&:hover':{
  border:'5px solid #002f34',
  borderRadius:'6px'
}
  },
  button:{
      border:'2px solid  #002f34',
      marginLeft:'6%',
      fontStyle:'Lucida Sans Unicode',
      color:' #002f34',
      fontWeight:'800',
      margin:'7px',
width:'368px',
height:'48px',
'&:hover':{
    border:'6px solid  #002f34',
},
[theme.breakpoints.down('md')]: {
  border:'3px solid  #002f34',
      width:'800px',
      marginTop:'20px',
      height:'55px',
      marginLeft:'17%'
    },
    [theme.breakpoints.down('sm')]: {
  border:'3px solid  #002f34',
      width:'80%',
      marginTop:'2%',
      height:'55px',
      marginLeft:'9%'
    },
  },
  paper: {

      width:'500px',
      height:'830px',
    backgroundColor: theme.palette.background.paper,
    
    borderRadius:'3px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    [theme.breakpoints.down('md')]: {
      width:'100%',
      height:'100%'
    },
    [theme.breakpoints.down('xs')]: {
      width:'90%',
      height:'90%'
    },
  }, 
  Login:{
    borderBottom:'3px solid black',
color:'black',
fontSize:'17px',
margin:'20px',
marginLeft:'50px',

'&:hover':{
  
  border:'0px',
  color:'black'


}
  }
}));

function Login(props){
  let{name} = props
let[Login,CheckLogin] = useState(false)
 const classes = useStyles();

let[photoURL,setPhotoUrl] = useState('https://statics.olx.com.pk/external/base/img/avatar_4.png')

let[user,getUser]=useState('')
   
const [anchorEl, setAnchorEl] = useState(null);


const opening = Boolean(anchorEl);
const [open, setOpen] = useState(false);


    const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
    const handleOptClose = () => {
    setAnchorEl(null);
  };
  const handleOpen = () => {
    if(!Login){

      setOpen(true);
    }
  };
  const SignOut=()=>{
firebase.auth().signOut().then(function() {
  CheckLogin(Login=false)
  console.log('Signed Out')

}).catch(function(error) {
console.log(error)})
}
 
  firebase.auth().onAuthStateChanged(function(users){
  if(users){
CheckLogin(Login=true)
setPhotoUrl(photoURL = users.photoURL)
getUser((user) = users)
  }
  else{
console.log('No user SignedIn')

  }
})
  const handleClose=()=>{

     setOpen(false)
     
      
  }
  var history = useHistory()
const path=()=>{
  history.push('/profile')
}

  return (
    <div>
    {Login
    ?
    ( 
   <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                
                <Avatar aria-label="recipe">
             
 {photoURL!==null && photoURL !==undefined? <img src={photoURL}width='40px'/>
:
<img src='https://statics.olx.com.pk/external/base/img/avatar_4.png'width='40px'/>
}
          </Avatar>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={opening}
                onClose={handleOptClose}
              >
                <MenuItem onClick={path}>Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem onClick={SignOut}>Logout</MenuItem>
              </Menu>
            </div>
                
                )
    :
    <p  className={classes.Login}onClick={handleOpen}>
        {name}
      </p>}
     <LoginModal open ={open} handleClose={handleClose} />
    </div>
    
  )
      
      }
      
    function LoginModal(props){
      let[Open,SetOpen] = useState(false)
      let{open,handleClose} = props
     


let[Signinerror,checkSigninError] = useState('')
let [Loginerror,checkLoginError] = useState('')
const[email,setEmail] = useState('')
const[pass,setPassword] = useState('')
 const[Loginemail,setLoginEmail] = useState('')
let[Loginpass,setLoginPassword] = useState('')
let[google,getGoogle] =useState(false)
let[facebook,getFacebook] =useState(false)
let[loginUser,getLoginUser]=useState('')
let [emailSignUp,emailSigning] = useState(false)
let [SignInBtn ,emaillogin] = useState(false)

let[error,findError] = useState(false)
let [Signtrigger,setSignTrigger]= useState(false)
let [Logtrigger,setLogTrigger]= useState(false)

 const classes = useStyles();

  

   
 const OnSignUp = ()=>{
  
  console.log('signup')
  console.log(email,pass)
 firebase.auth().createUserWithEmailAndPassword(email, pass).then(function(result){
   
  setSignTrigger(Signtrigger=true)
findError(error=false)
 }).catch(function(error) {
  // Handle Errors here.
  let errorCode = error.code;
  let errorMessage = error.message;
  console.log(errorCode,errorMessage)
checkSigninError((Signinerror)= error);
  setSignTrigger(Signtrigger=true)
findError(error=true)

  // ...
})

}
const LoginBtn=()=>{
  emaillogin(SignInBtn=true)
emailSigning(emailSignUp=false)
}
const SignUpBtn=()=>{
  emailSigning(emailSignUp=true)
emaillogin(SignInBtn=false)
}
const OnSignIn=()=>{
  

  console.log(email,pass)
  firebase.auth().signInWithEmailAndPassword(Loginemail, Loginpass).then(function(result){
    
    setLogTrigger(Logtrigger=true)
    getLoginUser((loginUser)=Loginemail)
findError(error=false)


  }).catch(function(error) {
  // Handle Errors here.
  let errorCode = error.code;
  let errorMessage = error.message;
checkLoginError((Loginerror)=error)
findError(error=true)
setLogTrigger(Logtrigger=true)
});
}

const googleSignIn=()=>{
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  getGoogle((google)=result)
     
    
  // ...
}).catch(function(error) {
  // Handle Errors here.
  console.log(error.message)
findError(error=true)
  
});
}
const facebookSignIn=()=>{
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
   
  getFacebook((facebook)=true)
  

}).catch(function(error) {
 console.log(error)
findError(error=true)

  // ...
});
}
  try{
    firebase.initializeApp(firebaseConfig)

  }catch(err){
if(!firebase.apps.length){
  console.log('Firebase Error',err.message)
}
firebase.auth().onAuthStateChanged(function(users){
  if(users){



  }
  else{
 

  }
})
  }
 
  

      return(
         <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>

          <div className={classes.paper}>
            <i class="exit far fa-window-close fa-2x" onClick={handleClose}></i>
              <div id="carouselExampleCaptions" className={classes.corousel} className="log carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            
           <i data-target="#carouselExampleCaptions"class="icncor ic fas fa-dot-circle" data-slide-to={0}/>
           <i data-target="#carouselExampleCaptions"class="icncor fas fa-dot-circle" data-slide-to={1}/>
           <i data-target="#carouselExampleCaptions"class="icncor fas fa-dot-circle" data-slide-to={2}/>
         
          </ol>
          <div className="carousel-inner" className={classes.corouselItem}>
            <div className="carousel-item active">
              <img src="https://statics.olx.com.pk/external/base/img/loginEntryPointPost.png" style={{marginLeft:'90%'}} width='100' height='100'className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block" className={classes.corouselText}>
               
                <p>Help make OLX safer place to buy and sell</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://statics.olx.com.pk/external/base/img/loginEntryPointFavorite.png" style={{marginLeft:'90%'}} width='100' height='100'className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block" className={classes.corouselText}>
                
                <p>Contact and close deals fast</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://statics.olx.com.pk/external/base/img/loginEntryPointChat.png" style={{marginLeft:'90%'}} width='100' height='100'className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block" className={classes.corouselText}>
                
                <p> Save all you favorite items in one place</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span className="icnscroll carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span className="icnscroll carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
         
        </div>



<Button className={classes.button} onClick={facebookSignIn}>
  <i class="icn fab fa-facebook fa-lg"></i>Continue with facebook
</Button>
<Button className={classes.button} onClick={googleSignIn}>
  <i class=" icn fab fa-google fa-lg" ></i> Continue with google
</Button>

{emailSignUp
? (
  
    <div>
        {Signtrigger &&error?(
         <div className="alert alert-danger" role="alert">
         {Signinerror.message}
        
        </div>
        
       )
  :
  <p></p>
    }
    {Signtrigger && !error?(
  <div className="alert alert-success" role="alert">
         Congratulation You have SignedIn!
        </div>
    ):
<p></p>
    }
     
  <TextField id="standard-basic" className={classes.input} onChange={e=>setEmail(e.target.value)} label="Email" />
  <TextField id="standard-basic" className={classes.input} onChange={e=>setPassword(e.target.value)} type="password"label="Password" />
<Button  className={classes.SignUpBtn}  onClick={OnSignUp}>
  SignUp
</Button>

          </div>
          
)
 //WORK ON EMAIL CONFIGURATION AND MORE FROM HERE
:
<Button className={classes.button} onClick={()=>SignUpBtn()} >
 <i class="icn fas fa-user-plus fa-lg"></i>Email SignUp
  </Button>
  

}
{SignInBtn 
? (
  
    <div>
       {Logtrigger &&error?(
         <div className="alert alert-danger" role="alert">
         {Loginerror.message}
        
        </div>
        
       )
  :
  <p></p>
    }
    {Logtrigger &&Login && !error?(
  <div className="alert alert-success" role="alert">
         Congratulation You have SignedIn!
        </div>
    ):
<p></p>
    }
  <TextField id="standard-basic" className={classes.input} onChange={e=>setLoginEmail(e.target.value)} label="Email"/>
  <TextField id="standard-basic" className={classes.input} onChange={e=>setLoginPassword(e.target.value)} type="password"label="Password" />
<Button  className={classes.SignUpBtn}  onClick={OnSignIn} >
  SignIn
</Button>


          </div>
          
)
 //WORK ON EMAIL CONFIGURATION AND MORE FROM HERE
:
<Button className={classes.button} onClick={()=>LoginBtn()}>
<i class="icn fas fa-sign-in-alt fa-lg"></i> Email SignIn
  </Button>


}
 <p className={classes.logText} >We won't share your personal details with anyone
</p>
<p className={classes.logText}>If you continue, you are accepting <a href='#'>OLX Terms and Conditions and Privacy Policy</a></p>
          </div>
          
        </Fade>
      </Modal>
    
      )
    }  
      export {
        Login,
        LoginModal

      } 