

// Базовое состояние

const deafultstate = {
    data: []
}

//Редьюсер

export const reducer = (state = deafultstate, action) => {
    switch (action.type){
        case "ADD_DATA":
            return {...state, data: action.payload}
        default:
            return state
    }
}

//Action creator

