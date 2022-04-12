import React from 'react'
import * as echarts from 'echarts'
import axios from 'axios'
import '../../index.css'
class Day30Add extends React.Component{
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

        this.chartDom = document.getElementById('main');
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
            let newData = sevenDayData.chinaDayAddList.reverse().slice(0,30).reverse();
            // console.log(newData);
            newData.forEach(el=>{
                this.testData.push(el.localConfirmadd)
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
                <div className="title">三十日本土新增确诊</div>
                <div id="main" style={{width:"100%",height:'15rem',marginTop:'-40px'}}></div>
            </div>
        )
    }
}
export {
    Day30Add
}