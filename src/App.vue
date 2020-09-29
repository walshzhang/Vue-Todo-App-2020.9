<template>
  <div class="todo-div">
    <todo-form />
    <todo-table />
    <todo-view-mode />
  </div>
</template>
<script>
import TodoForm from './components/TodoForm'
import TodoTable from './components/TodoTable'
import TodoViewMode from './components/TodoViewMode'

export default {
  components: { TodoForm, TodoTable, TodoViewMode}
}
</script>
<style scoped>
.todo-div {
  width: 600px;
  margin: 20px auto;
}
</style>