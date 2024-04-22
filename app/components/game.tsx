"use client";
import React, { useEffect } from "react";
import SearchBar from "./Search/searchbar";
import Attempt from "./dle/attempt";

const Game = ({data}: {data: JSON}) => {
    const [selectedItem, setSelectedItem] = React.useState({});

    const handleItemSelected = (item: JSON) => {
        setSelectedItem(item);
    }


    return (
        <div>
            <p>Game</p>

            <p>Selected item : {selectedItem && selectedItem.name}</p>

            <SearchBar data={data} onItemSelected={handleItemSelected} />

            <Attempt item={selectedItem} />

        </div>
    );
}

export default Game;