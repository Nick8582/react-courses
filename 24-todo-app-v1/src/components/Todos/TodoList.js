import Todo from "./Todo"
import styles from './TodoList.module.css'

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>} 
      {todos.map((todo, index) => <Todo todo={todo} key={index} deleteTodo={deleteTodo} index={index} />)}
    </div>
  )
}

export default TodoList