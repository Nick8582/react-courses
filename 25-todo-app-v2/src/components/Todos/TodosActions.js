import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodosActions.module.css'

const TodosActions = ({resetTodos, deleteCompletedTodos, complitedTodosExist}) => {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title='Reset Todos' onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button title='Clear Complited Todos' onClick={deleteCompletedTodos} disabled={!complitedTodosExist} >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodosActions