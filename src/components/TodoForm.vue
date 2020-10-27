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
    addItem() {
      // 异步请求
      fetch("http://localhost:8080/api/todos",
          {
            body: JSON.stringify({title: this.item}),
            method: "post",
            headers: {
              "Content-Type": "application/json"
            }
          }
      ).then(response => {
        return response.json()
      }).then(todo => {
        store.addItem(todo)
      })
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
