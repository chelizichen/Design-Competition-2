import axios from 'axios'
import React from 'react'
import { Descriptions } from 'antd';
import { NavLink,Route,Routes } from 'react-router-dom';
import { PublicComponents } from './publicComponents';
class Recently extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            dataArr:[]
        }
    
    }
    componentDidMount()
    {
        axios.get('/api1/g2/getOnsInfo?name=disease_other').then(res=>{
            let data = eval("("+res.data.data+")")
            // console.log(data.statisGradeCityDetail);
            this.setState({
                dataArr:data.statisGradeCityDetail
            },()=>{
                console.log(this.state.dataArr);
            })
            // this.dataArr = data.statisGradeCityDetail
            console.log(this.dataArr);
        }).catch(err=>{
            console.log(err);
        })
    }
    render()
    {
        return(
            <div>
                {
                    this.state.dataArr.map((el,index)=>{
                        return (
                            <div key={index}>
                                <Descriptions title={el.province+"最新消息"} size="small" bordered >
                                    <Descriptions.Item label="省/直辖市">{el.province}</Descriptions.Item>
                                    <Descriptions.Item label="城市">{el.city}</Descriptions.Item>
                                    <Descriptions.Item label="更新时间">{el.mtime}</Descriptions.Item>
                                    <Descriptions.Item label="死亡人数">{el.dead}</Descriptions.Item>
                                    <Descriptions.Item label="治愈认识">{el.heal}</Descriptions.Item>
                                    <Descriptions.Item label="确诊人数">{el.confirm}</Descriptions.Item>
                                    <Descriptions.Item label="新增确诊">{el.confirmAdd}</Descriptions.Item>
                                    <Descriptions.Item label="查看详情"><NavLink to={`/detail?province=${el.province}`}  >{el.grade}</NavLink></Descriptions.Item>
                                </Descriptions>
                            </div>
                      )
                    })
                }
                {/* <Routes>
                    <Route path="/detail" element={<PublicComponents/>}></Route>
                </Routes> */}
            </div>
        )
    }
}
export {
    Recently
}