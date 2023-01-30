import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import SearchBarCity from './components/SearchBarCity';
import SearchBarYear from './components/SearchBarYear';
import GoButton from "./components/GoButton";
import Data from './dataIndex.json';




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
    
    <Routes>
      <Route path = '/' element = {[ <Header/>, 
      <SearchBarYear placeholder = "Enter the year.. " data = {Data} /> , 
      <SearchBarCity placeholder = "Enter a city name.." />,
      <GoButton/> ]} />

      <Route path = '/info' element = {<SearchBarYear placeholder = "Enter the year.. " data = {myData} />} />
    </Routes>
  
  );

}

export default App;
