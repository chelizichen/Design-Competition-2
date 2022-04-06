import React from "react";
// import { URLComponent } from "../Country/components/url";
import { AllAdd } from "./components/allAdd";
import { Pine1 } from "./components/pine1";
import { Pine2 } from "./components/pine2";
import { Province } from "./components/province";
import { Province1 } from "./components/province1";
import { Province2 } from "./components/province2";
import { Vaccine } from "./components/vaccine";

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
                {/* <Vaccine/> */}
                {/* <URLComponent/> */}
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%',height:'auto'}}>
                    <Pine1/>
                    <Pine2/>
                </div>
                <AllAdd/>
                <Province/>
                <Province1/>
                <Province2/>
            </div>
        )
    }
}
export {
    Country
}