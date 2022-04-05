import React from "react";
import { URLComponent } from "../Country/components/url";
import { Pine1 } from "./components/pine1";
import { Pine2 } from "./components/pine2";
import { Vaccine } from "./components/vaccine";

class Country extends React.Component{
    render()
    {
        return(
            <div  style={{width:'100%',overflow:'clip'}}>
                {/* <Vaccine/> */}
                {/* <URLComponent/> */}
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%',height:'auto'}}>
                    <Pine1/>
                    <Pine2/>
                </div>
            </div>
        )
    }
}
export {
    Country
}