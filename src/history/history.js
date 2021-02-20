export const saveHistory = (value) => {
    let arr = JSON.parse(localStorage.getItem('history')) || []
    if (arr.length >= 5) {
        arr.shift()
        arr.push(value)

    } else {
        arr.push(value)
    }
    localStorage.setItem('history', JSON.stringify(arr));


}