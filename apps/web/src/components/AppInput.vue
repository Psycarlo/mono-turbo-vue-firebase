<template>
  <div class="flex w-full flex-col">
    <label v-if="label" class="block font-bold">
      {{ label }}
    </label>
    <div :class="{ 'mt-1': label }">
      <div class="relative rounded-md shadow-sm">
        <input
          v-model="modelValue"
          :placeholder="placeholder"
          class="block w-full rounded-md border-2 border-white bg-transparent px-3 py-3 text-white shadow-sm focus:outline-none"
        />
        <p
          v-if="errorMessage"
          class="absolute -bottom-5 left-[50%] -translate-x-[50%] text-xs font-medium text-red-500"
        >
          {{ errorMessage }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    label: {
      type: String,
      default: undefined
    },
    placeholder: {
      type: String,
      default: undefined
    },
    errorMessage: {
      type: String,
      default: undefined
    }
  })
  const modelValue = defineModel<string>()
</script>
