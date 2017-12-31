<template>
  <div class="answer-card">
    <v-btn
      color="white"
      large
      v-on:click="click"
      >{{text}}</v-btn>
  </div>
</template>
<script>
import {EventBus} from './EventBus'
export default {
  name: "answer-card",
  props: ['text'],
  data: () => ({

  }),
  methods: {
    click() {
      EventBus.$emit('newCards', this.text)
    }
  }
}
</script>
<style scoped>
</style>
