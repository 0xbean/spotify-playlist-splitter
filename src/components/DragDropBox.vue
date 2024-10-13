<script setup lang="ts">
import { useTemplateRef, onMounted, ref } from 'vue'

const box = useTemplateRef<HTMLDivElement>('box')
const ghost = useTemplateRef<HTMLDivElement>('ghost')

onMounted(() => {
  if (box.value) {
    box.value.onmousedown = (e) => {
      box.value.draggable = true
    }

    box.value.onmouseup = () => {
      box.value.draggable = false
    }

    box.value.ondragstart = (event: DragEvent) => {
      ghost

      event.dataTransfer.setDragImage(
        ghost.value,
        ghost.value.offsetWidth / 2,
        ghost.value.offsetHeight / 2
      )
    }
  }
})
</script>

<template>
  <div class="relative">
    <div
      class="border-gray-400 rounded-md w-full h-20 border-2 hover:cursor-grab hover:border-gray-600 active:cursor-grabbing transition-all"
      ref="box"
    ></div>
    <div
      class="border-gray-400 rounded-md absolute top-0 -z-10 w-full h-20 border-2 border-dotted hover:border-gray-600 rotate-3"
      ref="ghost"
    ></div>
  </div>
</template>
