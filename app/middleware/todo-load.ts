export default defineNuxtRouteMiddleware((to, from) => {
  if (import.meta.client) {
    const todoStore = useTodoStore()
    
    if (todoStore.todos.length === 0) {
      const savedTodos = localStorage.getItem('todos')
      if (savedTodos) {
        todoStore.todos = JSON.parse(savedTodos)
      }
    }
  }
})