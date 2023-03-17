import React from "react";
import Card from "./Card"

const ListItem = (props) => {

    const CheckStatus = (props) => {
      return props.done === true ? <img alt="not-done-icon" src="https://img.icons8.com/ios-glyphs/30/null/checked--v1.png"/> : <img alt="done-icon" src="https://img.icons8.com/material-outlined/24/null/checked--v1.png"/>
    }

    return (
      <li> 

        <Card className={props.task.done ? "check card" : "card" }>
            <div className="task-text">
                {props.task.text}
            </div>

            <div className="btns">
                <button className="trash-icon" onClick={() => props.onDeleteTask(props.task.id)}>
                    <img alt="trashcan-icon" src="https://img.icons8.com/material-rounded/24/null/delete.png"/>
                </button>

                <button className="check-icon" onClick={() => props.oncheckCompletion(props.task)}>
                    <CheckStatus done={props.task.done}></CheckStatus>
                </button>   
            </div>   

        </Card>

        </li>)}
  export default ListItem
