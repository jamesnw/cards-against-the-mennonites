<template>
  <div id="question-card">
    <v-flex xs12>
      <v-card color="black" class="white--text">
        <v-card-title primary-title>
          <div class="headline">{{text}}</div>
        </v-card-title>
      </v-card>
    </v-flex>
  </div>
</template>
<script>
import {randomBlack} from '../assets/black-cards'
import {EventBus} from './EventBus'
export default {
  name: "question-card",
  data: () => ({
    text: ''
  }),
  methods: {
    reloadQuestion() {
      this.text = randomBlack()
    }
  },
  created: function () {
    this.reloadQuestion()
    var vm = this
    EventBus.$on('newCards', function(answer){
      EventBus.$emit('newResponse', {answer: answer, question: vm.text})
      vm.reloadQuestion()
    })

  }
}
</script>
<style scoped>
</style>
