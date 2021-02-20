import React from 'react';
import {useEffect, useState} from "react";
import './history.scss'
import Warning from "../Warning/Warning";

const HistoryPage = () => {
    const [historyArr, setHistory] = useState([])

    useEffect(() => {
        let arr = JSON.parse(localStorage.getItem('history'))
        if (arr) {
            setHistory(arr)
        }
    }, [])

    const warningText = 'No history'

    return (
        historyArr.length > 0 ?
            <div className="history">
                <div className="container">
                    <h1 className="history__title">History</h1>
                    <div className="history__wrap">
                        <ul className="history__list">
                            {historyArr.map((item, index)=> {
                                return (
                                    <li key={item + index}>
                                        {item}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div> :
            <Warning text={warningText}/>
    )
}

export default HistoryPage