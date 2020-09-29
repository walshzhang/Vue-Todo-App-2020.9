<template>
  <input v-model="item" class="input" @keyup.enter="addItem"/>
</template>

<script>
import store from '../store/todo'

export default {
  data() {
    return {
      item: '',
      id: 0
    }
  },
  methods: {
    newItem() {
      return {id: this.id++, title: this.item, editing: false, done: false}
    },
    addItem() {
      store.addItem(this.newItem())
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  line-height: 40px;
  font-size: 25px;
  outline-style: none;
}
</style>
