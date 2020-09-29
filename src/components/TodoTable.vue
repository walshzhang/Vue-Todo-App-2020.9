<template>
  <table class="mb40"
         style="line-height: 25px; border: solid 1px lightgray; width: 100%; text-align: center; margin-top: 40px; ">
    <thead>
    <tr>
      <th style="width: 30px; "><input type="checkbox"/></th>
      <th style="width: 420px; ">描述</th>
      <th style="width: 45px; ">操作</th>
    </tr>
    </thead>
    <tbody v-if="items.length > 0">
    <todo-item v-for="item in items" :key="item.id" :item="item"/>
    </tbody>
    <tbody v-else>
    <tr>
      <td colspan="2" style="border-top: solid 1px lightgray;">无数据</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  name: 'TodoTable',
  components: {TodoItem},
  computed: {
    items() {
      return this.$store.items()
    }
  }
}
</script>

<style scoped>
.mb40 {
  margin-bottom: 40px;
}
</style>