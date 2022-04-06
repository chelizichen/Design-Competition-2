import React from 'react'
import * as echarts from 'echarts'
import axios from 'axios'
import ecStat from 'echarts-stat';
class Regress extends React.Component{
    constructor(props)
    {
        super(props) ;
        this.option = {
        };
        this.testData = []
        this.testDate = []
        this.chartDom = null;
        this.source = []
    }
    async componentDidMount()
    {
        // 得到数据
        await this.getData()
        echarts.registerTransform(ecStat.transform.regression);
        this.option = {
            dataset: [
              {
                source: this.source
              },
              {
                transform: {
                  type: 'ecStat:regression',
                  config: {
                    method: 'exponential'
                    // 'end' by default
                    // formulaOn: 'start'
                  }
                }
              }
            ],
            title: {
              text: 'Linear regression of new local diagnoses on 30 days',
              left: 'center'
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross'
              }
            },
            xAxis: {
              splitLine: {
                lineStyle: {
                  type: 'dashed'
                }
              }
            },
            yAxis: {
              splitLine: {
                lineStyle: {
                  type: 'dashed'
                }
              }
            },
            series: [
              {
                name: 'scatter',
                type: 'scatter',
                datasetIndex: 0
              },
              {
                name: 'line',
                type: 'line',
                smooth: true,
                datasetIndex: 1,
                symbolSize: 0.1,
                symbol: 'circle',
                label: { show: true, fontSize: 16 },
                labelLayout: { dx: -20 },
                encode: { label: 2, tooltip: 1 }
              }
            ]
          };

        this.chartDom = document.getElementById('Regress');
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
            let newData = sevenDayData.chinaDayAddList.reverse().slice(0,30).reverse();
            this.source = []
            console.log(newData);
            newData.forEach((el,index)=>{
                this.source.push([index,el.localConfirmadd])
            })
            console.log('this.source',this.source);
            // console.log(source);
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
                <div className="title">三十日本土新增确诊线性回归图</div>
                <div id="Regress" style={{width:"100%",height:'15rem'}}></div>
            </div>
        )
    }
}
export {
    Regress
}