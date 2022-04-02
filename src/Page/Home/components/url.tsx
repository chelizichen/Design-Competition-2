import { useEffect, useState } from "react"

function URLComponent()
{
    let re = /"dead":(.*),/
    let [str,SetStr] = useState('')
    useEffect(()=>{
        fetch('/api1/g2/getOnsInfo?name=disease_other',{
            method:"GET"
        }).then(response=>response.json()).then(res=>{
            // console.log(res.data[121]);
            let newData = eval("("+res.data+")")
            console.log(newData);
            
            // console.log(re.exec(res.data));
            // console.log(res.data.match(re));
            SetStr(res.data)
            // SetStr(res.data)

        }).catch(err=>{
            console.log(err);
        })
    },[])
    return(
        <div>
            URL TEST
            <div>{str}</div>
        </div>
    )
}
export{
    URLComponent
}