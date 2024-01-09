<script setup lang="ts">
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    :key="color.preference"
    :class="color.preference === 'dark' ? 'i-ph-sun-light' : 'i-ph-moon-stars'"
    text="2xl hover:primary dark:hover:primary-dark primary-text dark:primary-text-dark"
    class="duration-300"
    @click="toggleDark"
  />
</template>
