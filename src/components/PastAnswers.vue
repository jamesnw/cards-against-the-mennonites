<template>
  <div id='past-answers'>
    <h1 class="display-3 grey--text text--darken-1">Past answers</h1>
    <ul>
      <li
        v-for="answer in answers"
      >{{answer}}</li>
    </ul>
  </div>
</template>
<script>
import {EventBus} from './EventBus'
export default {
  name: 'past-answers',
  data: () => ({
    answers: []
  }),
  created: function () {
    var vm = this
    EventBus.$on('newResponse', function (payload){
      if(payload.question.includes('_')) {
        vm.answers.push(payload.question.replace(/_+/, ' ' + payload.answer + ' '))
      } else {
        vm.answers.push(payload.question + ' ' + payload.answer)
      }
    })
  }
}
</script>
<style scoped>
li {
  list-style-type: none;
}
</style>
