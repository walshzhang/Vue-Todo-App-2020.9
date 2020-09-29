<template>
  <div>
    <input type="radio" v-model="mode" value="all" @change="changeMode"/><label>查看所有</label>
    <input type="radio" v-model="mode" value="done" @change="changeMode"/><label>查看已完成</label>
    <input type="radio" v-model="mode" value="undone" @change="changeMode"/><label>查看未完成</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: 'all'
    }
  },
  methods: {
    changeMode() {
      this.$store.setMode(this.mode)
    }
  }
}
</script>