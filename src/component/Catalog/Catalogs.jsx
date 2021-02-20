import {useDispatch, useSelector} from "react-redux";
import './catalog.scss'
import CatalogCard from "../CatalogCard/CatalogCard";
import PaginationRounded from "../Pagination/Pagination";
import {getData} from "../../api/search";
import React, {useEffect, useState} from "react";
import SelectSort from "../Select/Select";
import Warning from "../Warning/Warning";
import CircularIndeterminate from "../Spiner/Spiner";


const Catalog = () => {
    const [page, changePage] = useState(1);
    const [option, changeOption] = useState('')
    const {data, total_count, value, totalPage, errorStatus, loading} = useSelector((state) => state.search)
    const dispatch = useDispatch()


    useEffect(() => {
        if (value && !errorStatus) {
            dispatch(getData(value, page, option))
        }
    }, [value, page, option])

    const notResult = `We couldn’t find any repositories matching "${value}"`

    return (
        <>
            {loading ? <CircularIndeterminate/> : null}
            {!errorStatus && data.length > 0 ? <div className="catalog">
                <div className="container">
                    <div className="catalog__wrap">
                        <div className="catalog__info">
                            <div className="catalog__result">
                                {total_count} repository results
                            </div>
                            <div className="catalog__select-box">
                                <SelectSort changeOption={changeOption}
                                            option={option}/>
                            </div>
                        </div>
                        <ul className="catalog__list">
                            {data.map(item => <CatalogCard key={item.id} {...item} />)}
                        </ul>
                        <div className="catalog__pagination-box">
                            {totalPage ? <PaginationRounded page={page}
                                                            changePage={changePage}
                                                            totalPage={totalPage}/> : null}
                        </div>
                    </div>
                </div>
            </div> : errorStatus ? <Warning text={errorStatus}/> :
               null
            }
            { total_count === 0 ? <Warning text={notResult}/> : null}


        </>
    )
}

export default Catalog