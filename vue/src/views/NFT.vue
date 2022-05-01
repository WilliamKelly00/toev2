<template>
   <div>
    <div class="container">
    <h1>Purchase an NFT:</h1>
      <form @submit.prevent="onSubmit" class="form">        
        <span class="p-float-label">
          <InputText type="text" id="link" name="link" v-model="link"></InputText>
          <label for="link">Image Link:</label>
        </span>

        <span class="p-float-label">
          <InputText type="text" id="bid" name="bid" v-model="bid"></InputText>
          <label for="bid">Bid:</label>
        </span>

        <Button label="Submit" icon="pi pi-check" type="submit" />
    </form>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'NFT',

    setup() {
    // store
    let $s = useStore()

    let address = computed(() => $s.getters['common/wallet/address'])

    return {
      address,
      sendTxn: (nft) => $s.dispatch('WilliamKelly00.toev2.toe/sendMsgBuyPic', { value: nft, fee: [], memo: ""})
    }
  },

    data(){
        return{
            link: "",
            bid: "",
        }
    },
    methods:{
        async onSubmit(){
            const nft = {
                creator: this.address,
                link: this.link,
                bid: this.bid,
            }
            
            this.sendTxn(nft)
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