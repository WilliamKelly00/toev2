<template>
  <div>
      <form @submit.prevent="onSubmit">
        <label for="question">question:</label><br>
        <input type="text" id="question" name="question" v-model="question"><br>
        <label for="parentTopic">parent topic:</label><br>
        <input type="text" id="parentTopic" name="parentTopic" v-model="parentTopic"><br>
        <label for="opA">option 1:</label><br>
        <input type="text" id="opA" name="opA" v-model="opA"><br>
        <label for="opB">option 2:</label><br>
        <input type="text" id="opB" name="opB" v-model="opB"><br>
        <label for="opC">option 3:</label><br>
        <input type="text" id="opC" name="opC" v-model="opC"><br>
        <label for="answer">Answer :</label><br>
        <input type="text" id="answer" name="answer" v-model="answer"><br>
        <label for="reward">Reward:</label><br>
        <input type="text" id="reward" name="reward" v-model="reward"><br>
        <button @click="calcQsh"> CalcQsh </button>
        <button type="submit">Submit</button>
        <p>
            {{question}}
        </p>
    </form>
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

</style>