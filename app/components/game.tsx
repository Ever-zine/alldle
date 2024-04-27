"use client";
import React, { useEffect } from "react";
import SearchBar from "./Search/searchbar";
import Attempts from "./dle/attempts";

const Game = ({data}: {data: JSON}) => {
    // Select a random item from the data at the beginning of the game
    useEffect(() => {
        selectItemToFind();
    }, []);

    // Manage the item to find
    const [itemToFind, setItemToFind] = React.useState({});
    const [itemFound, setItemFound] = React.useState(false);

    const [selectedItem, setSelectedItem] = React.useState({});
    const [attempts, setAttempts] = React.useState([]);

    const handleItemSelected = (item: JSON) => {
        setAttempts([...attempts, item]);
        setSelectedItem(item);
    }

    const selectItemToFind = () => {
        setItemToFind(data[Math.floor(Math.random() * data.length)]);
        setItemFound(true);
    }

    
    return (
        <>
        <div>
            <p>Game</p>

            <button onClick={selectItemToFind}>Start new game</button>

            <p>Item to find : {itemToFind && itemToFind.name}</p>

            <SearchBar data={data} onItemSelected={handleItemSelected} />

            {itemFound && <Attempts attempts={attempts} itemToFind={itemToFind} />}

            {/* <div>
                {attempts.map((attempt: any) => (
                    <Attempt item={attempt} />
                ))}
            </div> */}

        </div>
        </>
    );
}

export default Game;