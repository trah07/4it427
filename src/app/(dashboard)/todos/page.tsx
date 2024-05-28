import TodoList from '@/components/TodoList'
import { getTodos } from '@/utils/actions'

const TodosPage = async () => {
  const todos = await getTodos()
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage
