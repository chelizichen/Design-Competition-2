import React from 'react';
import './App.css';
import {BrowserRouter, NavLink,Routes,Route} from 'react-router-dom'
import { Country } from './Page/Country';
import { Home } from './Page/Home';

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
          {/* <Route path="News/*" element={<Mole/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
