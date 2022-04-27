<template>
  <div class="container">


<!-- Modal -->
<!-- ////////////////////////////////////////////////////////// -->
        <!-- <h3>Modal</h3>
        <Button label="Show" icon="pi pi-external-link" @click="openModal" />
        <Dialog header="Header" :visible="displayModal" :style="{width: '50vw'}" :modal="true">
            <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <template #footer>
                <Button label="No" icon="pi pi-times" @click="closeModal" class="p-button-text"/>
                <Button label="Yes" icon="pi pi-check" @click="closeModal" autofocus />
            </template>
        </Dialog> -->

        <!-- <h3>Modal</h3>
        <Button label="Show" icon="pi pi-external-link" @click="openModal" />
        <Dialog :header=currentQuestion :visible="displayModal" :style="{width: '50vw'}" :modal="true">
            <h1> hello world </h1>
            <template #footer>
                <Button label="No" icon="pi pi-times" @click="closeModal" class="p-button-text"/>
                <Button label="Yes" icon="pi pi-check" @click="closeModal" autofocus />
            </template>
        </Dialog> -->



<!-- ////////////////////////////////////////////////////////// -->
<!-- Topic buttons -->
  

  <!-- <h1>{{allTopics}}</h1> -->

    <button @click="cacheQuestions"> Cache questions </button>

    <!-- <h1 v-for="(topic, idx) in allTopics.Topic" :key="idx">
      <Button :label=topic.name icon="pi pi-external-link" @click="openModal" /> 
    </h1> -->

    <!-- <div v-for="(value, key) in qnaMap" :key="key">
      {{ key }} - {{ value }}
    </div> -->

    <h1 v-for="(key, idx) in allQuestions.qna" :key="idx">
        <Button :label=key.parentTopic icon="pi pi-external-link" @click="setCurrentQuestion(key.parentTopic)" /> 
    </h1>

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



 <!-- ////////////////////////////////////////////////////////// -->
<!-- Questions -->

  <!-- <h1>{{allQuestions.qna[0]}}</h1> -->
  <!-- <h1>{{allQuestions}}</h1> -->




  <!-- <h1> hello world! </h1> -->
  <!-- <h1 v-for="(key, idx) in allQuestions.qna" :key="idx">
      <Button :label=key.parentTopic icon="pi pi-external-link" @click="openModal" /> 
  </h1> -->

    
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

    // Dispatch request to put topics in store
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

      async onSubmit(){
          const qsh = Base64.stringify(sha256(this.currentQuestion.question + this.selectedAnswer))

          const qnaAnswer = {
              qsh: qsh,
              backup: this.currentQuestion.qsh,
          }
            
          this.sendTxn(qnaAnswer)
      },

      cacheQuestions(){
        // (this.allQuestions.qna).forEach(qna => {
        //   this.qnaMap.set( qna.parentTopic , (this.qnaMap.get(qna.parentTopic) ?? []).push(qna) )
        // });
        (this.allQuestions.qna).forEach(qna => {
          this.qnaMap.set( qna.parentTopic , qna )
        });
        alert("Loaded!")
      },

      setCurrentQuestion(topic){
        // TODO: Add randomization to question fetching
        this.currentQuestion = this.qnaMap.get(topic)
        this.openModal();
      },

      setSelectedAnswer(answer){
        this.selectedAnswer = answer
      },

      submitAnswer(){
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

/* 
// What do we want to do,
// we should grab all the questions because it's likely that a user is going to answer more than one question at a time
// we can call that getter once, and if the quesitons are empty we can call it again
// We should store the questions by category
// when a user picks a topic, pick a question randomly, pop it from topic list, and display the quiz



// Should the quiz be a seperate view
//  or should it be a modal -> thinking this


// So what's this going to look like
// Getter -> all topics
// parse json and group by topic

// map each topic button to choose a question of that topic
// // HashMap<Topic, array_of_questions>
// // in topic_on_Click -> hm.get(topic)[math.random(hm.get(topic).length)]


// Modal
// container
// Question
// options
// submit -> onClick -> onSubmit from AddQuestion
*/
</style>




