<script setup lang="ts">
import { useTemplateRef, onMounted, ref } from 'vue'

const box = useTemplateRef<HTMLDivElement>('box')

onMounted(() => {
  if (box.value) {
    box.value.onmousedown = (e) => {
      box.value.draggable = true
    }

    box.value.onmouseup = () => {
      box.value.draggable = false
    }

    box.value.ondragstart = (event: DragEvent) => {
      const ghostElement = document.createElement('div')

      event.dataTransfer.setDragImage(
        ghostElement,
        ghostElement.offsetWidth / 2,
        ghostElement.offsetHeight / 2
      )
    }

    // box.value.addEventListener('mousedown', (e) => {
    //   x2.value = e.clientX
    //   y2.value = e.clientY
    // })

    // box.value.addEventListener('mousemove', (e) => {
    //   x1.value = x2.value - e.clientX
    //   y1.value = y2.value - e.clientY
    //   x2.value = e.clientX
    //   y2.value = e.clientY

    //   box.value.style.top = box.value.offsetTop - y1.value + 'px'
    //   box.value.style.left = box.value.offsetLeft - x1.value + 'px'
    // })

    // box.value.addEventListener('mouseup', () => {})
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
      class="border-gray-400 rounded-md absolute top-0 -z-10 w-full h-20 border-2 border-dotted hover:border-gray-600"
    ></div>
  </div>
</template>
