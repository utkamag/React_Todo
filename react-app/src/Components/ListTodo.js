import React from 'react';
import {useSelector} from "react-redux";
import {ListItem, List, Container} from "@mui/material";
import {removeDataAction} from "../Store/DataReducer";

const ListTodo = () => {

    //Удаляем данные с массива (dispatch)

    const click2 = (item) => {
        removeDataAction(item.id)
    }

    //Используем хук для получения данных со Store

    const data = useSelector(state => state.data)

    return (
        <div className="container">
            {data.map((item) => {
                return (
                    <div key={item.id} onClick={() => click2(item)} className="ListTodo">
                           {item.value}
                    </div>
                )
            })}
        </div>
    );
};

export default ListTodo;

