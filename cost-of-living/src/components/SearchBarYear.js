import React, { useState , useEffect, useRef} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './searchYearSlice.js'
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';

function SearchBarYear({ placeholder, data }) {
  
 const [filteredData, setFilteredData] = useState([]);
 const [wordEntered, setWordEntered] = useState("");

 const count = useSelector((state) => state.yearInput.value)
 const dispatch = useDispatch()
 
 //populates the drop down menu 
 const handleFilter = (event) => {
     const searchWord = event.target.value
     setWordEntered(searchWord)
     dispatch(increment(searchWord))
     const newFilter = Object.keys(data).filter((value) => {
        return value.toLowerCase().includes(searchWord.toLowerCase());
  });
     if(searchWord === ""){
       setFilteredData([])
     }
     else{
       setFilteredData(newFilter);
     }
 };

 //populate the input from the menu
 const handleClick = (event) =>{
    const searchWord = event.target.innerText
    setWordEntered(searchWord)
    setFilteredData([])
    dispatch(increment(searchWord))
 };
 
 const clearInput = () => {
   setFilteredData([]);
   setWordEntered("");
 }


return (
 <div className="search">
   <div className="searchInputs">
     <input type="text" value = {wordEntered} placeholder={placeholder} onChange={handleFilter}/>
     <div className="searchIcon">
       {filteredData.length === 0 && wordEntered.length === 0 ? <SearchIcon /> : <CloseIcon id = "clearBtn" onClick = {clearInput}/> }
     </div>
   </div>
   {filteredData.length !== 0 && (
   <div className="dataResult">
     {filteredData.slice(0, 7).map((value) => {
       return (
         <a className="dataItem" onClick={handleClick}>
           <p> {value} </p>
         </a>
       );
     })}
   </div>
   )}
 </div>
);
}

export default SearchBarYear;
