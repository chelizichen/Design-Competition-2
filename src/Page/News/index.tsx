import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import {PublicComponents} from './components/publicComponents'
import './index.css'
class News extends React.Component{
    render()
    {
        return(
            <div>
                {/* <PublicComponents/> */}
                <NavLink className={ ({isActive}) =>'news1'  + (isActive ?' activeStyle1':'')} to="news1" >
                    本轮国内疫情何时结束？14亿国人收到好消息！钟南山院士回应来了<span className="innerSpan">据人民网报道，近日，新型冠病毒散发.....</span>
                </NavLink>
                <Routes>
                    <Route path="news1" element={<PublicComponents/>}></Route>
                </Routes>
            </div>
        )
    }
}
export {
    News
}