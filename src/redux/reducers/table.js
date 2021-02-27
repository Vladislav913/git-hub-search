import {GET_DATA, LOADING, SET_ERROR, SET_VALUE} from "../actions/search";

const initialState = {
    data: [],
    total_count: null,
    totalPage: null,
    value: null,
    loading: false,
    errorStatus: ''

};

const search = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            let page = Math.floor(action.payload.total_count / 10)
            return {
                ...state,
                data: [...action.payload.items],
                total_count: action.payload.total_count,
                totalPage: page,
                errorStatus: '',
                loading: false,
            };
        case SET_VALUE:
            return {
                ...state,
                value: action.payload,
                errorStatus: ''
            }
        case SET_ERROR:
            return {
                ...state,
                errorStatus: action.payload,
                loading: false,
            }
        case LOADING:
            return {
                ...state,
                loading: true,
            }

        default:
            return state;
    }
};

export default search;
