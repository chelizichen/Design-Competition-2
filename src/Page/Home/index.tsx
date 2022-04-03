import React from "react";
import { DayAdd } from "./components/dayAdd";
import { URLComponent } from "./components/url";

class Home extends React.Component{
    render()
    {
        return(
            <div style={{width:'100%',overflow:'clip'}}>
                {/* <URLComponent/> */}
                <DayAdd/>
            </div>
        )
    }
}
export {
    Home
}