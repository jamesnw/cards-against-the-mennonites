<template>
  <div id="question-area">
    <v-layout row wrap>
      <question-card />
    </v-layout>
  </div>
</template>
<script>
import QuestionCard from './QuestionCard'
export default {
  name: "question-area",
  data: () => ({

  }),
  components: {
    QuestionCard
  }
}
</script>
<style scoped>
</style>
