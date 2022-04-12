import React from 'react'
import axios from 'axios'
import '../../index.css'
class Map extends React.Component{
    constructor(props)
    {
        super(props) ;
        this.state = {
            notZeroNowConfirm:'',
            zeroNowConfirm:''
        }
    }
    async componentDidMount()
    {
        // 得到数据
        await this.getData()
    }
    /**
     * @Param {localConfirmadd} 本土新增
     * @Param {localinfectionadd} 本土无症状
    */
    async getData()
    {
        await axios.get('/api1/g2/getOnsInfo?name=disease_other').then(res=>{
            let data = eval("("+res.data.data+")")
            console.log(data);
            // console.log(data.cityStatis);
            let newData = data.cityStatis
            this.setState({
                notZeroNowConfirm:newData.notZeroNowConfirm,
                zeroNowConfirm:newData.zeroNowConfirm
            })

        }).catch(err=>{
            console.log(err);
        })
    }
    render()
    {
        return(
            <div>
                <div className="title">全国共有<span style={{color:'green'}}>{this.state.notZeroNowConfirm}</span>个城市今日无新增</div>
                <div className="title">全国共有<span style={{color:'red'}}>{this.state.zeroNowConfirm}</span>今日有确诊</div>
                {/* <div id="allAdd" style={{width:"100%",height:'15rem',marginTop:'-40px'}}></div> */}
            </div>
        )
    }
}
export {
    Map
}