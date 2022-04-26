import React from 'react'
import * as echarts from 'echarts'
import axios from 'axios'
class CLD1 extends React.Component{
    constructor(props)
    {
        super(props) ;
        this.option = {
        };
        this.chartDom = null;
        this.chartData1 = {}
        this.chartData2 = {}
    }

    componentDidMount()
    {
        console.log('mount',this.props);
        this.chartDom = document.getElementById('CLD1');
    }
    /**
     * @Param {localConfirmadd} 本土新增
     * @Param {localinfectionadd} 本土无症状
    */

    componentDidUpdate(preProps,preState)
    {
        const chartsData = this.props.obj2.city
        let charts ={}
        let components ={}
        for(let i =0;i<chartsData.length;i++)
        {
            charts[chartsData[i].name] = chartsData[i].conNum
            components[chartsData[i].name] = chartsData[i].cureNum
        }
        let pine = {}
        pine['今日新增'] = this.props.ojb1.confirmAdd
        pine['死亡新增'] = this.props.ojb1.dead
        pine['治愈人数'] = this.props.ojb1.heal
        pine['目前新增'] = this.props.ojb1.nowConfirm
        let pine2={}
        pine2['总共新增'] = this.props.obj2.value
        pine2['总共治愈'] = this.props.obj2.cureNum
        pine2['总共死亡'] = this.props.obj2.deathNum
        pine2['境外输入'] = this.props.obj2.jwsrNum
        
        // console.log('pine',pine);
        // console.log(this.props.ojb1);
        console.log(charts);
        const builderJson = {
            all: this.props.obj2.value,
            charts,
            components,
            ie: 9743
          };
          const downloadJson = pine
          const themeJson = pine2
          const waterMarkText = 'ECHARTS';
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = canvas.height = 100;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.globalAlpha = 0.08;
          ctx.font = '20px Microsoft Yahei';
          ctx.translate(50, 50);
          ctx.rotate(-Math.PI / 4);
          ctx.fillText(waterMarkText, 0, 0);
          this.option = {
            backgroundColor: {
              type: 'pattern',
              image: canvas,
              repeat: 'repeat'
            },
            tooltip: {},
            title: [
              {
                text: this.props.obj2.name+' 地区疫情数据',
                subtext: '总计 ' + builderJson.all,
                left: '25%',
                textAlign: 'center'
              },
              {
                text: '今日数据',
                subtext:
                  '总计 ' +
                  Object.keys(downloadJson).reduce(function (all, key) {
                    return all + downloadJson[key];
                  }, 0),
                left: '75%',
                textAlign: 'center'
              },
              {
                text: '历史数据',
                subtext:
                  '总计 ' +
                  Object.keys(themeJson).reduce(function (all, key) {
                    return all + themeJson[key];
                  }, 0),
                left: '75%',
                top: '50%',
                textAlign: 'center'
              }
            ],
            grid: [
              {
                top: 50,
                width: '50%',
                bottom: '45%',
                left: 10,
                containLabel: true
              },
              {
                top: '55%',
                width: '50%',
                bottom: 0,
                left: 10,
                containLabel: true
              }
            ],
            xAxis: [
              {
                type: 'value',
                max: builderJson.all,
                splitLine: {
                  show: false
                },
                show:false
              },
              {
                type: 'value',
                max: builderJson.all,
                gridIndex: 1,
                splitLine: {
                  show: false
                },
                show:false
              },
              
            ],
            yAxis: [
              {
                type: 'category',
                data: Object.keys(builderJson.charts),
                axisLabel: {
                  interval: 0,
                  rotate: 30
                },
                splitLine: {
                  show: false
                }
              },
              {
                gridIndex: 1,
                type: 'category',
                data: Object.keys(builderJson.components),
                axisLabel: {
                  interval: 0,
                  rotate: 30
                },
                splitLine: {
                  show: false
                }
              }
            ],
            series: [
              {
                type: 'bar',
                stack: 'chart',
                z: 3,
                label: {
                  position: 'right',
                  show: true
                },
                data: Object.keys(builderJson.charts).map(function (key) {
                  return builderJson.charts[key];
                })
              },
              {
                type: 'bar',
                stack: 'chart',
                silent: true,
                itemStyle: {
                  color: '#eee'
                },
                data: Object.keys(builderJson.charts).map(function (key) {
                  return builderJson.all - builderJson.charts[key];
                })
              },
              {
                type: 'bar',
                stack: 'component',
                xAxisIndex: 1,
                yAxisIndex: 1,
                z: 3,
                label: {
                  position: 'right',
                  show: true
                },
                data: Object.keys(builderJson.components).map(function (key) {
                  return builderJson.components[key];
                })
              },
              {
                type: 'bar',
                stack: 'component',
                silent: true,
                xAxisIndex: 1,
                yAxisIndex: 1,
                itemStyle: {
                  color: '#eee'
                },
                data: Object.keys(builderJson.components).map(function (key) {
                  return builderJson.all - builderJson.components[key];
                })
              },
              {
                type: 'pie',
                radius: [0, '30%'],
                center: ['75%', '25%'],
                data: Object.keys(downloadJson).map(function (key) {
                  return {
                    name: key.replace('.js', ''),
                    value: downloadJson[key]
                  };
                })
              },
              {
                type: 'pie',
                radius: [0, '30%'],
                center: ['75%', '75%'],
                data: Object.keys(themeJson).map(function (key) {
                  return {
                    name: key.replace('.js', ''),
                    value: themeJson[key]
                  };
                })
              }
            ]
          };
        let myChart = echarts.init(this.chartDom);
        this.option && myChart.setOption(this.option)
        console.log('update',this.props);
    }
    render()
    {
        return(
            <div>
                <div className="title">详细数据</div>
                <div id="CLD1" style={{width:"100%",height:'70rem',marginTop:'40px'}}></div>
            </div>
        )
    }
}
export {
    CLD1
}