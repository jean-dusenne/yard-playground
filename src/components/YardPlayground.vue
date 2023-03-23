<template>
  <div id="yard">
    <DockZone :layout="dropZoneLayout" slot-height="6rem" :counter="38" :start="1" dock-name="Area 001" />
    <DockZone :layout="dropZoneLayout2" slot-height="6rem" :counter="25" :start="37" dock-name="Area 002" />
    <DockZone :layout="dropZoneLayout3" slot-height="6rem" :counter="28" :start="62" dock-name="Area 003" />
    <DockZone :layout="dropZoneLayout4" slot-height="6rem" :counter="28" :start="90" dock-name="Parking" />
    <DockZone :layout="dropZoneLayout5" slot-height="25px" :counter="15" :start="131" dock-name="Vertical area" :vertical="true" />
  </div>
</template>

<script setup lang="ts">
import DockZone from './DockZone.vue';
import { ref } from 'vue';
import { DockZoneModel } from '../models/DockZoneModel';

const dropZoneLayout = ref<DockZoneModel>({ left: '5%', top: '5%', width: '94%' });
const dropZoneLayout2 = ref<DockZoneModel>({ left: '30%', top: '30%', width: '69%' });
const dropZoneLayout3 = ref<DockZoneModel>({ left: '28%', top: '50%', width: '71%' });
const dropZoneLayout4 = ref<DockZoneModel>({
  left: '20%',
  top: '75%',
  width: '71%',
  transform: 'translate(100px) rotate(4deg)',
  transformOrigin: '0 -250px'
});
const dropZoneLayout5 = ref<DockZoneModel>({ left: '5%', top: '25%', width: '5%' });
</script>

<style scoped>
div {
  position: relative;
  width: 95vw;
  height: 95vh;
  background: #c1c1c1;
}
</style>
