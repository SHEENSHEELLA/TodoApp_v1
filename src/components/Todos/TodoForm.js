import { useState } from "react"

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }

  const onChangeHandler = (event) => {
    setText(event.target.value)
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input placeholder="Enter new todo" value={text} onChange={onChangeHandler} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default TodoForm