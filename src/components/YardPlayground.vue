<template>
  <div>
    <DockZone :layout="dropZoneLayout" :counter="50" :start="0" />
    <DockZone :layout="dropZoneLayout2" :counter="30" :start="50" />
    <DockZone :layout="dropZoneLayout3" :counter="30" :start="80" />
  </div>
</template>

<script setup lang="ts">
import DockZone from './DockZone.vue';
import { ref } from 'vue';
import { DockZoneModel } from '../models/DockZoneModel';

const dropZoneLayout = ref<DockZoneModel>({ height: '6rem', left: '5px', top: '5%', width: '80%' });
const dropZoneLayout2 = ref<DockZoneModel>({ height: '4rem', left: '150px', top: '30%', width: '40%' });
const dropZoneLayout3 = ref<DockZoneModel>({ height: '4rem', left: '150px', top: '40%', width: '40%' });
</script>

<style scoped>
div {
  position: relative;
  width: 95vw;
  height: 95vh;
  background: #c1c1c1;
}
</style>
