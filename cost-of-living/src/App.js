import React, { useEffect, useState } from "react";
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import SearchBarYear from './components/SearchBarYear'
import GoButton from "./components/GoButton";
import People from './data.json'
import Data from './dataIndex.json'
import { Route, Routes } from "react-router-dom";



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
      <SearchBar placeholder = "Enter a city name.." data = {People} />,
      <GoButton/> ]} />

      <Route path = '/info' element = {<SearchBarYear placeholder = "Enter the year.. " data = {myData} />} />
    </Routes>
    
    
  
  );

}

export default App;
