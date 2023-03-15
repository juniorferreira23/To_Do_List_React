import React, { useState } from 'react';
import './style/App.css';
import Task from './model/TaskModel';
import TodoForm from './components/Todoform';
import TodoList from './components/TodoList';

const App = () => {
  
  const [tasks, setTask] = useState([])

  const onAddTask = (text) => {
    setTask([...tasks, new Task(text)])
  }

  const onDeleteTask = (taskId) => {
    const updatedList = tasks.filter( (task) => task.id !== taskId)
    setTask(updatedList)
  } 

  const oncheckCompletion = (item) => {
    const list = tasks.map((task) => {
      if(task.id === item.id){
        task.done = !task.done
      }
      return task
    })

    setTask(list)

  }

  return (
    <div className="App">
      <header><h1>Web To Do List</h1></header>
      <div className='container'>
      <TodoForm onAddTask={onAddTask}></TodoForm>
      <TodoList tasks={tasks} onDeleteTask={onDeleteTask} oncheckCompletion={oncheckCompletion}></TodoList>
      </div>
    </div>
  );
}

export default App;


