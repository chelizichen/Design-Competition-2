import React from 'react'
import * as echarts from 'echarts'
import axios from 'axios'
import '../index.css'
class WhereAddMost extends React.Component{
    constructor(props)
    {
        super(props) ;
        this.option = {
        };
        this.testData = []
        this.testDate = []
        this.chartDom = null;
        this.newSeriesData = []
    }
    async componentDidMount()
    {
        // 得到数据
        await this.getData()
        console.log('this.testData',this.testData);
        let currData = this.getMostAddDay()
        this.option = {
            xAxis: {
              type: 'category',
              data: this.testDate
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

        this.chartDom = document.getElementById('WhereAddMost');
        let myChart = echarts.init(this.chartDom);
        this.option && myChart.setOption(this.option)
    }
    /**
     * @Param {localConfirmadd} 本土新增
     * @Param {localinfectionadd} 本土无症状
    */
    getMostAddDay()
    {
        let mostIndex = 0
        for(let i =0;i<this.testData.length-1;i++)
        {
            if(this.testData[i+1]>this.testData[i])
            {
                mostIndex = i+1
            }
        }
        let val = this.testData[mostIndex]
        this.testData[mostIndex] = {
            value: val,
            itemStyle: {
              color: '#a90000'
            }
        }
    }
    async getData()
    {
        await axios.get('/api1/g2/getOnsInfo?name=disease_other').then(res=>{
            let sevenDayData = eval("("+res.data.data+")")
            console.log(sevenDayData);
            // console.log(sevenDayData.provinceCompare);
            let newData = sevenDayData.provinceCompare
            // console.log('sevenDayData.provinceCompare',newData);
            let seriesData = []
            for(let i in newData)
            {
                seriesData.push({name:i,value:newData[i].confirmAdd})
            }
            this.newSeriesData =   seriesData.sort((a,b)=>{
                return b.value - a.value
            }).slice(0,7)
            for(let i =0;i<this.newSeriesData.length;i++)
            {
                this.testData.push(this.newSeriesData[i].value)
                this.testDate.push(this.newSeriesData[i].name)
            }
            // console.log('this.newSeriesData',this.newSeriesData);
            // let newData = sevenDayData.chinaDayAddList.reverse().slice(0,7).reverse();
            // console.log(newData);
            // newData.forEach(el=>{
            //     this.testData.push(el.localConfirmadd)
            //     this.testDate.push(el.date)
            // })
        }).catch(err=>{
            console.log(err);
        })
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
                <div className="title">今日新增地区人数</div>
                <div id="WhereAddMost" style={{width:"100%",height:'15rem',marginTop:'-40px'}}></div>
            </div>
        )
    }
}
export {
    WhereAddMost
}