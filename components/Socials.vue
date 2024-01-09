<script setup lang="ts">
const socials = ref([
  {
    icon: 'i-ph-github-logo',
    link: 'https://github.com/foxilated/',
  },
  {
    icon: 'i-ph-linkedin-logo',
    link: 'https://www.linkedin.com/in/kwaleedkhalid/',
  },
  {
    icon: 'i-ph-instagram-logo',
    link: 'https://www.instagram.com/khaled.jsx/',
  },
  {
    icon: 'i-ph-telegram-logo',
    link: 'https://t.me/foxilated',
  },
  {
    icon: 'i-ph-whatsapp-logo',
    link: 'https://wa.me/message/6N52L7STPCUJO1',
  },
  {
    icon: 'i-ph-envelope-simple',
    link: 'mailto:hi@khaledwaleed.xyz',
  },
  {
    icon: 'i-ph-phone',
    link: 'tel:+9647838577553',
  },
])
</script>

<template>
  <div flex="~ col gap-4">
    <h2
      text="primary-text dark:primary-text-dark"
      class="duration-300"
    >
      Find me on
    </h2>

    <div flex="~ gap-4">
      <a
        v-for="link in socials"
        :key="link.link"
        :href="link.link"
        target="_blank"
        flex
      >
        <i
          :class="link.icon"
          class="duration-300 -hover:translate-y-1"
          text="2xl primary-text dark:primary-text-dark hover:primary"
        />
      </a>
    </div>
  </div>
</template>
