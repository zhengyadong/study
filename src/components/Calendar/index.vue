<template>
  <div class="calendar" ref="el">
    <date-panel></date-panel>
  </div>
</template>

<script>
  // import Calendar from "@/components/Calendar";
import {ref,provide} from 'vue';
import dayjs from "dayjs";
import * as Children from "./children";
  export default {
    components: {...Children},
    setup() {
      const date = ref(dayjs().toDate())
      const setDate = (value) =>{
        date.value = dayjs(value).toDate()
      }
      console.log(setDate,111);

      // const displayMore = ref("date")
      // const setDisplayMore = (mode)=>{
      //   displayMore.value = mode
      // }

      // provide("displayMode", [displayMode, setDisplayMode]);
      provide("date", [date, setDate]);

      return {}     
    }

  };

</script>

<style lang="scss">

</style>
