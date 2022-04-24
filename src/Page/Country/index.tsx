import React from "react";
import { URLComponent } from "../Country/components/url";
import { AllAdd } from "./components/allAdd";
import { Pine1 } from "./components/pine1";
import { Pine2 } from "./components/pine2";
import { Pro1 } from "./components/pro1";
import { Pro2 } from "./components/pro2";
import { Pro3 } from "./components/pro3";
import { Pro4 } from "./components/pro4";
import { Province } from "./components/province";
import { Province1 } from "./components/province1";
import { Province2 } from "./components/province2";
import { Province3 } from "./components/province3";
import { Regress } from "./components/regress";
import { Tab } from './components/tab'
import { Vaccine } from "./components/vaccine";
import { Recently } from './components/recently'

class Country extends React.Component{
    componentDidMount()
    {
        // fetch('/api1/g2/getOnsInfo?name=disease_h5',{
        //     method:"GET"
        // }).then(response=>response.json()).then(res=>{
        //     let newData = eval("("+res.data+")")
        //     // console.log('url',newData.areaTree[0]);
        //     let children = newData.areaTree[0].children
        //     console.log(children);
        // }).catch(err=>{
        //     console.log(err);
        // })
    }
    render()
    {
        return(
            
            <div  style={{width:'100%',overflow:'clip'}}>
                {/* <URLComponent/> */}
                <Tab/>

                <Vaccine/>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%',height:'auto'}}>
                    <Pine1/>
                    <Pine2/>
                </div>
                <AllAdd/>
                <Pro1/>
                <Pro2/>
                <Pro3/>
                <Pro4/>
                {/* <Recently/> */}
                <Province/>
                {/* <Province1/> */}
                {/* <Province2/> */}
                {/* <Province3/> */}
                <Regress/>
            </div>
        )
    }
}
export {
    Country
}