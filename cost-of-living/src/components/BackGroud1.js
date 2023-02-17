import React from 'react';
import "./BackGroud1.css";
import SearchBarYear from './SearchBarYear';
import SearchBarCity from './SearchBarCity';
import GoButton from './GoButton';
import Data from './json/dataIndex.json'
import CostByIndexTable from './CostByIndexTable';
import Footer from './Footer';


function BackGroud1(data1){

    return(
        <div class = "background1">
        {[<SearchBarYear data = {Data}/> , 
        <SearchBarCity data = {Data}/>,
        <GoButton data = {Data}/>,
        <CostByIndexTable />,
        <Footer />]}
        </div>
    
    );
}


export default BackGroud1;