<script setup lang="ts">
useSeoMeta({
  title: 'Khaled Waleed',
  ogTitle: 'Khaled Waleed',
  description: `123`,
  ogDescription: `123`,
  ogImage: '/preview.jpg',
  twitterCard: 'summary_large_image'
})

const icons = ref([
  {
    name: 'ph:github-logo',
    link: 'https://github.com/foxilated/'
  },
  {
    name: 'ph:linkedin-logo',
    link: 'https://www.linkedin.com/in/foxilated/'
  },
  {
    name: 'ph:instagram-logo',
    link: 'https://www.instagram.com/khaled.jsx/'
  },
  {
    name: 'ph-telegram-logo',
    link: 'https://t.me/foxilated'
  },
  {
    name: 'ph-whatsapp-logo',
    link: 'https://wa.me/message/6N52L7STPCUJO1'
  },
  {
    name: 'ph-envelope-simple',
    link: 'mailto:hi@khaledwaleed.xyz'
  },
  {
    name: 'ph-phone',
    link: 'tel:+9647838577553'
  }
])
</script>
<template>
  <main class="flex flex-col gap-4 justify-end h-screen p-6 pb-16 xl:pb-36 xl:p-36">
    <div class="flex flex-col gap-2">
      <h1 class="text-4xl xl:text-5xl">
        Hey, I'm<span class="font-medium text-primary"> Khaled</span>
      </h1>
      <h2 class="text-lg lg:text-xl">
        I infuse websites with a living, dynamic presence<span class="blink">_</span>
      </h2>
    </div>
    <div class="self-start">
      <a
        v-for="icon in icons"
        :href="icon.link"
        target="_blank">
        <Icon :name="icon.name" />
      </a>
    </div>
  </main>
</template>
<style scoped>
.blink {
  animation: caret 1s steps(1) infinite;
}
@keyframes caret {
  50% {
    color: transparent;
  }
}
</style>
