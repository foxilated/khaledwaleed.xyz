<script setup lang="ts">
const isMounted = ref(false)

onMounted(() => {
  setTimeout(() => {
    isMounted.value = true
  }, 1000)
})

const copyRight = 'CC BY-NC-SA 4.0 2019-PRESENT © Khaled Waleed'
</script>

<template>
  <Loader v-if="!isMounted" />
  <main
    v-else
    class="min-h-screen duration-300"
    bg="background dark:background-dark"
    px="6 lg:16 xxl:80"
    py="8"
    flex="~ col gap-16 xxl:justify-between"
  >
    <Header />
    <div
      flex="~ items-center"
      class="h-full xxl:mb-20"
    >
      <slot />
    </div>

    <span
      text="secondary-text dark:secondary-text-dark xs sm:sm"
      class="duration-300"
      v-text="copyRight"
    />
  </main>
</template>
