import React from 'react'
import {
 Link
} from "react-router-dom";
class Home extends React.Component{
    render(){
        return(
            <div>

                <h1>This is the Home page </h1>
                <Link to="/">Go to ABout</Link>

            </div>
        )
    }
}
export default Home;