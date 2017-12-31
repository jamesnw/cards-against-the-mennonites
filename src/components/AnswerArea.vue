<template>
  <div id="answer-area">
    <v-flex>
      <div class="text-xs-center">
        <v-card flat color="green">
          <v-card-text>
            <answer-card
              v-for="(text, index) in answers"
              :key="text"
              :text="text"
        		/>
          </v-card-text>
        </v-card>
      </div>
    </v-flex>
  </div>
</template>
<script>
import AnswerCard from './AnswerCard'
import {randomWhite} from '../assets/white-cards'
import {EventBus} from './EventBus'
export default {
  name: 'answer-area',
  props: ['friends'],
  data: () => ({
    answers: []
  }),
  components: {
    AnswerCard, EventBus
  },
  methods: {
    reloadAnswers() {
      var answers = []
      for (var i = 0; i < this.friends; i++) {
        answers[i] = randomWhite()
      }
      this.answers = answers;
    }
  },
  created: function() {
    this.reloadAnswers()
    var vm = this
    EventBus.$on('newCards', function(){
      vm.reloadAnswers()
    })
  },
  watch: {
    friends: function () {
      this.reloadAnswers()
    }
  }
}
</script>
<style scoped>
</style>
