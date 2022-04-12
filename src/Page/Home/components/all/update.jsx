import React from 'react'
import axios from 'axios'
import '../../index.css'
class Update extends React.Component{
    constructor(props)
    {
        super(props) ;
        this.state = {
            lastUpdateTime:'',
            noInfect:'',
            heal:''
        }
    }
    async componentDidMount()
    {
        // 得到数据
        await this.getData()
    }
    async getData()
    {
        await axios.get('/api1/g2/getOnsInfo?name=disease_h5').then(res=>{
            let data = eval("("+res.data.data+")")
            console.log(data);
            this.setState({
                lastUpdateTime:data.lastUpdateTime,
                noInfect:data.chinaTotal.noInfect,
                heal:data.chinaTotal.heal
            })
        }).catch(err=>{
            console.log(err);
        })
    }
    render()
    {
        return(
            <div>
                <div className="title">全国共治愈<span style={{color:'green'}}>{this.state.heal}</span>人</div>
                <div className="title">全国目前共有无症状感染者<span style={{color:'#bebe51'}}>{this.state.noInfect}</span>人</div>
                <div className="title">上次更新时间<span style={{color:'blue'}}>{this.state.lastUpdateTime}</span></div>
            </div>
        )
    }
}
export {
    Update
}