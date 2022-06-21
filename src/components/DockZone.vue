<template>
  <div class="dock-zone" :style="layoutZone">
    {{ props.dockName }}
    <div class="container" :class="{ vertical: props.vertical }">
      <div v-for="(slot, index) in slots" :key="slot.id" :class="{ occupied: isPrime(index + 1 + start) }">
        <VTooltip>
          <a>{{ slot.id }}</a>

          <template #popper>
            slot name: {{ slot.name }} <br />
            status: {{ isPrime(index + 1) ? 'occupied' : 'free' }}
          </template>
        </VTooltip>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DockZoneModel } from '../models/DockZoneModel';
import { computed } from 'vue';

const props = defineProps<{
  vertical?: boolean;
  layout: DockZoneModel;
  counter: number;
  start: number;
  dockName: string;
  slotHeight: string;
}>();

const layoutZone = computed(() => ({ ...props.layout }));

const isPrime = (n: number): boolean => {
  let start = 2;
  const limit = Math.sqrt(n);
  while (start <= limit) {
    if (n % start++ < 1) return false;
  }
  return n > 1;
};

const slots = computed(() => {
  const list: any[] = [];
  for (let i = 1; i <= props.counter; i++) {
    list.push({ id: props.start + i, name: `slot-${props.start + i}` });
  }
  return list;
});
</script>

<style scoped lang="scss">
.dock-zone {
  height: auto;
  position: absolute;
  & > .container {
    &.vertical {
      grid-template-columns: none;
    }
    &:not(.vertical) {
      grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
    }
    display: grid;

    grid-gap: 5px;

    & > div {
      cursor: pointer;
      border: 1px solid red;
      background: #fff;
      white-space: nowrap;
      height: v-bind('props.slotHeight');
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background: #d1d1d1;
        color: #fff;
      }
      &.occupied {
        background: orange;
      }
    }
  }
}
</style>
