<script setup lang="ts">
import { ref, computed, useTemplateRef } from 'vue'
import DragDropContainer from '@/components/DragDropContainer.vue'
</script>

<template>
  <div class="w-screen h-screen">
    <div class="w-full h-full p-3 flex justify-center items-center space-x-3">
      <DragDropContainer />
      <DragDropContainer />
      <DragDropContainer />
      <DragDropContainer />
      <DragDropContainer />
    </div>
  </div>
</template>
