import React, { useEffect, useState } from 'react'
import * as echarts from 'echarts'
import axios from 'axios'
class DayAdd extends React.Component{
    constructor(props)
    {
        super(props) ;
        this.state = {
            SevenDayAdd:[]
        };
        this.option = {
        };
        this.testData = []
        this.chartDom = null;
    }
    async componentDidMount()
    {
        // 得到数据
        await this.getData()
        this.option = {
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                data:this.testData,
                type: 'bar'
              }
            ]
        };
        console.log('生命周期',this.state.SevenDayAdd);

        this.chartDom = document.getElementById('main');
        let myChart = echarts.init(this.chartDom);
        this.option && myChart.setOption(this.option)
    }
    /**
     * @Param {localConfirmadd} 本土新增
     * @Param {localinfectionadd} 本土无症状
    */
    async getData()
    {
        await axios.get('/api1/g2/getOnsInfo?name=disease_other').then(res=>{
            let sevenDayData = eval("("+res.data.data+")")
            // console.log(sevenDayData);
            let newData = sevenDayData.chinaDayAddList.reverse().slice(0,7);
            let stateData = []
            newData.forEach(el=>{
                stateData.push(el.localConfirmadd)
            })
            this.testData = stateData
            // this.setState({
            //     SevenDayAdd:stateData
            // })
            // console.log(res);
        }).catch(err=>{
            console.log(err);
        })
        // const res = await fetch('/api1/g2/getOnsInfo?name=disease_other')
        // const data = res.json()
        // console.log(data);
        // data.then(res=>{
        //     let sevenDayData = eval("("+res.data+")")
        //     let newData = sevenDayData.chinaDayAddList.reverse().slice(0,7);
        //     // console.log(newData);
        //     let stateData = []
        //     newData.forEach(el=>{
        //         stateData.push(el.localConfirmadd)
        //     })
        //     console.log(stateData);
        //     this.setState({
        //         SevenDayAdd:stateData
        //     })
        // })

    }

    componentDidUpdate(preProps,preState)
    {
        let myChart = echarts.init(this.chartDom);
        this.option && myChart.setOption(this.option)
        // return this.
    }
    render()
    {
        return(
            <div>
                <div>七日本土新增</div>
                <div id="main" style={{width:"100%",height:'15rem'}}></div>
            </div>
        )
    }
}
export {
    DayAdd
}