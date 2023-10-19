<template>
  <button
    type="submit"
    class="h-12 w-full rounded-md bg-white py-3 font-bold text-blue-950 shadow-sm transition-colors duration-300 hover:bg-gray-200"
    @click="$emit('button-click')"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
  defineProps({
    text: {
      type: String,
      required: true
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  })
  defineEmits<{
    'button-click': []
  }>()
</script>
