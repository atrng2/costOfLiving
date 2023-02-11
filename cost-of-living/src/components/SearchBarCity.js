import React, { useState , useEffect, useRef} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { updateCity, removeCity } from './features/inputBars/inputCitySlice.js'
import "./SearchBarCity.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';
import ClickAwayListener from '@mui/material/ClickAwayListener';


function SearchBar({ placeholder, data}) {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const year = Number(useSelector((state) => state.inputYear.value))
    const city = (useSelector((state) => state.inputCity.value))
    const dispatch = useDispatch()

    //populates the drop down menu and updates the state of the input 
    const handleFilter = (event) => {
        const searchWord = event.target.value
        setWordEntered(searchWord)
        dispatch(updateCity(searchWord))
        let newFilter = []
        if(year === 0 || data[year] === undefined){
        newFilter = [{city:'Enter a valid year'}]
        }
        else{
        newFilter = data[year].filter((value) => {
            return value.city.toLowerCase().includes(searchWord.toLowerCase());
        });
        }

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
      dispatch(updateCity(searchWord))
   };

    //removes input and drop down menu
    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
      dispatch(removeCity());
    }

    //removes the drop down if clicking outside the menu
  const handleClickAway = () => {
    setFilteredData([])
  };


  return (
    <div className="search searchCity">
      <div className="searchInputs">
        <input type="text" value = {wordEntered} placeholder={placeholder} onChange={handleFilter}/>
        <div className="searchIcon">
          {filteredData.length === 0 && wordEntered.length === 0 ? <SearchIcon /> : <CloseIcon id = "clearBtn" onClick = {clearInput}/> }
        </div>
      </div>
      {filteredData.length !== 0 && (
        <ClickAwayListener onClickAway={handleClickAway}>
      <div className="dataResult">
        {filteredData.slice(0, 7).map((value, key) => {
          return (
            <a className="dataItem" onClick={handleMenuClick}>
              <p> {value.city} </p>
            </a>
          );
        })}
      </div>
      </ClickAwayListener>
      )}
    </div>
  );
}

export default SearchBar;

