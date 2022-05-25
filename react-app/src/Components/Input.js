import React, {useState} from 'react';
import {TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {addDataAction} from "../Store/DataReducer";

const Input = ( {saveToDo} ) => {
    
    //Store

    const dispatch = useDispatch()
    
    const click1 = () => {
      dispatch(addDataAction(2))
    }

    // State инпута

    const [value, setValue] = useState([])

    // State инпута (error)

    const [error, setError] = useState(false)

    //HandleClick в state

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    //Submit

    const onSubmit = (e) => {
        e.preventDefault()
        if (value === []){
            setError(true)
        }
        else {
            setError(false)
        }
        console.log(value)}


    return (
        <div className="Container">
            <form onSubmit={onSubmit}>
                <TextField onChange={handleChange} className="Input" variant="outlined" label="Добавить задачу" error={error}/>
            </form>
            <button onClick={click1}>123</button>
        </div>
    );
};

export default Input;