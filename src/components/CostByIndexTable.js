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
            <div class = "item item1">
                <div class = "icon icon1">
                    {<StarIcon/>}
                </div>
                <p class = "title">Rank</p>
                <p class = "index">{table[0]}</p>
            </div>
            <div class = "item item2">
                <div class = "icon icon2">
                    {<FlagIcon/>}
                </div>
                <p class = "title">City</p>
                <p class = "index">{table[1]}</p>
            </div>
            <div class = "item item3">
                <div class = "icon icon3">
                    {<FavoriteIcon/>}
                </div>
                <p class = "title">Cost of Living</p>
                <p class = "index">{table[2]}</p>
            </div>
            <div class = "item item4">
                <div class = "icon icon4">
                    {<ApartmentIcon/>}
                </div>
                <p class = "title">Rent</p>
                <p class = "index">{table[3]}</p>
            </div>
            <div class = "item item5">
                <div class = "icon icon5">
                    {[<FavoriteIcon/>,<ApartmentIcon/>]}
                </div>
                <p class = "title">Living & Rent</p>
                <p class = "index">{table[4]}</p>
            </div>
            <div class = "item item6">
                <div class = "icon icon6">
                    {<LocalGroceryStoreIcon/>}
                </div>
                <p class = "title">Groceries</p>
                <p class = "index">{table[5]}</p>
            </div>
            <div class = "item item7">
                <div class = "icon icon7">
                    {<LocalDiningIcon/>}
                </div>
                <p class = "title">Restaurant</p>
                <p class = "index">{table[6]}</p>
            </div>
            <div class = "item item8">
                <div class = "icon icon8">
                    {<PowerSettingsNewIcon/>}
                </div>
                <p class = "title">Purchasing Power</p>
                <p class = "index">{table[7]}</p>
            </div>    
        </div>
    );
}


export default CostByIndexTable;