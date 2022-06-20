<template>
  <div>
    <DockZone :layout="dropZoneLayout" :counter="50" :start="0" />
    <DockZone :layout="dropZoneLayout2" :counter="30" :start="50" />
    <DockZone :layout="dropZoneLayout3" :counter="30" :start="80" />
    <DockZone :layout="dropZoneLayout4" :counter="20" :start="110" />
  </div>
</template>

<script setup lang="ts">
import DockZone from './DockZone.vue';
import { ref } from 'vue';
import { DockZoneModel } from '../models/DockZoneModel';

const dropZoneLayout = ref<DockZoneModel>({ height: '6rem', left: '5%', top: '5%', width: '94%' });
const dropZoneLayout2 = ref<DockZoneModel>({ height: '4rem', left: '30%', top: '30%', width: '69%' });
const dropZoneLayout3 = ref<DockZoneModel>({ height: '4rem', left: '30%', top: '40%', width: '69%' });
const dropZoneLayout4 = ref<DockZoneModel>({ height: '4.4rem', left: '5%', top: '20%', width: '10%' });
</script>

<style scoped>
div {
  position: relative;
  width: 95vw;
  height: 95vh;
  background: #c1c1c1;
}
</style>
