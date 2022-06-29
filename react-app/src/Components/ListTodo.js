import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeDataAction} from "../Store/DataReducer";
import ReactSVG from '../assets/IMG/cloud-done-svgrepo-com.svg'


const ListTodo = () => {

    //Store

    const dispatch = useDispatch()

    //Удаляем данные с массива (dispatch)

    const click2 = (item) => {
        dispatch(removeDataAction(item.id))
    }

    //Используем хук для получения данных сo Store

    const data = useSelector(state => state.data)

    return (
        <div className="container">
            {data.length > 0 ? (
                data.map((item) => {
                    return (
                            <div key={item.id} onClick={() => click2(item)} className="listToDo">
                                {item.value}

                            </div>
                    )
                })
            ) : (
                <div className="listToDo_Tasks">
                    <span>Задачи отсутствуют</span>
                    <img className="listToDo_Tasks_Img" src={ReactSVG} alt="test"/>
                </div>
            )}
        </div>
    );
};

export default ListTodo;

