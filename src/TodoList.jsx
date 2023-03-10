import React from "react"

const TodoList = (props) => {

    const CheckStatus = (props) => {
      return props.done === true ? <img alt="not-done-icon" src="https://img.icons8.com/ios-glyphs/30/null/checked--v1.png"/> : <img alt="done-icon" src="https://img.icons8.com/material-outlined/24/null/checked--v1.png"/>
    }

    return (
      <ul className="TodoList">
        {props.tasks.map((task) => <li key={task.id}>{task.text}

            <button className="trash-icon" onClick={() => props.onDeleteTask(task.id)}>
              <img alt="trashcan-icon" src="https://img.icons8.com/material-rounded/24/null/delete.png"/>
            </button>

            <button className="check-icon" onClick={() => props.oncheckCompletion(task)}>
              <CheckStatus done={task.done}></CheckStatus>
            </button>                

          </li>)}
      </ul>
    )
  }
  export default TodoList
