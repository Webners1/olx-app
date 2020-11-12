import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './frame.css'

function Firstframe(){
    return(
        <Grid container className='Main' spacing={4}>
            <Grid item lg={1}md={1}sm={false} xs={false}/>

            <Grid item className='imageBox'lg={3}md={3}sm={false} xs={false}>
            {/*Image*/}
<img src="https://statics.olx.com.pk/external/base/img/phone-app.png"/>
            </Grid>
            <Grid item className='textBox' lg={3}md={3}sm={false} xs={false}>
            {/*Text*/}
<h1 className='head'>TRY THE OLX APP</h1>
<h4 className='text'>Buy, sell and find just about anything using the app on your mobile.</h4>
            </Grid>
            
            <Grid item className='playstore'lg={2}md={2}sm={false} xs={false}>
            {/*PlayStore*/}
<h6>GET YOUR APP TODAY</h6>

<img src="https://statics.olx.com.pk/external/base/img/appstore_2x.png" width='120px'style={{margin:"5px",}}/>
<img src="https://statics.olx.com.pk/external/base/img/playstore_2x.png" width='120px'/>




            </Grid>

            <Grid item lg={1}md={1}sm={false} xs={false}/>

        </Grid>
    )
}
function Secondframe(){

}
export{
    Firstframe,Secondframe
}