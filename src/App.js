// import logo from './logo.svg';

import React ,{ useState } from "react";
import TodoItem from "./todo/todoItem";
import TodoList from "./todo/todoList";
import {TodoCounter} from "./todo/todoCounter";
import {CreateTodoButton} from "./todo/CreateTodoButton";
import { TodoSearch } from "./todo/todoSearch"

// import './App.css';
const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: true },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'LALALALAA', completed: false },
];
function App(props) {
  const [search,setSearchValue] = useState('LOLO');

  return (
    <React.Fragment>
      <TodoSearch search={search} setSearchValue={setSearchValue}/>
      <TodoList>
        {todos.map((todo, idx) => (
          <TodoItem text={todo.text} key={idx} />
        ))}
      </TodoList>

      <TodoCounter />
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
