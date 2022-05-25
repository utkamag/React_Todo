import React from 'react';
import {useSelector} from "react-redux";

const ListTodo = () => {

    //Используем хук для получения данных со Store

    const data = useSelector(state => state.data)

    return (
        <div className="container">
            {data}
        </div>
    );
};

export default ListTodo;

