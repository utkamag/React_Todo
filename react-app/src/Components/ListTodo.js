import React from 'react';
import {useSelector} from "react-redux";
import {ListItem, List, Container} from "@mui/material";

const ListTodo = () => {

    //Используем хук для получения данных со Store

    const data = useSelector(state => state.data)

    return (
        <div className="container">
            {data.map((item) => {
                return (
                    <List className="ListTodo">
                           {item.value + item.id}
                    </List>
                )
            })}
        </div>
    );
};

export default ListTodo;

