<template>
  <div class="container">
    <button @click="cacheQuestions"> Cache questions </button>

    <!-- Map topics from questions -->
    <h1 v-for="(key, idx) in allQuestions.qna" :key="idx">
        <Button :label=key.parentTopic icon="pi pi-external-link" @click="setCurrentQuestion(key.parentTopic)" /> 
    </h1>


    <!-- Modal for quiz -->
    <!--TODO:  Make this look better -->
    <Dialog :header=currentQuestion.parentTopic :visible="displayModal" :style="{width: '50vw'}" :modal="true">
      <h1> {{currentQuestion.question}} </h1>
      
      <Button @click="setSelectedAnswer(currentQuestion.opA)"> {{currentQuestion.opA}} </Button>
      <Button @click="setSelectedAnswer(currentQuestion.opB)"> {{currentQuestion.opB}} </Button>
      <Button @click="setSelectedAnswer(currentQuestion.opC)"> {{currentQuestion.opC}} </Button>
      <Button @click="setSelectedAnswer(currentQuestion.opD)"> {{currentQuestion.opD}} </Button>
      
      <template #footer>
          <Button label="Submit" icon="pi pi-check" @click="closeModal" autofocus />
          <!-- <Button label="Submit" icon="pi pi-check" @click="submitAnswer()" autofocus /> -->
      </template>
    </Dialog> 
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import sha256 from 'crypto-js/sha256'
import Base64 from 'crypto-js/enc-base64';

export default {
  name: 'Topics',

   setup() {
    // store
    let $s = useStore()

    // Dispatch request to put topics and questions in store
    $s.dispatch('WilliamKelly00.toev2.toe/QueryTopicAll', {})
    $s.dispatch('WilliamKelly00.toev2.toe/QueryQnaAll', {})

    // computed
    // get all topics in store
    let allTopics = computed(() => $s.getters['WilliamKelly00.toev2.toe/getTopicAll']())

    // get all the questions
    let allQuestions = computed(() => $s.getters['WilliamKelly00.toev2.toe/getQnaAll']())


    return {
      allTopics,
      allQuestions,
      sendTxn: (qnaAnswer) => $s.dispatch('WilliamKelly00.toev2.toe/sendMsgAnswerQuestion', { value: qnaAnswer, fee: [], memo: ""})
      }
    },

    data(){
      return{
        displayModal: false,
        currentQuestion: "example",
        selectedAnswer: null,
        qnaMap: new Map(),
      }
    },

    methods:{
      openModal(){
        this.displayModal = true
      },
      
      closeModal(){
        this.displayModal = false
      },

      cacheQuestions(){
        // Cache questions in a map for fast lookup

        // TODO: Change this to be done without a button
        // TODO: convert from O(2n) to O(n)
        (this.allQuestions.qna).forEach(qna => {
          this.qnaMap.set( qna.parentTopic , [] )
        });
        
        (this.allQuestions.qna).forEach(qna => {
          this.qnaMap.set( qna.parentTopic , this.qnaMap.get(qna.parentTopic).push(qna) )
        });

        alert("Loaded!")
      },

      setCurrentQuestion(topic){
        //Gets a random question from the list of questions for the given topic
        const questions = this.qnaMap.get(topic)
        const randomIndex = Math.floor(Math.random() * questions.length)
        this.currentQuestion = questions[randomIndex]
        this.openModal();
      },

      setSelectedAnswer(answer){
        this.selectedAnswer = answer
      },

      submitAnswer(){
        // Hash the answer + the question and submit the txn
        // handled by the keeper -> if qsh != question.qsh -> pay the owner, otherwise get ownership
        // Backup is required to find the correct question if the answer is wrong
        this.closeModal();

        const qsh = Base64.stringify(sha256(this.currentQuestion.question + this.selectedAnswer))

        const qnaAnswer = {
            qsh: qsh,
            backup: this.currentQuestion.qsh,
        }

        this.sendTxn(qnaAnswer)
      },


  }
}
</script>

<style scoped lang="scss">
.p-button {
    margin: 0.3rem .5rem;
    min-width: 10rem;
}

p {
    margin: 0;
}

.confirmation-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-dialog .p-button {
    min-width: 6rem;
}
</style>




