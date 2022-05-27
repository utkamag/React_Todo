

// Базовое состояние

const defaultState = {
    data: []
}

//Выносим в константу

const ADD_DATA = "ADD_DATA"
const REMOVE_DATA = "REMOVE_DATA"

//Редьюсер

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_DATA:
            return {...state, data: [...state.data, action.payload]}
        case REMOVE_DATA:
            return {...state, data: state.data.filter(item => item.id !== action.payload)}
        default:
            return state
    }
}   

//Action creator

export const addDataAction = (payload) => ({type: ADD_DATA, payload})
export const removeDataAction = (payload) => ({type: REMOVE_DATA, payload})

