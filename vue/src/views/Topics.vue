<template>
  <div class="container">
    <h1>Hello world!</h1>
    <h1 v-for="(topic, idx) in allTopics" :key="idx">
      <span>
        {{idx + 1}}
      </span>
      {{topic}}

    </h1>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Topics',

   setup() {
    // store
    let $s = useStore()

    // Dispatch request to put topics in store
    $s.dispatch('WilliamKelly00.toev2.toe/QueryTopicAll', {})

    // computed
    // get all topics in store
    let allTopics = computed(() => $s.getters['WilliamKelly00.toev2.toe/getTopicAll']())

    return {
      allTopics
    }
  }
}
</script>

<style>

</style>