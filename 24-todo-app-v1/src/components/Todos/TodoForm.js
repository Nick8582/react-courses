import Button from "../UI/Button"
import { useState } from "react"
import styles from './TodoForm.module.css'

const TodoForm = ({ placeholder, addTodo }) => {
  const [text, setText] = useState('')
  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input type="text" placeholder={placeholder} value={text} onChange={(e) => setText(e.target.value)} />
        <Button text="Submit" />
      </form>
    </div>
  )
}

export default TodoForm