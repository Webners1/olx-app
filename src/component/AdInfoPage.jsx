import React, { useState ,useEffect} from 'react'
import firebase from 'firebase'
import { Avatar, Button, Grid, Icon, IconButton, makeStyles, Paper, ThemeProvider, Typography } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#00352c',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#004346',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
const useStyles = makeStyles((theme) => ({
 price:{
   
   margin:'10px',
   
   width:'300px',
   height:'200px',
   [theme.breakpoints.up('sm')]: {
      marginLeft:'40%',

      width:'400px'

   
    },
     [theme.breakpoints.up('md')]: {
      margin:'10px',

      width:'300px'

   
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft:'2%',

      width:'96%'

   
    },
    
 },
 FavoriteIcon:{
     
      
      float:'right',
      '&:focus':{
        color:'green'
      }

    },
 description:{
      marginTop:'10px',
   width:'900px',
   height:'300px',
   fontSize:'17px',
   fontWeight:'600',
    [theme.breakpoints.up('md')]: {
      

      width:'700px'

   
    },
   [theme.breakpoints.down('sm')]: {
      

      width:'500px'

   
    },
     [theme.breakpoints.down('xs')]: {
      marginLeft:'2%',

      width:'96%'

   
    },
   
 },username:{
fontSize:'15px',
color:'#004346',
fontWeight:'600'
 },
 email:{
   marginTop:'5px',
   marginLeft:'6%',
fontSize:'18px',
color:'#004346',
fontWeight:'600'
 },
 desc:{
   marginLeft:'5%',
 },
 priceText:{
  float:'bottom',
 textAlign:'center',
   fontWeight:'700',
   color:'#004346',
   fontSize:'32px',
 },
 dateText:{
   color:'#004346',
   fontSize:'16px',
   fontWeight:'500',
   marginTop:'5px',
float:'right',
marginRight:'5px',
[theme.breakpoints.down('sm')]: {
  marginTop:'100px'
}
 },
 locationText:{
   marginTop:'70px',
   marginRight:'60px',
float:'left',
fontWeight:'500',
color:'#004346',
 },
 genreText:{
   color:'#004346',
   fontSize:'16px',
   fontWeight:'500',
  marginTop:'100px',
float:'left',
marginLeft:'5px'
 },
 rootUserPic:{
width:'90px',height:'90px',marginLeft:'40px',
 },
 userPic:{
  
     width:'70px',
     height:'70px',
     marginLeft:'110px',
   [theme.breakpoints.down('sm')]: {

  marginLeft:'160px',
   }
 },
 msgBtn:{
   
      border:'2px solid  #002f34',
      marginLeft:'15%',
      fontStyle:'Lucida Sans Unicode',
      color:' #002f34',
      fontWeight:'800',
      margin:'2px',
width:'200px',
height:'40px',

'&:hover':{
    border:'6px solid  #002f34',
    backgroundColor:'#002f34',
    color:'white'
},
[theme.breakpoints.down('md')]: {
  border:'3px solid  #002f34',
      width:'200px',
      marginTop:'10px',
      height:'40px',
     marginLeft:'50px'
    },
    [theme.breakpoints.down('sm')]: {
  border:'3px solid  #002f34',
      width:'200px',
      marginTop:'10px',
      height:'40px',
     marginLeft:'95px'
    },
  },
 descText:{
   marginLeft:'10px'
 }
}));
function Page(props){
    const classes = useStyles();

    console.log(props)
   const {price,description,image,location,category,date,genre,userPic,userName,userEmail,userPhone} = props

     return(
<div>
   <ThemeProvider theme={theme}>
     <Grid container>

<Grid item lg={3} md={3} xs={false} sm={1}/>
<Grid item lg={5} md={5} xs={12} sm={12}>
  <Paper elevation={6} >
<img src={`${image}`} height='430px'width='90%'style={{position:'relative',marginLeft:'5%'}}/>
  </Paper>
</Grid>



<Grid item lg={3} md={3} xs={12} sm={9} >
 <Paper elevation={1} className={classes.price} color='primary'>
    <IconButton aria-label="add to favorites" className={classes.FavoriteIcon}>
              
          <FavoriteIcon />
          
        </IconButton>
  <Typography className={classes.priceText}>
    Rs:{price}
    </Typography>
    <Typography className={classes.desc}>
    {description.substring(0,20)}
    </Typography>
    <Typography className={classes.genreText}>
    Genre:{genre}
    </Typography>
    <Typography className={classes.locationText}>
    Location:{location}
    </Typography>
     <Typography className={classes.dateText}>
    Date:{date}
    </Typography>
    
 </Paper>
 <Paper elevation={1} className={classes.price} color='primary'>
   
  <Avatar aria-label="recipe" className={classes.userPic}>
            {userPic!==null && userPic !== undefined?<img src={userPic} width='70px'/>:<img src='https://statics.olx.com.pk/external/base/img/avatar_4.png'width='70px'/>}
          </Avatar>
   

    {userName===null? '':<h5 className={classes.username}>{userName}</h5>}
    {userEmail===null? '':<h5 className={classes.email}>{userEmail}</h5>}
     {userPhone !==null &&userPhone !==undefined?<h5 className={classes.email}>Phone#:{userPhone}</h5>:<h6>Phone#: user dont have phone number</h6>}
    
   <Button className={classes.msgBtn}> Send Message</Button>
 </Paper>
</Grid>
<Grid item lg={3} md={3} xs={false} sm={2}/>
<Grid item lg={5} md={5} xs={12} sm={10}>
  <Paper variant='outlined' className={classes.description}>
<Typography variant="h6" component="h6" color='secondary' className={classes.descText}>
  <h4 style={{fontWeight:'600'}}>Description:</h4>{description}
</Typography>
  </Paper>
</Grid>
     </Grid>
     </ThemeProvider>
</div>
     )
}
function InfoPage(props){
    let[data,getData] =useState({})
    var[value,setValue]=useState({})
    let[user,getUser] = useState()
    const{match} =props
    const{params} = match
    const{id} = params
    const userData = id
   

        useEffect(()=>{
         firebase.database().ref('AdData').on('value',snapshot=>{
            if(snapshot.val()!=null){
              setValue({
                ...snapshot.val()
              })
            }
          })
        },[])
return(
    <div>
    {Object.keys(value).map((id,index) => {
console.log('data==>',typeof(userData),'id===>',typeof(id))
  if(id === userData){
      return(

<Page {...value[id]}/>
      )
  }
  
})}
       </div>
    )

   
    
}
export{
    InfoPage,
}

