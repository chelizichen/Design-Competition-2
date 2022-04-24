import { useEffect, useState } from "react"

function URLComponent()
{
    let [time,setTime] = useState("")
    // https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5
    // http://c.m.163.com/ug/api/wuhan/app/index/feiyan-data-list api4
    // https://c.m.163.com/ug/api/wuhan/app/data/list-total api4
    // api/wuhan/app/data/list-total
    useEffect(()=>{
        fetch('/api1/g2/getOnsInfo?name=disease_other',{
            method:"GET",
            headers:{
                'Content-Type':"application/json"
            }
        }).then(res=>res.json()).then(res=>{
            console.log(res);
            console.log(eval("("+res.data+")"));
        }).catch(err=>{
            console.log(err);
        })
        // fetch('/api3/news/wap/fymap2020_data.d.json',{
        //     method:"GET"
        // }).then(response=>response.json()).then(res=>{
        //     console.log(res);
        //     setTime(res.data.times)
        // }).catch(err=>{
        //     console.log(err);
        // })
        // fetch('/api4/ug/api/wuhan/app/data/list-total',{
        //     method:"GET"
        // }).then(response=>response.json()).then(res=>{
        //     console.log(res);
        //     // setTime(res.data.times)
        // }).catch(err=>{
        //     console.log(err);
        // })
    },[])

    // useEffect(()=>{

    // },[time])
    return(
        <div>
            <h1>{time}</h1>
        </div>
    )
}
export{
    URLComponent
}