<script setup lang="ts">
import { ref, useTemplateRef, onMounted } from 'vue'
import { Droppable } from '@dnd-kit/dom'
import DragDropBox from './DragDropBox.vue'

const boxes = ref(0)
const container = useTemplateRef<HTMLDivElement>('container')

onMounted(() => {
  if (container.value) {
    // container.value.addEventListener(
    //   'mouseup',
    //   () => {
    //     console.log('up!')
    //   },
    //   false
    // )
  }
})
</script>

<template>
  <div
    class="border-gray-800 border-2 w-1/6 h-1/2 rounded-md p-3 overflow-y-scroll space-y-3 scrollbar"
    ref="container"
  >
    <div
      class="w-full text-center border-2 border-gray-400 rounded-md p-1 cursor-pointer select-none"
      v-on:click="boxes++"
    >
      + item
    </div>
    <template v-for="box of boxes" v-bind:key="box">
      <DragDropBox />
    </template>
  </div>
</template>
