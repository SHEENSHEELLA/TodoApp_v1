import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos }) {
  return (
    <div className={styles.todoListContainer}>
      {todos.map((todo, index) => <Todo key={index} todo={todo} />)}
    </div>
  )
}

export default TodoList