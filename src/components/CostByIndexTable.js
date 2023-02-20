import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import "./CostByIndexTable.css";
import StarIcon from '@mui/icons-material/Star';
import FlagIcon from '@mui/icons-material/Flag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


function CostByIndexTable(){

    const table = useSelector(state => state.inputTable.value)

    return(
        <div class ="grid-container">
            <div class = "item1">
                {<StarIcon/>}
                <br></br>
                <p class = "title">Rank</p>
                <br></br>
                <p class = "index">{table[0]}</p>
            </div>
            <div class = "item2">
                {<FlagIcon/>}
                <br></br>
                <p class = "title">City</p>
                <br></br>
                <p class = "index">{table[1]}</p>
            </div>
            <div class = "item3">
                {<FavoriteIcon/>}
                <br></br>
                <p class = "title">Cost of Living</p>
                <br></br>
                <p class = "index">{table[2]}</p>
            </div>
            <div class = "item4">
                {<ApartmentIcon/>}
                <br></br>
                <p class = "title">Rent</p>
                <br></br>
                <p class = "index">{table[3]}</p>
            </div>
            <div class = "item5">
                {[<FavoriteIcon/>,<ApartmentIcon/>]}
                <br></br>
                <p class = "title">Living & Rent</p>
                <br></br>
                <p class = "index">{table[4]}</p>
            </div>
            <div class = "item6">
                {<LocalGroceryStoreIcon/>}
                <br></br>
                <p class = "title">Groceries</p>
                <br></br>
                <p class = "index">{table[5]}</p>
            </div>
            <div class = "item7">
                {<LocalDiningIcon/>}
                <br></br>
                <p class = "title">Restaurant</p>
                <br></br>
                <p class = "index">{table[6]}</p>
            </div>
            <div class = "item8">
                {<PowerSettingsNewIcon/>}
                <br></br>
                <p class = "title">Purchasing Power</p>
                <br></br>
                <p class = "index">{table[7]}</p>
            </div>    
        </div>
    );
}


export default CostByIndexTable;