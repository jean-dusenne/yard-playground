<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import YardPlayground from './components/YardPlayground.vue';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const domScreenshot = () => {
  html2canvas(document.querySelector('#yard')!).then(canvas => {
    canvas.toBlob(blob => saveAs(blob as Blob, 'yard-management.png'));
  });
};
</script>

<template>
  <YardPlayground />

  <button @click="domScreenshot">Save yard management</button>
</template>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}
button {
  margin-top: 10px;
}
</style>
