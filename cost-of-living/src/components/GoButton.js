import React from 'react';
import "./GoButton.css";
import { useSelector, useDispatch } from 'react-redux'
import { updateTable, clearTable} from './features/tables/tableSlice.js'
import { useNavigate } from "react-router-dom";

function GoButton({data}){

    const year = Number(useSelector((state) => state.inputYear.value))
    const city = (useSelector((state) => state.inputCity.value))
    const table = useSelector(state => state.inputTable.value)
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const handleOnClick = (event) => {
        
        //check for missing inputs and invalid inputs
        if(year <= 0 || city === ""){
            alert("Missing one or more inputs")
        }
        else if(data[year] === undefined || data[year].findIndex(x => x.city === city) === -1){
            alert("One or more invalid inputs")
        }
        else{
            dispatch(updateTable(getInfo(year,city)))
            navigate("/info")
        }

    }

    //returns necessary info as an array
    const getInfo = (year,city) => {
        const index = data[year].findIndex(x => x.city === city)
        return Object.values(data[year][index])
    }

    return(
    <a onClick={handleOnClick}>
        <button class="button">Search</button>
    </a>
    
    );
}


export default GoButton;