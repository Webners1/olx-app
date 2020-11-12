import React from 'react';
import './nav.css'
import SearchIcon from '@material-ui/icons/Search';
import { Grid } from '@material-ui/core';
import {
Link,useHistory
} from "react-router-dom";




class Dropdown extends React.Component {
  
  constructor(){
    super();
    
    this.state = {
      name:'Enter City',
      displayMenu: false,
    };
    
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    
  };
  
  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }
  
  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
    
  }
  setChange=(e)=>{
    console.log(e)
    this.setState({
        name:e.target.value
    })
  }

  
  
  render() {
    console.log(this.state)
    return (
      
        <div  className="dropdown" style = {{}} >
         <div className="button" onClick={this.showDropdownMenu}> <div className="btn"><div>
              <div className="searchIcon">
              <SearchIcon style={{ fontSize: 35 }}/>
              </div>
            </div><input className='input' onChange={(e)=>this.setChange(e)} placeholder={this.state.name}  type='text' width='100%'></input><a href='#'><i className=" Dropicon fas fa-angle-down fa-3x"></i></a></div>
            </div>

          { this.state.displayMenu ? (
          <ul className='box'>

         <Link to={`/${this.state.name}`}>
         <li className='list'><a href={`#${this.state.name}`}>{this.state.name}</a></li>
         </Link>
         <Link to='/karachi'>
         <li className='list'><a href="#Karachi" value='Karachi,Sindh' >Karachi,Sindh</a></li>
         </Link>
         <Link to='/islamabad'>
         <li className='list'><a href="#Islamabad" value='Islamabad'>Islamabad</a></li>
         </Link>
         <Link to='/lahore'>
         <li className='list'><a href="#Lahore" value='Lahore,punjab'>Lahore,punjab</a></li>
         </Link>
         <Link to='/faislabad'>
         <li className='list'><a href="#Faislabad" value='Faislabad'>Faislabad</a></li>
         </Link>
         <Link to='/rawalpindi'>
         <li className='list'><a href="#Rawalpindi" value='Rawalpindi'>Rawalpindi</a></li>
         </Link>
         <Link to='/quetta'>
         <li className='list'><a href="#Rawalpindi" value='Rawalpindi'>Quetta</a></li>
         </Link>
         <Link to='/kalat'>
         <li className='list'><a href="#Rawalpindi" value='Rawalpindi'>Kalat</a></li>
         </Link>
         <Link to='/malakand'>
         <li className='list'><a href="#Rawalpindi" value='Rawalpindi'>Malakand</a></li>
         </Link>
         <Link to='/sukkur'>
         <li className='list'><a href="#Rawalpindi" value='Rawalpindi'>Sukkur</a></li>
         </Link>
         <Link to='/gujranwala'>
         <li className='list'><a href="#Gujranwala" >Gujranwala</a></li>
         </Link>
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}


export default Dropdown; 
