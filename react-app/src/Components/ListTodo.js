import React from 'react';

const ListTodo = ( {value} ) => {
    return (
        <div className="container">
            {value.map((val) => {
                return(
                    <div>{val}</div>
                )
                }
            )}
        </div>
    );
};

export default ListTodo;

