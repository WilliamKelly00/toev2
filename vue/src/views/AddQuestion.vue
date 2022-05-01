<template>
  <div>
    <div class="container">
    <h1>Add a Question:</h1>
      <form @submit.prevent="onSubmit" class="form">        
        <span class="p-float-label">
          <InputText type="text" id="question" name="question" v-model="question"></InputText>
          <label for="question">Question:</label>
        </span>

        <span class="p-float-label">
          <InputText type="text" id="parentTopic" name="parentTopic" v-model="parentTopic"></InputText>
          <label for="parentTopic">Parent Topic:</label>
        </span>

        <span class="p-float-label">
          <InputText type="text" id="opA" name="opA" v-model="opA"></InputText>
          <label for="opA">Option 1:</label>
        </span>

        <span class="p-float-label">
          <InputText type="text" id="opB" name="opB" v-model="opB"></InputText>
          <label for="opB">Option 2:</label>
        </span>

        <span class="p-float-label">
          <InputText type="text" id="opC" name="opC" v-model="opC"></InputText>
          <label for="opC">Option 3:</label>
        </span>


        <span class="p-float-label">
          <InputText type="text" id="answer" name="answer" v-model="answer"></InputText>
          <label for="answer">Answer:</label>
        </span>

        <span class="p-float-label">
          <InputText type="text" id="reward" name="reward" v-model="reward"></InputText>
          <label for="reward">Reward:</label>
        </span>

        <Button label="Submit" icon="pi pi-check" type="submit" />
    </form>
    </div>
  </div>
</template>

<script>
import sha256 from 'crypto-js/sha256'
import Base64 from 'crypto-js/enc-base64';
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'AddQuestion',

    setup() {
    // store
    let $s = useStore()

    let address = computed(() => $s.getters['common/wallet/address'])

    return {
      address,
      sendTxn: (qna) => $s.dispatch('WilliamKelly00.toev2.toe/sendMsgSubmitQna', { value: qna, fee: [], memo: ""})
    }
  },

    data(){
        return{
            question: "",
            parentTopic: "",
            opA: "",
            opB: "",
            opC: "",
            answer: "",
            reward: "",
        }
    },
    methods:{
        async onSubmit(){
            const qsh = Base64.stringify(sha256(this.question+this.answer))
            const options = [this.opA, this.opB, this.opC, this.answer]
            options.sort(() => Math.random() - 0.5)
            const tokens = this.reward + "token"

            const qna = {
                creator: this.address,
                parentTopic: this.parentTopic,
                question: this.question,
                opA: options[0],
                opB: options[1],
                opC: options[2],
                opD: options[3],
                qsh: qsh,
                reward: tokens,
            }
            
            this.sendTxn(qna)
        }
    }
}
</script>

<style>

.container{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form > * {
  margin-top: 30px;
} 


    
</style>