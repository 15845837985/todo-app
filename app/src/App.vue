<template>
  <main>
    <div class="container">
      <h1>欢迎使用Lv待办事项！</h1>
      <todo-add :tid="todos.length" @add-todo="addTodo" />
      <!-- 给todo绑定属性tid以及addTodo事件 -->
      <todo-filter :selected="filter" @change-filter="filter = $event" />
      <!-- 绑定属性selected=filter确定已选中的，绑定切换筛选选项方法 -->
      <todo-list :todos="filteredTodos" />
      <!-- 在template中vue会把filteredTodos.value自动拆解，故这里直接写filteredTodos即可 -->
      <!-- 将筛选todos展示 -->
    </div>
  </main>
</template>

<script>
import TodoAdd from "./components/TodoAdd";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import useTodos from "./composables/useTodos"
import useFilterTodos from "./composables/useFilteredTodos"


export default {
  name: "App",
  components: { TodoAdd, TodoFilter, TodoList },
  setup() {
    const { todos, addTodo } = useTodos();
    const { filter, filteredTodos } = useFilterTodos(todos);
    
    return {
      todos,
      addTodo,
      filter,
      filteredTodos,
      // setup中定义的变量和函数必须在return中返回
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}
main {
  width: 100vw;
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  background: rgb(203, 210, 240);
}
.container {
  width: 60%;
  max-width: 400px;
  box-shadow: 0px 0px 24px rgb(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: rgb(245, 246, 252);
}
h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
}
</style>

