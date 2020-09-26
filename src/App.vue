<template>
  <div class="todo-div">
    <input v-model="item" class="input" @keyup.enter="addItem"/>
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
      <tr v-for="item in itemsInTable" v-bind:key="item.id" style="border-top: solid 1px lightgray;">
        <td style="border-top: solid 1px lightgray;">
          <input type="checkbox" v-model="item.done"/>
        </td>
        <td style="border-top: solid 1px lightgray;" v-on:dblclick="item.editable = true" @dblclick="item.editing = true">
          <input v-model="item.title" v-if="item.editing" v-on:focusout="item.editing = false"/>
          <span v-else :style="item.done ?  {textDecoration: 'line-through'} : '' ">
            {{ item.title }}
          </span>
        </td>
        <td style="border-top: solid 1px lightgray;">
          <button @click="() => removeItem(item.id)">删除</button>
        </td>
      </tr>
      </tbody>
      <tbody v-else>
      <tr>
        <td colspan="3" style="border-top: solid 1px lightgray;">无数据</td>
      </tr>
      </tbody>
    </table>
    <input type="radio" v-model="mode" value="all" /><label>查看所有</label>
    <input type="radio" v-model="mode" value="done"/><label>查看已完成</label>
    <input type="radio" v-model="mode" value="undone"/><label>查看未完成</label>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: '',
      items: [], // {id: 1, title: '描述', done: false}
      modes: [
          'all', 'undone', 'done'
      ],
      mode: 'all'
    }
  },
  computed: {
    newItem() {
      return {id: this.items.length + 1, title: this.item, editing: false, done: false}
    },
    itemsInTable() {
      switch (this.mode) {
        case "all": return this.items;
        case 'undone': return this.items.filter(item => !item.done)
        default: return this.items.filter(item => item.done)
      }
    }
  },
  methods: {
    addItem() {
      this.items.push(this.newItem)
      this.item = ''
    },
    removeItem(id) {
      this.items = this.items.filter(item => item.id !== id)
    }
  }
}
</script>
<style>
.todo-div {
  width: 600px;
  margin: 20px auto;
}

.input {
  width: 540px;
  line-height: 40px;
  font-size: 25px;
  outline-style: none;

}

.mb40 {
  margin-bottom: 40px;
}
</style>