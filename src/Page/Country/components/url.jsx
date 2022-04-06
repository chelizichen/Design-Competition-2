import { useEffect } from "react"

function URLComponent()
{
    // https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5
    useEffect(()=>{
        fetch('/api1/g2/getOnsInfo?name=disease_h5',{
            method:"GET"
        }).then(response=>response.json()).then(res=>{
            let newData = eval("("+res.data+")")
            console.log('url',newData);
        }).catch(err=>{
            console.log(err);
        })
    },[])
    return(
        <div>
            <h1>1123</h1>
        </div>
    )
}
export{
    URLComponent
}