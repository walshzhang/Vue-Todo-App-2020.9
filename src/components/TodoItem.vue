<template>
  <tr style="border-top: solid 1px lightgray;">
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

</template>

<script>
export default {
  name: 'TodoItem',
  props: ['item'],
  methods: {
    removeItem(id) {
      this.$store.removeItem(id)
    }
  }
}
</script>