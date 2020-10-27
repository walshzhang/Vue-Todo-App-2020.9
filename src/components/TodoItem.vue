<template>
  <tr style="border-top: solid 1px lightgray;">
    <td style="border-top: solid 1px lightgray;">
      <input type="checkbox" v-model="item.done" @change="toggle"/>
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

</template>

<script>
export default {
  name: 'TodoItem',
  props: ['item'],
  methods: {
    removeItem(id) {
      fetch("http://localhost:8080/api/todos/" + id, {
        method: 'delete'
      }).then(
          () => this.$store.removeItem(id)
      )
    },
    toggle() {
      fetch(`http://localhost:8080/api/todos/${this.item.id}/toggle`, {
        method: 'put'
      })
    }
  }
}
</script>