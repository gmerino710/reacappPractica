import React from "react";
import './css/todoList.css'

function todoList(props) {
    const { children } = props;
    return (
        <React.Fragment>
        <h1 className="text__todo">Sistema de control de tareas por hacer</h1>
        <section className="container_todo">
            <ul>
            {children}
            </ul>
        </section>
        </React.Fragment>
    )
}


export default todoList