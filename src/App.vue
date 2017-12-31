<template>
  <v-app>
    <v-toolbar fixed app>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-layout row align-center>
          <v-flex offset-xs2 xs2>Number of friends:</v-flex>
          <v-flex xs5><v-slider v-model="friends" thumb-label min=1 max=10></v-slider></v-flex>
          <v-flex xs2>{{friends}}</v-flex>
        </v-layout>
        <v-layout column align-center xs8 offset-xs2 class="pb-3">
          <question-area />
        </v-layout>
        <v-layout column align-center xs8 offset-xs2>
          <answer-area :friends="friends" />
        </v-layout>
        <past-answers />
      </v-container>
    </v-content>
    <v-footer app>
      <a href="https://slklassen.com/about/cards-against-the-mennonites/">From The Drunken Mennonite</a>
    </v-footer>
  </v-app>
</template>

<script>
  import QuestionArea from './components/QuestionArea'
  import AnswerArea from './components/AnswerArea'
  import PastAnswers from './components/PastAnswers'
  export default {
    data () {
      return {
        title: 'Cards Against The Mennonites',
        friends: 5
      }
    },
    components: {
      QuestionArea,
      AnswerArea,
      PastAnswers
    }
  }
</script>
