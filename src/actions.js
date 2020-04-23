import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js'


export const setSearchField = (text) => (
    {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    })

// normal actionlar  reducer a gider reducer da storu düzenler ve data önyüzde düşer (veya değişiklik )
// ancak requestRobots action gibi durumlarda middleware üzerinden redux Thunk kullanılarak data işlenir
//redux thunka gider ve ilk önce dispatch pending to the reducers sonra reducera gider

export const requestRobots = () => (dispatch) => { //thunkMiddleware fonksiyon istediği için bu action içinde fonksiyon döndürüyoruz
                                                   // ancak dispatch ile bi action çağırıyoruz. çünkü reducer ın bunu anlaması gerek

    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))


}