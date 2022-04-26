import axios from "axios";
import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router"
import { useSearchParams } from "react-router-dom";
import { CLD1 } from "./cld1";

function PublicComponents()
{
    const params = useSearchParams()
    const [obj1,setObj1] = useState({})
    const [obj2,setObj2] = useState({})

    useEffect(()=>{
        // console.log(params[0].get('province'));
        let province:any = params[0].get('province')
        axios.get('/api1/g2/getOnsInfo?name=disease_other').then(res=>{
            let data = eval("("+res.data.data+")")
            // console.log(data.provinceCompare[province]);
            setObj1(data.provinceCompare[province])
        }).catch(err=>{
            console.log(err);
        })
        axios.get('/api3/news/wap/fymap2020_data.d.json').then(res=>{
            let list:Array<any> = res.data.data.list;
            for(let v of list)
            {
                if(v.name === province)
                {
                    console.log('匹配成功');
                    setObj2(v)
                }
                // console.log(v);
            }
            // console.log(list);
        }).catch(err=>{
            console.log(err);
        })
    },[])
    return(
        <div>
            {/* <h1>123</h1> */}
            <CLD1 ojb1={obj1} obj2={obj2}></CLD1>
        </div>
    )
}
export {
    PublicComponents
}