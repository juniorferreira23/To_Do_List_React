import React from "react"
import ListItem from "./ListItem"

const TodoList = (props) => {

    const CheckStatus = (props) => {
      return props.done === true ? <img alt="not-done-icon" src="https://img.icons8.com/ios-glyphs/30/null/checked--v1.png"/> : <img alt="done-icon" src="https://img.icons8.com/material-outlined/24/null/checked--v1.png"/>
    }

    return (
      <ul className="TodoList">
        {props.tasks.map((task) => <ListItem key={task.id} task={task} onDeleteTask={props.onDeleteTask} oncheckCompletion={props.oncheckCompletion}></ListItem>)}
      </ul>
    )
  }
  export default TodoList
