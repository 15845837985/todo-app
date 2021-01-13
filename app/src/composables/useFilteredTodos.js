import { computed, ref } from "vue"
export default function useFilteredTodos(todos) {
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
        filter,
        filteredTodos,
        // setup中定义的变量和函数必须在return中返回
      };
}