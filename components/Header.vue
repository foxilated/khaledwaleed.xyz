<script setup lang="ts">
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <header flex="~ items-center justify-between">
    <Logo class="h10 w10" />

    <button
      :class="color.preference === 'dark' ? 'i-ph-sun-light' : 'i-ph-cloud-moon'"
      text="2xl primary-text dark:primary-text-dark"
      @click="toggleDark"
    />
  </header>
</template>
