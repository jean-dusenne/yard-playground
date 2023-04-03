<template>
  <div class="dock-zone" :style="layoutZone">
    {{ props.dockName }}
    <div class="container" :class="{ vertical: props.vertical }">
      <div v-for="(dock, index) in docks" :key="dock.id" :class="{ taken: isPrime(index + start) }">
        <VTooltip :triggers="smAndLarger ? ['click', 'hover'] : ['click', 'focus']">
          <a>{{ dock.id }}</a>
          <template #popper>
            Dock name: {{ dock.name }} <br />
            status: {{ isPrime(index + start) ? 'taken' : 'free' }}
          </template>
        </VTooltip>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DockZoneModel } from '../models/DockZoneModel';
import { computed } from 'vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);

const smAndLarger = breakpoints.greater('sm');

const props = defineProps<{
  vertical?: boolean;
  layout: DockZoneModel;
  counter: number;
  start: number;
  dockName: string;
  itemHeight: string;
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

const docks = computed(() => {
  const list: Record<string, string | number>[] = [];
  for (let i = 0; i <= props.counter; i++) {
    list.push({ id: props.start + i, name: `dock-${props.start + i}` });
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
      height: v-bind('props.itemHeight');
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background: #d1d1d1;
        color: #fff;
      }
      &.taken {
        background: orange;
      }
    }
  }
}
</style>
