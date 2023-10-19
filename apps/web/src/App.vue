<template>
  <MainLayout>
    <div class="flex w-full flex-col items-center gap-12">
      <h1 class="text-6xl font-bold">Words</h1>
      <UIText text="Hello" />
      <form
        class="flex w-full max-w-sm flex-col gap-8"
        @submit.prevent="onSubmit"
      >
        <AppInput
          v-model="word"
          label="New word"
          placeholder="type something meaningful, like 'bitcoin'"
          :error-message="wordError"
        />
        <AppButton text="Save" />
      </form>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
  import { hasWordValidLength } from 'shared'
  import { UIText } from 'ui'
  import { useField, useForm } from 'vee-validate'
  import { ref } from 'vue'

  import { firebaseApi } from './api'
  import AppButton from './components/AppButton.vue'
  import AppInput from './components/AppInput.vue'
  import MainLayout from './layouts/MainLayout.vue'

  const isSaving = ref(false)

  type WordsForm = {
    word: string
  }

  const validationSchema = {
    word(value: string) {
      if (!value) return 'Type something'
      if (!hasWordValidLength(value)) return 'Characters between 4 and 16'

      return true
    }
  }

  const { handleSubmit } = useForm<WordsForm>({
    validationSchema
  })

  const { value: word, errorMessage: wordError } = useField<WordsForm['word']>(
    'word',
    undefined,
    { validateOnValueUpdate: false }
  )

  const onSubmit = handleSubmit(async (values) => {
    isSaving.value = true
    try {
      await firebaseApi.createWord(values.word)
    } catch (err) {
      // TODO: Handle error
      isSaving.value = false
    }
    word.value = ''
    isSaving.value = false
  })
</script>
