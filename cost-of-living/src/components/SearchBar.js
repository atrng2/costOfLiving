import React, { useState , useEffect, useRef} from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';


function SearchBar({ placeholder, data}) {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const handleFilter = (event) => {
        const searchWord = event.target.value
        setWordEntered(searchWord)
        const newFilter = data.filter((value) => {
            //console.log(data)
            return value.first_name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord === ""){
          setFilteredData([])
        }
        else{
          setFilteredData(newFilter);
        }
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
          {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id = "clearBtn" onClick = {clearInput}/> }
        </div>
      </div>
      {filteredData.length !== 0 && (
      <div className="dataResult">
        {filteredData.slice(0, 7).map((value, key) => {
          return (
            <a className="dataItem" href = '/info'>
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

