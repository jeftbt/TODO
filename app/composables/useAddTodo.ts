import { useTodoStore } from '../stores/todo'

export const useAddTodo = () => {
  const todoStore = useTodoStore()
  const newTodo = ref('')

  function onSubmit() {
    todoStore.addTodo(newTodo.value)
    newTodo.value = ''
  }

  return {
    newTodo,
    onSubmit
  }
}