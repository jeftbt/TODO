<script setup lang="ts">
import { definePageMeta, useAddTodo } from '#imports'

definePageMeta({
  middleware: 'todo-load',
})

const { newTodo, onSubmit } = useAddTodo()
</script>

<template>
  <div class="max-w-2xl  w-full mx-auto p-5 m-5 bg-gray-100 rounded-lg  shadow-sm">
    <h1 class="text-2xl font-bold m-2 p-2 w-full ">
      Todo List
    </h1>
    <form class="mb-4 flex p-2" @submit.prevent="onSubmit">
      <input v-model="newTodo" class="p-2 border border-gray-300  w-full rounded" placeholder="Add a new todo">
      <button class="p-2 bg-blue-500 text-white rounded ml-2" type="submit">
        <LucidePlus />
      </button>
    </form>
    <TodoList />
  </div>
</template>
