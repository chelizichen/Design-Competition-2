import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { DayAdd } from "./components/dayAdd";
import { DayAdd1 } from "./components/dayAdd1";
import { Dead } from "./components/dead";
import { Heal } from "./components/heal";
import { URLComponent } from "./components/url";
import {Index30} from './components/day30/index.jsx'
class Home extends React.Component{
    render()
    {
        return(
            <div style={{width:'100%',overflow:'clip'}}>
                <NavLink className="day30" to="day30">
                    30 日
                </NavLink>
                <Routes>
                    <Route path="day30" element={<Index30/>}></Route>
                    </Routes>
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