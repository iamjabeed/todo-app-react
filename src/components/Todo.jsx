import React, { useState } from "react";

const Todo = () => {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);
  const handleOnclick = () => {
    setTodos([...todos, userInput]);
    setUserInput("");
    // setTodos((todos)=>{
    //   const UpdatedTodoList = [...todos, userInput];
    //   return UpdatedTodoList;
    // })
  };

  const handleDelete = (index) => {
    const updatedList = todos.filter((element, i) => {
      return index != i;
    });
    setTodos(updatedList);
  };

  return (
    <>
      <div className="todo-wrapper">
        <h1>Todo App in React 🎯</h1>
        <div className="todo-container">
          <input
            type="text"
            placeholder="✍️ what do you have planned today..!!"
            value={userInput}
            onChange={(event) => {
              setUserInput(event.target.value);
            }}
          />
          <span>
            <img
              onClick={handleOnclick}
              className="add-task"
              src="https://img.icons8.com/fluency/2x/plus-2-math.png"
              alt="add"
            />
          </span>
        </div>
        <div className="task-list">
          {/* <h1>todo list</h1> */}
          {todos &&
            todos.map((todo, index) => {
              return (
                <div className="todoTask" key={index}>
                  <li>{todo}</li>
                  <img
                    onClick={() => {
                      handleDelete(index);
                    }}
                    src="https://img.icons8.com/ios-glyphs/2x/delete-forever.png"
                    alt=""
                  />
                </div>
              );
            })}
        </div>
        {todos.length >= 1 && (
          <button
            className="clear-list"
            onClick={() => {
              setTodos([]);
            }}
          >
            Clear List
          </button>
        )}
      </div>
    </>
  );
};

export default Todo;
