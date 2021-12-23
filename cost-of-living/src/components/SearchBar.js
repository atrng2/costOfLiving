import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";



function SearchBar({ placeholder, data }) {

    const [filteredData, setFilteredData] = useState([]);
    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter((value) => {
            return value.first_name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if( searchWord === ""){
          setFilteredData([])
        }
        else{
          setFilteredData(newFilter);
        }
    };
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} onChange={handleFilter}/>
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
      {filteredData.length !== 0 && (
      <div className="dataResult">
        {filteredData.slice(0, 7).map((value, key) => {
          return (
            <a className="dataItem" href = "https://www.w3schools.com" target ="_blank" >
              <p> {value.first_name} </p>
            </a>
          );
        })}
      </div>
      )}
    </div>
  );
}

export default SearchBar;

