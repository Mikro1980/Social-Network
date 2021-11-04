import React from "react";
import hug from './hug.gif'

const Preloader=()=>{
    return <div style={{width:'100%'}}>
        <img style={{height:'50px',width:'50px',marginLeft:'40%',marginTop:'25%'}} src={hug}/>
    </div>
}
export default Preloader;