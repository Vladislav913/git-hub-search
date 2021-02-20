export const GET_DATA = 'SET_DATA';
export const SET_VALUE = 'SET_VALUE';
export const SET_ERROR = 'SET_ERROR';

export const setData = (data) =>{
  return{
      type: GET_DATA,
      payload: data,
  }
}

export const setValue = (value) =>{
    return{
        type: SET_VALUE,
        payload: value,
    }
}

export const setError = (text) =>{
    console.log('1' + text)
    return{
        type: SET_ERROR,
        payload: text,
    }
}