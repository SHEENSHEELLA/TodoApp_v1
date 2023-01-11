import styles from './Todo.module.css'

function Todo({ todo, index, deleteTodo }) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <div className={styles.todoText}>{todo}</div>
    </div>
  )
}

export default Todo