import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeDataAction} from "../Store/DataReducer";
import HomeIcon from '@mui/material/Icon';


const ListTodo = () => {

    //Store

    const dispatch = useDispatch()

    //Удаляем данные с массива (dispatch)

    const click2 = (item) => {
        dispatch(removeDataAction(item.id))
    }

    //Используем хук для получения данных со Store

    const data = useSelector(state => state.data)

    return (
        <div className="container">
            {data.length > 0 ? (
                data.map((item) => {
                    return (
                        <div key={item.id} onClick={() => click2(item)} className="listToDo">
                            {item.value}
                            <HomeIcon/>
                        </div>
                    )
                })
            ) : (
                <div className="listToDo_Tasks">Задачи отсутствуют</div>
            )}
        </div>
    );
};

export default ListTodo;

