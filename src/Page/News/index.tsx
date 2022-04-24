import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Recently } from "./components/recently";
import './index.css'
class News extends React.Component{
    render()
    {
        return(
            <div>
                <h1>最新消息</h1>
                <Recently/>
            </div>
        )
    }
}
export {
    News
}