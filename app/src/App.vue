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
import { computed, ref } from "vue";
import TodoAdd from "./components/TodoAdd";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: { TodoAdd, TodoFilter, TodoList },
  setup() {
    const todos = ref([]);
    // 通过ref创建一个空的数组储存todo
    const addTodo = (todo) => todos.value.push(todo);
    // 将新创建的todo加入todos
    const filter = ref("all");
    // 通过ref创建筛选项
    const filteredTodos = computed(() => {
      switch (filter.value) {
        case "done":
          return todos.value.filter((todo) => todo.completed);
        case "todo":
          return todos.value.filter((todo) => !todo.completed);
        default:
          return todos.value;
      }
    });
    //创建筛选todos为计算属性，通过todo的completed进行筛选

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

