import React, { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from './components/Header';
import SearchBarCity from './components/SearchBarCity';
import SearchBarYear from './components/SearchBarYear';
import GoButton from "./components/GoButton";
import Data from './dataIndex.json';
import CostByIndexTable from "./components/CostByIndex";
import Footer from "./components/Footer";
import BackButton from "./components/BackButton";




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
      <SearchBarYear placeholder = "Enter the year.. " data = {Data} /> , 
      <SearchBarCity placeholder = "Enter a city name.." data = {Data}/>,
      <GoButton data = {Data}/> ]} />

      <Route path = '/info' element = {[<BackButton/>, <CostByIndexTable/>]} />
      
    </Routes>
    <Footer/>
    </div>
   
    
  
  );

}

export default App;
