import React from 'react'
import * as echarts from 'echarts'
import axios from 'axios'
class CLD1 extends React.Component{
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
        console.log(this.props);
        // this.chartDom = document.getElementById('CLD1');
        // let myChart = echarts.init(this.chartDom);
        // this.option && myChart.setOption(this.option)
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
              color: '#a90000'
            }
        }
    }

    componentDidUpdate(preProps,preState)
    {
        // let myChart = echarts.init(this.chartDom);
        // this.option && myChart.setOption(this.option)
        // return this.
    }
    render()
    {
        return(
            <div>
                <div className="title">七日本土新增确诊</div>
                {/* <div id="CLD1" style={{width:"100%",height:'15rem',marginTop:'-40px'}}></div> */}
            </div>
        )
    }
}
export {
    CLD1
}