import React, { useState } from "react";

const TodoForm = (props) => {

    const [text, setText] = useState('')
  
    const hadleChange = (event) => {
        let txt = event.target.value
        // const contentTask = document.querySelector('#teste').value
        setText(txt)
    }

    const addTask = (event) => {
      event.preventDefault()
      props.onAddTask(text)
      setText('')
    }
  
    return (
      <form className="TodoForm">
        <input id="teste" type="text" placeholder='Task' onChange={hadleChange} value={text}></input>
        <button onClick={(event) => addTask(event)}>submit</button>
      </form>
    )
  }

  export default TodoForm