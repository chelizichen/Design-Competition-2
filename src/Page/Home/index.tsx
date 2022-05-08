import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import {Index30} from './components/day30/index.jsx'
import { AllAdd } from "./components/all/add";
import { Index7 } from "./components/day7";
import {Map} from './components/all/map'
import { Update } from "./components/all/update.jsx";
class Home extends React.Component{
    // nowConfirm: any
    state={
        nowConfirm:"*******"
    }
    componentDidMount()
    {
        fetch('/api1/g2/getOnsInfo?name=disease_other',{
            method:"GET"
        }).then(response=>response.json()).then(res=>{
            let newData = eval("("+res.data+")");
            // console.log(newData.nowConfirmStatis.gat);
            this.setState({
                nowConfirm:newData.nowConfirmStatis.gat
            })
            
            // this.setState({
            //     nowConfirm:newData.nowConfirmStatis.gat
            // })

        }).catch(err=>{
            console.log(err);
        });

        // (Navigate as any)('/day7')
    }
    render()
    {
        return(
            <div style={{width:'100%',overflow:'clip'}}>
                <h1 style={{textAlign:"center"}}> 现有确诊 <span style={{color:"red"}}>{this.state.nowConfirm}</span> 人 </h1>
                {/* <Update/> */}
                <Map/>

                <AllAdd/>
                <Routes>
                    <Route path="/" element={<Index7/>}></Route>
                    <Route path="day7" element={<Index7/>}></Route>
                    <Route path="day30" element={<Index30/>}></Route>
                </Routes>
                {/* <URLComponent/> */}
                {/* <DayAdd/>
                <DayAdd1/>
                <Heal/>
                <Dead/>
                <WhereAddMost/> */}
            </div>
        )
    }
}
export {
    Home
}