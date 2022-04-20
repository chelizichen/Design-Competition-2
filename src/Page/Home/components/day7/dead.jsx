import React from 'react'
import * as echarts from 'echarts'
import axios from 'axios'
import '../../index.css'

class Dead extends React.Component
{
    constructor(props)
    {
        super(props) ;
        this.option = {
        };
        this.testData = []
        this.testDate = []
        this.chartDom = null;
    }
    async componentDidMount()
    {
        // 得到数据
        await this.getData()
        // console.log('this.testData',this.testData);
        this.getMostAddDay()
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

        this.chartDom = document.getElementById('dead');
        let myChart = echarts.init(this.chartDom);
        this.option && myChart.setOption(this.option)
    }
    /**
     * @Param {localConfirmadd} 本土新增
     * @Param {localinfectionadd} 本土无症状
    */
    getMostAddDay()
    {
        let mostValue = Math.max(...this.testData)
        let val = this.testData[this.testData.indexOf(mostValue)]
        this.testData[this.testData.indexOf(mostValue)] = {
            value: val,
            itemStyle: {
              color: 'red'
            }
        }
    }
    async getData()
    {
        await axios.get('/api1/g2/getOnsInfo?name=disease_other').then(res=>{
            let sevenDayData = eval("("+res.data.data+")")
            let newData = sevenDayData.chinaDayAddList.reverse().slice(0,7).reverse();
            // console.log(newData);
            newData.forEach(el=>{
                this.testData.push(el.dead)
                this.testDate.push(el.date)
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
                <div className="title">七日死亡人数</div>
                <div id="dead" style={{width:"100%",height:'15rem',marginTop:'-40px'}}></div>
            </div>
        )
    }
}
export {
    Dead
}