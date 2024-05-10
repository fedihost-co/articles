<template>
  <main class="flex px-5 min-h-screen h-full gap-3 justify-center bg-base-100 pb-5">
    <div class="flex w-full flex-col md:flex-row h-full bg-base-100 xl:w-3/4 max-w-screen-xl ">

      <div class="hidden md:block h-screen sticky top-0">
        <ul class="menu bg-base-100 py-3 shrink rounded-sm content-center md:visible">
          <ArticleMenu v-for="item in navigation[0].children" :data="item" />
        </ul>
      </div>
      <div class="hidden md:divider md:divider-horizontal p-0 m-0"></div>

      <div class="doc flex flex-col bg-base-100 w-full rounded-sm overflow-y-scroll">
        <div class="md:hidden">
          <div class="menu px-0 bg-base-100 py-3 grid grid-cols-3 w-full">
            <ArticleMenu v-for="item in navigation[0].children" :data="item" class="flex shrink" />
          </div>
          <div class="divider m-0"></div>
        </div>
        <ContentDoc class="flex flex-col w-full py-5" />
        <!-- <div class="md:hidden">
          <div class="divider m-0"></div>
          <div class="menu px-0 bg-base-100 py-3 grid grid-cols-3 pb-32">
            <ArticleMenu v-for="item in navigation[0].children" :data="item" class="flex shrink" />
          </div>
        </div> -->
      </div>

    </div>
  </main>
</template>


<script setup>
// definePageMeta({
//     layout: 'guest'
// })

const route = useRoute()

const content = await queryContent(route.path).findOne()

useHead({
  titleTemplate: () => {
    return content ? `${content.title} - Fedihost` : 'Fedihost';
  }
})

useSeoMeta({
  title: content.title || 'fedihost',
  ogTitle: content.title || 'fedihost',
  description: content.title || "Your one stop shop for fediverse hosting!",
  ogDescription: content.title || "Your one stop shop for fediverse hosting!",
  ogImage: 'https://fedihost.co/logoSimple.png',
  twitterCard: 'summary_large_image',
})


const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())



</script>

<style scoped>

:slotted(.page) {
  @apply bg-base-100
}
</style>
