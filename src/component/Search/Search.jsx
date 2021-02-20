import React from 'react';
import {useState} from "react";
import "./search.scss"
import {useDispatch} from "react-redux";
import {setValue} from "../../redux/actions/search";
import {saveHistory} from "../../history/history";

const Search = () => {
    const [value, changeValue] = useState('');
    const dispatch = useDispatch();

    const onchangeValue = (e) => {
        changeValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(setValue(value))
        saveHistory(value)
    }

    return (
        <div className="search">
            <div className="container">
                <form action="">
                    <h1 className="search__title">Search repositories</h1>
                    <div className="search__wrap">

                        <input onChange={onchangeValue}
                               value={value} name="search"
                               className="search__input"
                               placeholder="Search ..."
                               type="text"/>
                        <button onClick={onSubmit}
                                className="search__btn">Search</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Search