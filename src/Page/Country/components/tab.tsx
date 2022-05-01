import { useEffect, useState } from "react"
import '../index.css'
interface today{
    confirm: number
    dead: number
    heal: number
    input: number
    storeConfirm: number
}
function Tab()
{
    let [today,setToday] = useState<today>()
    let [time,setTime] = useState('')

    useEffect(()=>{
        fetch('/api4/ug/api/wuhan/app/data/list-total',{
            method:"GET"
        }).then(response=>response.json()).then(res=>{
            console.log(res);
            setToday(res.data.chinaTotal.today)
            setTime(res.data.lastUpdateTime)
            // setTime(res.data.times)
        }).catch(err=>{
            console.log(err);
        })
    },[])
    return (
        <div>
            <div className="title">上次更新时间{time}</div>
            <div className="tabBg">
                <div className="tabIn">
                    <div>今日确诊</div>
                    <div>{today?.confirm}</div>
                </div>
                <div className="tabIn">
                    <div>今日死亡</div>
                    <div>{today?.dead}</div>
                </div>
                <div className="tabIn">
                    <div>今日治愈</div>
                    <div>{today?.heal}</div>
                </div>
                <div className="tabIn">
                    <div>外来输入</div>
                    <div>{today?.input}</div>
                </div>
                <div className="tabIn">
                    <div>本土确诊</div>
                    <div>{today?.storeConfirm}</div>
                </div>
            </div>
        </div>

    )
}
export {
    Tab
}