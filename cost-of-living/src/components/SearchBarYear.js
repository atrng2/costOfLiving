import React, { useState , useEffect, useRef} from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';

function SearchBarYear({ placeholder, data }) {
  
 const [filteredData, setFilteredData] = useState([]);
 const [wordEntered, setWordEntered] = useState("");
 const inputRef = useRef(null);
 
 const handleFilter = (event) => {
     const searchWord = event.target.value
     setWordEntered(searchWord)
     const newFilter = Object.values(data).flat().filter((value) => {
      //console.log(value.city)
      return value.city.toLowerCase().includes(searchWord.toLowerCase());
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
 };
 
 const clearInput = () => {
   setFilteredData([]);
   setWordEntered("");
 }


return (
 <div className="search">
   <div className="searchInputs">
     <input ref = {inputRef} type="text" value = {wordEntered} placeholder={placeholder} onChange={handleFilter}/>
     <div className="searchIcon">
       {console.log(wordEntered)}
       {filteredData.length === 0 && wordEntered.length === 0? <SearchIcon /> : <CloseIcon id = "clearBtn" onClick = {clearInput}/> }
     </div>
   </div>
   {filteredData.length !== 0 && (
   <div className="dataResult">
     {filteredData.slice(0, 7).map((value) => {
       return (
         <a className="dataItem" onClick={handleClick}>
           <p> {value.city} </p>
         </a>
       );
     })}
   </div>
   )}
 </div>
);
}

export default SearchBarYear;
