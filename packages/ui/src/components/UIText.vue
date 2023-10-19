<template>
  <p class="ui-text-2xl">{{ text }}</p>
</template>

<script setup lang="ts">
  defineProps({
    text: {
      type: String,
      required: true
    }
  })
</script>
