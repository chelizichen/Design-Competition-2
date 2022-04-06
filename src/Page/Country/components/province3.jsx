import React from 'react'
import * as echarts from 'echarts'
import axios from 'axios'
/**
 * @params 现有确诊
 * [value:确诊人数,name:地方]
 * 
 */
class Province3 extends React.Component{
    constructor(props)
    {
        super(props) ;
        this.option = {
        };
        this.chartDom = null;
        // this.provinceName = ""
        this.state={
            provinceName1:'**'
        }
        this.confirm = []
        this.name = []
        this.totalConfirm = []
        this.heal = []
        this.totalNowConfirm =[]
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
              name: '确诊',
              type: 'bar',
              stack: 'total',
            //   label: {
            //     show: true
            //   },
              emphasis: {
                focus: 'series'
              },
              data: this.confirm
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
            // {
            //   name: 'Affiliate Ad',
            //   type: 'bar',
            //   stack: 'total',
            //   label: {
            //     show: true
            //   },
            //   emphasis: {
            //     focus: 'series'
            //   },
            //   data: this.totalNowConfirm
            // },
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

        this.chartDom = document.getElementById('Province3');
        let myChart = echarts.init(this.chartDom);
        this.option && myChart.setOption(this.option)
    }
    getData()
    {
        axios.get('/api1/g2/getOnsInfo?name=disease_h5').then(res=>{
            // console.log(res);
            let newData = eval("("+res.data.data+")")
            // console.log('getData',newData);
            let children = newData.areaTree[0].children.slice(1,7)

            let newArray = children[3].children
            for(let i =0;i<newArray.length;i++)
            {
                this.confirm.push(newArray[i].today.confirm)
                this.name.push(newArray[i].name)
                this.totalConfirm.push(newArray[i].total.confirm)
                // this.totalNowConfirm.push(newArray[i].total.nowConfirm)
                this.heal.push(newArray[i].total.heal)
            }
            // console.log('this.confirm',this.confirm);
            // console.log('this.name',this.name);
            // console.log('this.totalConfirm',this.totalConfirm);
            // console.log('this.totalNowConfirm',this.totalNowConfirm);
            // console.log('this.heal',this.heal);

            this.setState({
                provinceName:children[3].name
            })

            console.log(children);
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
                <div id="Province3" style={{width:"100%",height:'15rem'}}></div>
            </div>
        )
    }
}
export {
    Province3
}