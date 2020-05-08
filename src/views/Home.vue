<template>
  <div class="home">
    这是首页
    <div ref="root">
      {{state.cont}}
    </div>
    <div>
      {{double}}
    </div>
    <button @click="add">add</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive,computed, watch, onMounted,ref } from 'vue'
export default {
  name: 'Home',
  components: {
  },
  setup() {
    // 创建响应式数据   非基础数据类型
    const state = reactive({
      cont:1
    })

    const double = computed(() =>{
      return state.cont *2
    })
    const add = ()=>{
      state.cont ++
    }

    watch(()=>state.cont,
    value=>{
      console.log(value,'state changed');
    })
    
    // 创建响应式数据   基础数据类型
    const root = ref(null)
    onMounted(()=>{
      console.log(root,1);
      const dom = root.value
      dom.style.color="red"
    })
    return {
      state,
      add,
      double,
      root
    }
  }
}
</script>
