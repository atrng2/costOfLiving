import React from 'react';
import "./CostByIndexTable.css";
import StarIcon from '@mui/icons-material/Star';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

function CostByIndexTable(){

    return(
        <div class ="grid-container">
            <div class = "item1">
                {<StarIcon/>}
                <p>Rank</p>
            </div>
            <div class = "item2">
                {<LocationCityIcon/>}
                <p>City</p>
            </div>
            <div class = "item3">
                {<FavoriteIcon/>}
                <p>Cost of Living</p>
            </div>
            <div class = "item4">
                {<ApartmentIcon/>}
                <p>Rent</p>
            </div>
            <div class = "item5">
                {[<FavoriteIcon/>,<ApartmentIcon/>]}
                <p>Living & Rent</p>
            </div>
            <div class = "item6">
                {<LocalGroceryStoreIcon/>}
                <p>Groceries</p>
            </div>
            <div class = "item7">
                {<LocalDiningIcon/>}
                <p>Resturant</p>
            </div>
            <div class = "item8">
                {<PowerSettingsNewIcon/>}
                <p>Purchasing Power</p>
            </div>    
        </div>
    );
}


export default CostByIndexTable;