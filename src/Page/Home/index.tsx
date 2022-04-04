import React from "react";
import { DayAdd } from "./components/dayAdd";
import { DayAdd1 } from "./components/dayAdd1";
import { Dead } from "./components/dead";
import { Heal } from "./components/heal";
import { URLComponent } from "./components/url";

class Home extends React.Component{
    render()
    {
        return(
            <div style={{width:'100%',overflow:'clip'}}>
                {/* <URLComponent/> */}
                <DayAdd/>
                <DayAdd1/>
                <Heal/>
                <Dead/>
            </div>
        )
    }
}
export {
    Home
}