<template>
  <div class="dock-zone" :style="style">
    <div v-for="slot in slots" :key="slot.id">{{ slot.id }}</div>
  </div>
</template>

<script lang="ts" setup>
import { DockZoneModel } from '../models/DockZoneModel';
import { computed } from 'vue';

const props = defineProps<{ layout: DockZoneModel; counter: number; start: number }>();

const style = computed(() => ({ ...props.layout }));

const slots = computed(() => {
  const list: any[] = [];
  for (let i = 1; i <= props.counter; i++) {
    list.push({ id: props.start + i, name: `slot-start-${i}` });
  }
  return list;
});
</script>

<style scoped lang="scss">
.dock-zone {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
  grid-gap: 5px;

  div {
    cursor: pointer;
    border: 1px solid red;
    background: #fff;
    white-space: nowrap;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background: #000;
      color: #fff;
    }
  }
}
</style>
