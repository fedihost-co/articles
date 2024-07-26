<template>
  <div v-if="info && info.roles.includes('admin')"
  class="w-full h-12 sticky top-0 z-[20] justify-center items-center flex text-center"
  :style="{'background-color': info.env_color}">
    <span class="header text-white"> {{ info.env }} </span>
  </div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped>
.main {
  @apply flex flex-col
}

</style>


<script setup>



const route = useRoute()
useHead({
  titleTemplate: () => {
    return route.name ? `${route.name.charAt(0).toUpperCase() + route.name.slice(1) } - Fedihost`: 'Fedihost';
  },
})

useSeoMeta({
  title: route.name.charAt(0).toUpperCase() + route.name.slice(1),
  ogTitle: route.name.charAt(0).toUpperCase() + route.name.slice(1),
  description: "Your one stop shop for fediverse hosting!",
  ogDescription: "Your one stop shop for fediverse hosting!",
  ogImage: 'https://fedihost.co/logoSimpleFill.png',
  twitterCard: 'summary_large_image',
})



</script>
