import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from './components/Header';
import SearchBarCity from './components/SearchBarCity';
import SearchBarYear from './components/SearchBarYear';
import GoButton from "./components/GoButton";
import CostByIndexTable from "./components/CostByIndexTable";
import Footer from "./components/Footer";
import BackButton from "./components/BackButton";
import Backgroud1 from "./components/BackGroud1";





function App(){

  const [myData, setYear] = useState("");
  const getYear = () => {
    fetch("https://cost-of-living-api.herokuapp.com/api?q=Years")
    .then((response) => response.json())
      .then((data) => {
        //console.log(data.table.rows);
        setYear(data.table.rows);
      });
  };

    //heroku free databases marked for deletion
    useEffect(() => {
      //getYear();
    }, []);
 

  
  
  return (
    
    <div class = "App">
    <Header/>
    <Routes>
      <Route path = '/' element = {[ 
      <Backgroud1/>,]} />

      <Route path = '/info' element = {[<BackButton/>, <CostByIndexTable />]} />
      
    </Routes>
    </div>
   
    
  
  );

}

export default App;
