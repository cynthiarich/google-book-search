import React, { useState } from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import ListContainer from '../components/ListContainer';
import SearchContext from '../utils/SearchContext';

const Books = () => {

    const [searches, setSearch] = useState({
        search: "",
        results: [],
        onClick: (search) => {
            API.searchGoogle(search)
                .then(res => {
                    setSearch({
                        ...searches,
                        search,
                        results: res
                    })
            })
        },
        onChange: (search) => {
            setSearch({
                ...searches,
                search
            });
        },
        onFavorite: (book) => {
            console.log("============what we're sending to mongo===========");
            console.log(book);
            API.saveBook(book)
                .then(res => {
                    console.log(res);
                })
        }
    })

    return (
        <SearchContext.Provider value={searches}>
            <Jumbotron page="search"/>
            <ListContainer />
        </SearchContext.Provider>

    )
}

export default Books;