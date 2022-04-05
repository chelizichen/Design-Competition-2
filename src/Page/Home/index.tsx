import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { DayAdd } from "./components/dayAdd";
import { DayAdd1 } from "./components/dayAdd1";
import { Dead } from "./components/dead";
import { Heal } from "./components/heal";
import {Index30} from './components/day30/index.jsx'
class Home extends React.Component{
    // nowConfirm: any
    state={
        nowConfirm:"*******"
    }
    dynamicNowConfirm(confirm:number)
    {
        let newConfirm = confirm - 30;
        let interval = setInterval(()=>{
            if(newConfirm < confirm )
            {
                this.setState({
                    nowConfirm:newConfirm+1
                },()=>{
                    newConfirm++
                })
            }
            else
            {
                clearInterval(interval)
            }
        },100)
        // console.log(newConfirm);
        
    }
    componentDidMount()
    {
        fetch('/api1/g2/getOnsInfo?name=disease_other',{
            method:"GET"
        }).then(response=>response.json()).then(res=>{
            let newData = eval("("+res.data+")")
            console.log(newData.nowConfirmStatis.gat);
            this.dynamicNowConfirm(newData.nowConfirmStatis.gat)
            // this.setState({
            //     nowConfirm:newData.nowConfirmStatis.gat
            // })

        }).catch(err=>{
            console.log(err);
        })
    }
    render()
    {
        return(
            <div style={{width:'100%',overflow:'clip'}}>
                <h1 style={{textAlign:"center"}}> 现有确诊 {this.state.nowConfirm} 人 </h1>
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