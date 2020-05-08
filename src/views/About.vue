<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{state.count}}</div>
    <div>{{double}}</div>
    <button @click="add">add</button>
  </div>
</template>
<script>
import { computed} from 'vue'
import { useStore} from 'vuex'
export default {
  setup() {
    const store = useStore()
    const state = store.state
    const double = computed(()=>{
      return state.count * 2
    })

    const add =()=>{
      store.commit("ADD")
    }
    return {
      state,
      double,
      add
    }
  }
}
</script>

<style>

</style>