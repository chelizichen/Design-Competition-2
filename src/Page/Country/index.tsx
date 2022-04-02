import React from "react";
import { Vaccine } from "./components/vaccine";

class Country extends React.Component{
    render()
    {
        return(
            <div  style={{width:'100%',overflow:'clip'}}>
                <Vaccine/>
            </div>
        )
    }
}
export {
    Country
}