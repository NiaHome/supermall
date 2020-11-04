<template>
  <div v-if="Object.keys(itemParams).length !== 0">
    {{itemParams.name}}
    时间{{itemParams.created | showDate}}
  </div>
</template>

<script>
  import {formatDate} from "common/utils";

  export default {
      name: "DetailParamsInfo",
      props: {
        itemParams: {
          type: Object,
          default(){
            return {};
          }
        }
      },
      filters: {
        showDate(value) {
          const date = new Date(value * 1000)
          return formatDate(date, 'yyyy-MM-dd')
        }
      }
    }
</script>

<style scoped>

</style>
