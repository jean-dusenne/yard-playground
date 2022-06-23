<template>
  <div>
    <DockZone :layout="dropZoneLayout" slot-height="6rem" :counter="50" :start="0" dock-name="Dock 001" />
    <DockZone :layout="dropZoneLayout2" slot-height="6rem" :counter="30" :start="50" dock-name="Dock 002" />
    <DockZone :layout="dropZoneLayout3" slot-height="6rem" :counter="32" :start="80" dock-name="Dock 003" />
    <DockZone :layout="dropZoneLayout4" slot-height="7rem" :counter="20" :start="112" dock-name="Parking" />
    <DockZone :layout="dropZoneLayout5" slot-height="25px" :counter="10" :start="132" dock-name="Vertical area" :vertical="true" />
  </div>
</template>

<script setup lang="ts">
import DockZone from './DockZone.vue';
import { ref } from 'vue';
import { DockZoneModel } from '../models/DockZoneModel';

const dropZoneLayout = ref<DockZoneModel>({ left: '5%', top: '5%', width: '94%' });
const dropZoneLayout2 = ref<DockZoneModel>({ left: '30%', top: '30%', width: '69%' });
const dropZoneLayout3 = ref<DockZoneModel>({ left: '28%', top: '50%', width: '71%' });
const dropZoneLayout4 = ref<DockZoneModel>({ left: '2%', top: '30%', width: '10%' });
const dropZoneLayout5 = ref<DockZoneModel>({ left: '15%', top: '30%', width: '5%' });
</script>

<style scoped>
div {
  position: relative;
  width: 95vw;
  height: 95vh;
  background: #c1c1c1;
}
</style>
