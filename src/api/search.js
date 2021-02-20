import axios from "axios";
import {actLoading, setData, setError} from "../redux/actions/search";


export const getData = (data, page, sort) => (dispatch) => {
    dispatch(actLoading())
    axios.get(`https://api.github.com/search/repositories?q=${data}&page=${page}&per_page=10&sort=${sort}`)
        .then(function (response) {
            dispatch(setData(response.data))

        })
        .catch(function (error) {
            console.log(error.response.data.message)
            dispatch(setError(error.response.data.message))

        })
}