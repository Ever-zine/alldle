import React from "react";

const SearchResult = ({item}: {item: any}) => {
    return (
        <div>
            <p>{item.name}</p>
        </div>
    );
}

export default SearchResult;