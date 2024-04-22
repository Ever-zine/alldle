import React from "react";
import SearchResult from "./searchResult";

const SearchBar = ({data, onItemSelected}: {data: any, onItemSelected: (query: JSON) => void}) => {

    // Variable to store the search results
    const [searchResults, setSearchResults] = React.useState([]);

    // Function to load the search results
    const handleLoadSearchResults = (search: string) => {

        if (search === '') {
            setSearchResults([]);
            return;
        }
        
        setSearchResults(
            data.filter((item: any) => item.name.toLowerCase().startsWith(search.toLowerCase()))
        );
    }

    // Function to select a result
    const handleSelectResult = (entity: any) => {
        console.log(entity.name + ' selected id : ' + entity.id);
        onItemSelected(entity);
    }

    return (
        <div>
            <input onChange={(e) => handleLoadSearchResults(e.target.value)}></input>

            {searchResults.map((entity: any) => (
                <div key={entity.id} onClick={() => handleSelectResult(entity)}>
                    <SearchResult item={entity} />
                </div>
            ))}

        </div>
    );
}

export default SearchBar;