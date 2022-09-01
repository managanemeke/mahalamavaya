<template>
  <div id="app">
    <VayaOrderDate></VayaOrderDate>
    <VayaWorkerList></VayaWorkerList>
    <VayaSectionsBlock></VayaSectionsBlock>
    <VayaCreateOrdersButton></VayaCreateOrdersButton>
  </div>
</template>

<script>
import VayaOrderDate from './components/VayaOrderDate.vue';
import VayaWorkerList from './components/VayaWorkerList.vue';
import VayaSectionsBlock from './components/VayaSectionsBlock.vue';
import VayaCreateOrdersButton from './components/VayaCreateOrdersButton.vue';

export default {
  name: 'App',
  components: {
    VayaSectionsBlock,
    VayaWorkerList,
    VayaOrderDate,
    VayaCreateOrdersButton
},
  data() {
    return {

    };
  },
}
</script>

<style>
    html, body {
        margin: 0;
        font-size: 1rem;
        font-family: "Hack", monospace;
    }
</style>
