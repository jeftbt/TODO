import type { Todo } from '../types/todo'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([])

  function addTodo(text: string) {
    todos.value.push({ id: globalThis.crypto.randomUUID() , text: text, done: false, date: new Date() })
    localStorage.setItem('todos', JSON.stringify(todos.value))
  }

  function removeTodo(id: string) {
    todos.value = todos.value.filter(t => t.id !== id)
    localStorage.setItem('todos', JSON.stringify(todos.value))
  }

  function toggleTodo(id: string) {
    const todo = todos.value.find(t => t.id === id)
    if (todo) {
      todo.done = !todo.done
      localStorage.setItem('todos', JSON.stringify(todos.value))
    }
  }

  return { 
    todos, 
    addTodo, 
    removeTodo, 
    toggleTodo 
  }
})