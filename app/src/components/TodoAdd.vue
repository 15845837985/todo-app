<template>
        <div class="input-add">
        <input type="text" name="todo" v-model="todoContent" @keyup.enter="emitAddTodo" />
        <!-- 绑定todoContent，给键盘回车键绑定emitAddTodo事件 -->
        <button @click="emitAddTodo">
          <!-- 给按钮绑定emitAddTodo事件 -->
          <i class="plus"></i>
        </button>
      </div>
</template>

<script>
import { ref } from "vue";
export default {
    name: "TodoAdd",
    setup(props, context) {
        const todoContent = ref("");
        // 新建todoContent储存todo内容
        const emitAddTodo = () => {
          // 定义emitAddTodo函数
            const todo = {
                id: props.tid,
                content: todoContent.value,
                completed: false,
            };
            // 定义todo对象，包含id为props中的tid；内容为todoContent.value（因为todoContent为ref所以需要通过.value访问）；完成状态初始为false
            context.emit("add-todo", todo);
            // 通过context中的emit调用addTodo，其中传参为todo
            todoContent.value = "";
            // 清空todoContent
        }
        return {
            todoContent,
            emitAddTodo,
            // setup中定义的变量和函数必须在return中返回
        }
    }
}
</script>

<style>
.input-add {
  position: relative;
  display: flex;
  align-items: center;
}
.input-add input {
  padding: 16px 52px 16px 18px;
  border-radius: 48px;
  border: none;
  outline: none;
  box-shadow: 0px 0px 24px rgb(0, 0, 0, 0.08);
  width: 100%;
  font-size: 16px;
  color: #626262;
}
.input-add button {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(#c0a5f3, #7f95f7);
  border: none;
  outline: none;
  color: white;
  position: absolute;
  right: 0px;
  cursor: pointer;
}
.input-add .plus {
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
  background-size: 50% 2px, 2px 50%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
