import React from "react";
import { useState } from "react";
import TodoItem from "./item/TodoItem";

const data = [
  {
    _id: "dsjfjgkjdfg",
    title: "Finish the essay collaboration",
    isCompleted: false,
  },
  {
    _id: "erwuywoiegdj",
    title: "Read next chapter of the book",
    isCompleted: false,
  },
  {
    _id: "dklfgsdiufgl",
    title: "Send yhe finished assignment",
    isCompleted: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  console.log(todos);

  return (
    <div className="text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Todo for junior</h1>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} />
      ))}
    </div>
  );
};

export default Home;
