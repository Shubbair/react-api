import React from 'react';
import ReactDOM from 'react-dom';
// import Counters from './counters'
import UserInfos from './UserInfos'
import NationInfo from './NationInfo'
import Login from './Login'
import { BrowserRouter, Routes,Route } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
      <Routes>
          <Route index element={<Login/>}></Route>
          <Route path="users" element={<UserInfos/>}></Route>
          <Route path="nation" element={<NationInfo/>}></Route>
      </Routes>
    </BrowserRouter>
,document.getElementById("root"))
