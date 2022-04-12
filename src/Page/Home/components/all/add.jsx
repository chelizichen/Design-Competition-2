import React from 'react'
import * as echarts from 'echarts'
import axios from 'axios'
import '../../index.css'
class AllAdd extends React.Component{
    constructor(props)
    {
        super(props) ;
        this.option = {
        };
        this.testData = []
        this.testDate = []
        this.testDead = []
        this.chartDom = null;
    }
    async componentDidMount()
    {
        // 得到数据
        await this.getData()
        // console.log('this.testData',this.testData);
        let currData = this.getMostAddDay()
        this.option = {
            tooltip: {
              trigger: 'axis',
              position: function (pt) {
                return [pt[0], '10%'];
              }
            },
            title: {
              left: 'center',
            },
            toolbox: {
              feature: {
                dataZoom: {
                  yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: this.testDate
            },
            yAxis: {
              type: 'value',
              boundaryGap: [0, '100%']
            },
            dataZoom: [
              {
                type: 'inside',
                start: 0,
                end: 10
              },
              {
                start: 0,
                end: 10
              }
            ],
            series: [
              {
                name: 'EveryDaty Data',
                type: 'line',
                symbol: 'none',
                sampling: 'lttb',
                itemStyle: {
                  color: 'rgb(255, 70, 131)'
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: 'rgb(255, 158, 68)'
                    },
                    {
                      offset: 1,
                      color: 'rgb(255, 70, 131)'
                    }
                  ])
                },
                data: this.testData
              }
            ]
          };

        this.chartDom = document.getElementById('allAdd');
        let myChart = echarts.init(this.chartDom);
        this.option && myChart.setOption(this.option)
    }
    /**
     * @Param {localConfirmadd} 本土新增
     * @Param {localinfectionadd} 本土无症状
    */
    getMostAddDay()
    {
        let mostIndex = 1
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
            let newData = sevenDayData.chinaDayList
            // console.log('newData',newData);
            newData.forEach(el=>{
                this.testData.push(el.confirm)
                this.testDate.push(el.date)
                this.testDead.push(el.dead)
            })
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
                <div className="title">全国每日新增数据</div>
                <div id="allAdd" style={{width:"100%",height:'15rem',marginTop:'-40px'}}></div>
            </div>
        )
    }
}
export {
    AllAdd
}