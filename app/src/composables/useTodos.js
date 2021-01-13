import { ref } from "vue"
export default function useTodos() {
    const todos = ref([]);
    // 通过ref创建一个空的数组储存todo
    const addTodo = (todo) => todos.value.push(todo);
    // 将新创建的todo加入todos
    return {
        todos,
        addTodo,
    };
}