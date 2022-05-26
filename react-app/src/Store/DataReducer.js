

// Базовое состояние

const deafultState = {
    data: []
}

//Константа

const ADD_DATA = "ADD_DATA"

//Редьюсер

export const reducer = (state = deafultState, action) => {
    switch (action.type) {
        case ADD_DATA:
            return {...state, data: [...state.data, action.payload]}
        default:
            return state
    }
}

//Action creator

export const addDataAction = (payload) => ({type: ADD_DATA, payload})