import React from 'react';
import "./GoButton.css";
import { useSelector, useDispatch } from 'react-redux'
import { useHref } from 'react-router-dom';

function GoButton({data}){

    const year = Number(useSelector((state) => state.inputYear.value))
    const city = (useSelector((state) => state.inputCity.value))

    const handleOnClick = (event) => {
        
        //check for missing inputs and invalid inputs
        if(year <= 0 || city === ""){
            alert("Missing one or more inputs")
        }
        else if(data[year] === undefined || data[year].findIndex(x => x.city === city) === -1){
            alert("One or more invalid inputs")
        }
        else{
            window.location.href = "/info"
        }

    }

    return(
    <a onClick={handleOnClick}>
        <button class="button">Search</button>
    </a>
    
    );
}


export default GoButton;