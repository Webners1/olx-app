import React from 'react'
import './footer.css'


function Footer(){
return(
    <div className="main-footer">
        <div className="container-fluid">
            <div className="row">
<div className='col first'>
<h5 className='tag'>POPULAR CATEGORIES</h5>
<ul className='list-unstyled'>
<li>Cars</li>
<li>Flats for rent</li>
<li>Jobs</li>
<li>Mobile Phones</li>
</ul>
</div>

<div className='col'>
<h5 className='tag'>TRENDING SEARCHES</h5>
<ul className='list-unstyled'>
<li>Bikes</li>
<li>Watches</li>
<li>Books</li>
<li>Dogs</li>
</ul>
</div>

<div className='col'>
<h5 className='tag'>ABOUT US</h5>
<ul className='list-unstyled'>
<li>About OLX Group</li>
<li>OLX Blog</li>
<li>Contact Us</li>
<li>OLX for Businesses</li>
</ul>
</div>

<div className='col'>
<h5 className='tag'>OLX</h5>
<ul className='list-unstyled'>
<li>Help</li>
<li>Sitemap</li>
<li>Legal & Privacy Information</li>
</ul>
</div>

<div className='col last'>
<h5 className='tag'>FOLLOW US</h5>
<i class="fab fa-facebook fa-lg"><a href='facebook.com'></a></i>
<i class="fab fa-google fa-lg"></i>
<i class="fab fa-youtube fa-lg"></i>
</div>
            </div>
            <hr/>
            <div className='row' style={{color:'white',height:'50px',width:'100%',textAlign:'center',backgroundColor:'rgba(0, 41, 43, 0.911)'}}>
                <div className='f col-sm'>
                    Other countries India-SouthAfrica-Indonesia
                </div>
               <p className='f col-sm' >
&copy; {new Date().getFullYear()} OLX BY WEBNERS
</p>
            </div>
        </div>
    </div>
)
}
export default Footer;