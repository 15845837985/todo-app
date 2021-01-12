<template>
  <div class="todo-list">
      <todo-list-item 
      v-for="todo in todos" 
      :key="todo.id" 
      :todo-item="todo"
      @change-state="todo.completed = $event.target.checked"
      ></todo-list-item>
      <!-- 从todos循环展示todo -->
      <!-- 绑定key为todo.id -->
      <!-- 绑定todoItem为todo -->
      <!-- 绑定状态改变，todo的状态=触发事件的checked -->
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem"
export default {
    name: "TodoList",
    components: { TodoListItem },
    props: ["todos"],
    // 通过props接收父组件中传过来的todos

};
</script>

<style>
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>