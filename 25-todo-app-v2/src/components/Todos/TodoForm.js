import { useState } from "react"
import Button from "../UI/Button"
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
        <Button title="Submit" type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default TodoForm