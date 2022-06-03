import React, {useState} from 'react';
import {TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {addDataAction, removeDataAction} from "../Store/DataReducer";

const Input = ( {saveToDo} ) => {
    
    //Store

    const dispatch = useDispatch()

    //Submit (Добавляем данные в массив) dispatch
    
    const addData = (e) => {

        e.preventDefault()

        //Если данное поле после заполнения останется пустым, выйдет ошибка

        if (value == []){
            setError(true)
        }
        else {
            setError(false)
        }

        const tests = {
            value,
            id: Date.now(),
        }

        dispatch(addDataAction(tests))
    }


    // State инпута

    const [value, setValue] = useState([])

    // State инпута (error)

    const [error, setError] = useState(false)

    //HandleClick в state

    const handleChange = (e) => {
        setValue(e.target.value)
    }


    return (
        <div className="Container">
            <form onSubmit={addData}>
                <TextField onChange={handleChange} className="Input" variant="outlined" label="Добавить задачу" error={error}/>
            </form>
        </div>
    );
};

export default Input;