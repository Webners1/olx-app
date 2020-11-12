import React from 'react'
// import '../App.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function CommonCard(props) {
    return (
        <div>
            
<div className="card p-3 w-75 ">
       
        
       <div className="img">
       
        <img className="card-img-top " style={{marginLeft:'10%',width:'60%', heigh:'180px'}} src={props.img} alt="Bologna"/>
        <FavoriteBorderIcon className='icn' />
           </div> 
        
        <div className="card-body">
          <h4 className="card-title">{props.price}</h4>
    <h6 className="card-subtitle mb-2 text-muted">{props.model}</h6>
          <p className="card-text"><small style={{fontSize:'10px',float:'right',marginTop:'15px',marginLeft:'30px'}}>TODAY</small></p>
          
        </div>
        </div>
        </div>
    )
}

export default CommonCard;