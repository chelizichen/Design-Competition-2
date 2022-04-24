import { useEffect } from "react"
import axios from 'axios'
function Recently() {
    useEffect(()=>{
        axios.get('/api1/g2/getOnsInfo?name=disease_other').then(res=>{
            // console.log(res);
            let data = eval("("+res.data.data+")")
            console.log(data);
        }).catch(err=>{
            console.log(err);
        })

    },[])
    return(
        <div>
            
        </div>
    ) 
}
export {
    Recently
}