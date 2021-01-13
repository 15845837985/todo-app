<template>
  <div class="filters">
    <span
      class="filter"
      v-for="filter in filters"
      :key="filter.value"
      @click="$emit('change-filter', filter.value)"
      :class="{ active: selected === filter.value }"
    >
    <!-- 从filters中循环展示filter -->
    <!-- 绑定Key为filter.value -->
    <!-- 绑定点击事件，点击时切换filter，同时给选中的添加class:active（判断条件为selected === filter.value） -->
      {{ filter.label }}
    </span>
  </div>
</template>

<script>
export default {
  name: "TodoFilter",
  props: ["selected"],
  // 从父组件接收selected
  setup() {
    const filters = [
      { label: "全部", value: "all" },
      { label: "已完成", value: "done" },
      { label: "未完成", value: "todo" },
    ];
  // 创建filters为静态对象数组，数组中每个对象包括label和value，value负责判断是否选中
    return {
      filters,
    };
  },
};
</script>

<style>
.filters {
  display: flex;
  margin: 24px 2px;
  color: #c0c2ce;
  font-size: 14px;
}
.filters .filter {
  margin-right: 14px;
  transition: 0.8s;
  cursor: pointer;
}
.filters .filter.active {
  color: #6b729c;
  transform: scale(1.2);
}
</style>