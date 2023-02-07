import React, { useState , useEffect, useRef} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { updateYear, removeYear } from './features/inputBars/inputYearSlice.js'
import "./SearchBarYear.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';
import ClickAwayListener from '@mui/material/ClickAwayListener';

function SearchBarYear({ placeholder, data }) {
  
 const [filteredData, setFilteredData] = useState([]);
 const [wordEntered, setWordEntered] = useState("");
 const [open, setOpen] = useState(false);

 const year = useSelector((state) => state.inputYear.value)
 const dispatch = useDispatch()
 
 //populates the drop down menu and updates the state of the input 
 const handleFilter = (event) => {
     const searchWord = event.target.value
     setWordEntered(searchWord)
     dispatch(updateYear(searchWord))
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

 //populates input upon clicking the drop down menu
 const handleMenuClick = (event) =>{
    const searchWord = event.target.innerText
    setWordEntered(searchWord)
    setFilteredData([])
    dispatch(updateYear(searchWord))
 };
 
 //removes input and drop down menu
 const clearInput = () => {
   setFilteredData([]);
   setWordEntered("");
   dispatch(removeYear());
 }

  //removes the drop down if clicking outside the menu
  const handleClickAway = () => {
    setFilteredData([])
  };


return (
  
 <div className="search">
   <div className="searchInputs">
     <input type="text" value = {year} placeholder={placeholder} onChange={handleFilter}/>
     <div className="searchIcon">
       {filteredData.length === 0 && year.length === 0 ? <SearchIcon /> : <CloseIcon id = "clearBtn" onClick = {clearInput}/> }
     </div>
   </div>
   {filteredData.length !== 0 && (
    <ClickAwayListener onClickAway={handleClickAway}>
   <div className="dataResult">
     {filteredData.slice(0, 7).map((value) => {
       return (
         <a className="dataItem" onClick={handleMenuClick}>
           <p> {value} </p>
         </a>
       );
     })}
   </div>
   </ClickAwayListener>
   )}
 </div>
 
);
}

export default SearchBarYear;
