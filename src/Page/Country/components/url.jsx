import { useEffect } from "react"

function URLComponent()
{
    useEffect(()=>{
        fetch('/api1/g2/getOnsInfo?name=disease_other',{
            method:"GET"
        }).then(response=>response.json()).then(res=>{
            let newData = eval("("+res.data+")")
            console.log(newData);
        }).catch(err=>{
            console.log(err);
        })
    },[])
    return(
        <div>

        </div>
    )
}
export{
    URLComponent
}