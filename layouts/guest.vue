<template>
    <div class="main bg-base-200 w-full min-h-screen">
        <div class="w-full flex justify-center bg-base-100 sticky top-0 z-20 drop-shadow-lg py-1 px-5">
            <div class="xl:w-3/4 max-w-screen-xl h-12" />
        </div>
        <slot class="h-screen flex justify-center page" />
        <div class="w-full px-5" />
    </div>
</template>

<script setup>

const route = useRoute()
definePageMeta({
    title: route.name
})


</script>
