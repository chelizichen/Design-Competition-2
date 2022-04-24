import React from 'react'
import * as echarts from 'echarts'
import axios from 'axios'
/**
 * @params 现有确诊
 * [value:确诊人数,name:地方]
 * 
 */
class Pro3 extends React.Component{
    constructor(props)
    {
        super(props) ;
        this.option = {
        };
        this.chartDom = null;
        // this.provinceName = ""
        this.state={
            provinceName:'**'
        }
        this.confirm = ''
        this.name = []
        this.totalConfirm = []
        this.heal = []
        this.totalNowConfirm = []
        this.dead = []
    }
    async componentDidMount()
    {
        // 得到数据
        await this.getData()
        this.option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // Use axis to trigger tooltip
              type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            }
          },
          legend: {},
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value'
          },
          yAxis: {
            type: 'category',
            // Y轴 数据
            data: this.name
          },
         series: [
            {
              name: '现有确诊',
              type: 'bar',
              stack: 'total',
            //   label: {
            //     show: true
            //   },
              emphasis: {
                focus: 'series'
              },
              data: this.totalNowConfirm
            },
            {
              name: '全部确诊',
              type: 'bar',
              stack: 'total',
            //   label: {
            //     show: true
            //   },
              emphasis: {
                focus: 'series'
              },
              data: this.totalConfirm
            },
            {
              name: '死亡人数',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: this.dead
            },
            {
              name: '治愈人数',
              type: 'bar',
              stack: 'total',
            //   label: {
            //     show: true
            //   },
              emphasis: {
                focus: 'series'
              },
              data: this.heal
            }
          ]
        };

        this.chartDom = document.getElementById('Pro3');
        let myChart = echarts.init(this.chartDom);
        this.option && myChart.setOption(this.option)
    }
    getData()
    {
        axios.get('/api1/g2/getOnsInfo?name=disease_other').then(res=>{
          let data = eval("("+res.data.data+")")
          let dealData = data.provinceCompare
          let dealArray = []
          for(let v in dealData)
          {
              dealArray.push({city:v,value:dealData[v]})
          }
        //   console.log(dealArray);
          let newData = dealArray[2]

          this.name.push(newData.city)
          this.totalConfirm.push(newData.value.confirmAdd)
          this.dead.push(newData.value.dead)
          this.heal.push(newData.value.heal)
          this.totalNowConfirm.push(newData.value.nowConfirm)
          
          this.setState({
            provinceName:newData.city
          })
        //   this.setState({
        //       provinceName:
        //   })

        //   console.log(dealData);
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
                <h1>{this.state.provinceName}地区疫情图</h1>
                <div id="Pro3" style={{width:"100%",height:'15rem'}}></div>
            </div>
        )
    }
}
export {
    Pro3
}