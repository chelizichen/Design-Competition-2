import {DayAdd} from './dayAdd'
import {DayAdd1} from './dayAdd1'
import {Dead} from './dead'
import {Heal} from './heal'
import { WhereAddMost } from './whereAddMost'
import { NavLink, Route, Routes } from "react-router-dom";
import '../../index.css'
function Index7()
{
    return(
        <div style={{width:'100%',overflow:'clip'}}>
            <DayAdd/>
            <DayAdd1/>
            <Dead/>
            <Heal/>
            <WhereAddMost/>
            <NavLink className="day30" to="day30">
                    点击查看30日数据
            </NavLink>
        </div>
    )   
}
export{
    Index7
}