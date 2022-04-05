import React from 'react'
import * as echarts from 'echarts'
import axios from 'axios'
/**
 * @params 现有确诊
 * [value:确诊人数,name:地方]
 * 
 */
class Pine2 extends React.Component{
    constructor(props)
    {
        super(props) ;
        this.option = {
        };
        this.chartDom = null;
    }
    async componentDidMount()
    {
        // 得到数据
        await this.getData()
        this.option = {
            title: {
              text: '现有确诊',
              left: 'center'
            },
            tooltip: {
              trigger: 'item'
            },
            legend: {
              orient: 'vertical',
              left: 'right'
            },
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: this.newSeriesData,
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          };

        this.chartDom = document.getElementById('Pine2');
        let myChart = echarts.init(this.chartDom);
        this.option && myChart.setOption(this.option)
    }
    async getData()
    {
        await axios.get('/api1/g2/getOnsInfo?name=disease_other').then(res=>{
            let sevenDayData = eval("("+res.data.data+")")
            // console.log(sevenDayData.provinceCompare);
            let newData = sevenDayData.provinceCompare
            // console.log(newData);
            let seriesData = []


            for(let i in newData)
            {
                seriesData.push({name:i,value:newData[i].nowConfirm})
            }
            this.newSeriesData =   seriesData.sort((a,b)=>{
                return b.value - a.value
            }).slice(0,5)
            // console.log(newSeriesData);
        }).catch(err=>{
            console.log(err);
        })
    }

    componentDidUpdate(preProps,preState)
    {
        let myChart = echarts.init(this.chartDom);
        this.option && myChart.setOption(this.option)
    }
    render()
    {
        return(
            <div style={{width:"100%"}}>
                <div id="Pine2" style={{width:"100%",height:'15rem'}}></div>
            </div>
        )
    }
}
export {
    Pine2
}