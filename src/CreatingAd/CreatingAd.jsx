
import React,{Component} from 'react';
import { render } from "@testing-library/react";
import Navbar from '../component/Navbar';
import Menubar from '../component(menuBar)/menuBar'
import {fire} from '../firebase.js'
import { Checkbox, FormControl, Input, ThemeProvider } from '@material-ui/core';
import bootstrap from 'bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import logo from '../images/olx.png'
import firebase from 'firebase'
import {withRouter} from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './form.css'
import { createMuiTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import purple from '@material-ui/core/colors/purple';
import axios from 'axios';
import {
 Link,useHistory
} from "react-router-dom";
import { InputGroup } from 'react-bootstrap';


let today = new Date();
let key = 3
class Adpage extends Component{
    
    top100Films = [
  { title: 'Karachi,sindh', value:'karachi' },
  { title: 'Lahore,Punjab', value: 'lahore' },
  { title: 'Sialkot,Punjab', value: 'sialkot' },
  { title: 'Rawalpindi,Punjab', value: 'rawalpindi' },
  { title: 'Gujrat,Punjab', value: 'gujrat' },
  { title: "Multan,Punjab", value: 'multan' },
  { title: 'Bhawalpur,Punjab', value: 'bhawalpur' },
  { title: 'Hyderabad,Sindh', value: 'hyderabad' },
  { title: 'Quetta,Kpk', value: 'quetta' },
  { title: 'Sukkur,Sindh', value: 'sukkur' },
  { title: 'Kalat,Balochistan', value: 'kalat' },
  { title: 'Mirzapur', value: 'mirzapur' },
  
 
];
    constructor(props){
        super(props)
        
        this.state={
            id:'',
            genre:'Genre',
            uid:'',
            location:'',
            Mobile:false,
            image:'',
            file:''
            
        }
        
        
    }
    handleImage=e=>{
       let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        image: reader.result
      });
    }

    
console.log(this.state.image)
console.log(this.state.file)
    reader.readAsDataURL(file)
    }
   
    handleText=e=>{
        
       
        this.setState({
            [e.target.name]:e.target.value,
            date: today.toLocaleDateString("en-US"),
            uid:this.props.user.uid,
            userEmail:this.props.user.email,
            userPic:this.props.user.photoURL,
            userName:this.props.user.displayName,
            userPhone:this.props.user.phoneNumber
        })
        
    }
    handleLocation=(e,newInputValue)=>{
        console.log(newInputValue.value)
       this.setState({
                location:newInputValue.value
            })
    }
    handleGenre=e=>{
         if(e ==='mobile'){
            this.setState({
                Mobile:true
            })
        }
        else{
            this.setState({
                Mobile:false
            })
        }
        console.log(e)
        this.setState({
            genre:e,
            
        })
    }
    
    handleSubmit=e=>{
        var key = Math.random() * 3345453;
        key = Math.round(key)
        this.setState({
            
        })
        
        fire.database().ref('AdData/').push(this.state)
        console.log(this.state)
    }
     
    componentDidMount=()=>{
this.AuthListener();
    }
    AuthListener=()=>{
        firebase.auth().onAuthStateChanged(function(users){
  if(users){
      console.log('user==>',users)

  }
  else{


  }
})
}
    
   

theme = createMuiTheme({
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
    render(){
        
    
    return(
       
        
        <Grid container direction="column">
            <div className='form'>

            <img className='imgLogo'src={logo} width='130px'/>
<div className='formBox'>

<label className='label'>
    Price:  
       <input placeholder='Price'className='price'type='number' onChange={(e)=>this.handleText(e)} name='price'/> 
    </label>
<label className='desc'>
Description:
    </label>
<textarea className='description'type='textArea' onChange={(e)=>this.handleText(e)} placeholder='Enter Description about the product' name='description'/> 
<label className='label'>
    Image     <input placeholder='imageUrl' className='imageUrl'type='file' onChange={(e)=>this.handleImage(e)} name='imageUrl'/>
    </label>

 <ThemeProvider theme={this.theme}>
<label className='label'>Location:</label>
 <Autocomplete
      id="combo-box-demo"
      
      
      options={this.top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      onChange={(event, newValue) => this.handleLocation(event,newValue)}
        inputValue={this.state.inputValue}
       renderInput={(params) => <TextField {...params} label="Location" variant="outlined" color='secondary'/>}/>
        </ThemeProvider><br/>
 <div className='MaindropBox'>
     <Dropdown
     className='dropBox'
     alignRight
     title='Dropdown right'
     id='dropdown-menu-align-right'
     onSelect={(e)=>this.handleGenre(e)}
     >
         <label>Genre: </label>
  <Dropdown.Toggle className='dop' variant='Info' id="dropdown-basic">
   {this.state.genre}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item className='Dropitem' eventKey="car" >Cars</Dropdown.Item>
    <Dropdown.Item className='Dropitem' eventKey="mobile">Mobile</Dropdown.Item>
    <Dropdown.Item className='Dropitem'  eventKey="land">Land&Plots</Dropdown.Item>
    <Dropdown.Item className='Dropitem'  eventKey="motorcycle">Motorcycle</Dropdown.Item>
    <Dropdown.Item className='Dropitem'  eventKey="house">Houses</Dropdown.Item>
    <Dropdown.Item className='Dropitem'  eventKey="tablet">Tablets</Dropdown.Item>
    <Dropdown.Item className='Dropitem'  eventKey="electronics">other Electronics Devices</Dropdown.Item>
    
  </Dropdown.Menu>
  
</Dropdown>

</div>

{this.state.Mobile?(
    <label className='label'>
Category:<br/>
    <input className='category'type='radio' value='new'
     onChange={(e)=>this.handleText(e)} name='category'/>New<br/>
   <input placeholder='category' className='category'type='radio' value='old'
    onChange={(e)=>this.handleText(e)} name='category'/>Used
    </label>
):null}


   
    


          </div>


<Link to='/'>
<button className='submit1' >Cancel</button>
</Link>
<button className='submit' onClick={this.handleSubmit}>Submit</button>

        </div>
</Grid>

       
    )
}}




export {Adpage}