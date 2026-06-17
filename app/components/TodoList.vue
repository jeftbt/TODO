<script setup lang="ts">
import { useTodoStore } from '../stores/todo'
import { formatDate } from '../utils/date'

const todoStore = useTodoStore()
</script>

<template>
  <ul>
    <li
      v-for="todo in todoStore.todos"
      :key="todo.id"
      class="flex items-center justify-between mb-2"
    >
      <div class="bg-gray-200 p-2 rounded-md flex items-center justify-between w-full gap-6">
        <label class="flex items-center w-full min-w-0 cursor-pointer">
          <input
            class="m-2 w-4 h-4  shrink-0" type="checkbox"
            :checked="todo.done"
            @change="todoStore.toggleTodo(todo.id)"
          >
          <div class="flex flex-col gap-1 flex-1 min-w-0">
            <span class="block break-words w-full" :class="{ 'line-through text-gray-400': todo.done }">
              {{ todo.text }}
            </span>
            <span v-if="todo.date" class="text-xs text-gray-500">
              ({{ formatDate(todo.date) }})
            </span>
          </div>
        </label>

        <button class="bg-red-300 rounded-md p-2 shrink-0" @click="todoStore.removeTodo(todo.id)" aria-label="Remove todo">
          <LucideTrash class="p-0.5" />
        </button>
      </div>
    </li>
  </ul>
</template>
