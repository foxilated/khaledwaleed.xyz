<script setup lang="ts">
const heading = 'Khaled Waleed'
</script>

<template>
  <main
    flex="~ gap4 lg:gap12 xxl:gap16 items-center col lg:row-reverse xxl:justify-between"
    class="h-full w-full"
  >
    <img
      class="aspect-square w-full object-cover duration-300"
      w="lg:50% xxl:120"
      src="/images/khaled-waleed.jpg"
      alt="Khaled Waleed Portrait"
      border="2 transparent dark:primary-text-dark"
    >
    <div
      flex="~ col gap12 lg:gap32"
      w="lg:50% xxl:full"
    >
      <div flex="~ gap4 xxl:gap6 col">
        <h1
          class="font-bold duration-300"
          mt="4 lg:0"
          text="4xl lg:5xl xxl:6xl"
          v-text="heading"
        />

        <p
          text="secondary-text xxl:lg dark:secondary-text-dark"
          class="duration-300"
        >
          Lead Software Engineer at
          <a
            href="https://digital-logic.tech"
            target="_blank"
            class="text-secondary-text duration-300 dark:text-secondary-text-dark hover:text-primary hover:dark:text-primary-dark"
          >Digital Logic</a>, Software Engineering Team Lead at

          <a
            href="https://vitex.dev"
            target="_blank"
            class="text-secondary-text duration-300 dark:text-secondary-text-dark hover:text-primary hover:dark:text-primary-dark"
          >
            vitex.
          </a>
        </p>
      </div>
      <Socials />
    </div>
  </main>
</template>
