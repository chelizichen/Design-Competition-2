import React from 'react';
import './App.css';
import {BrowserRouter, NavLink,Routes,Route} from 'react-router-dom'
import { Country } from './Page/Country';
import { Home } from './Page/Home';
import { News } from './Page/News';

// 页面导航栏 放在底部
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navLink">
          <NavLink to='Home' className={ ({isActive}) =>'defaultStyle'  + (isActive ?' activeStyle':'')} >首页</NavLink>
          <NavLink to='Country' className={ ({isActive}) =>'defaultStyle'  + (isActive ?' activeStyle':'')} >全国疫情</NavLink>
          <NavLink to='News' className={ ({isActive}) =>'defaultStyle'  + (isActive ?' activeStyle':'')} >新闻</NavLink>
        </div>
        <Routes>
          <Route path="Home/*" element={<Home/>}></Route>
          <Route path="Country/*" element={<Country/>}></Route>
          <Route path="News/*" element={<News/>}></Route>
        </Routes>
      </BrowserRouter>
      <div className="author">
        <div> 作者 ******</div>
        <div> 学校 武汉城市学院</div>
        <div> 专业班级： *******</div>
      </div>
    </div>
  );
}

export default App;
