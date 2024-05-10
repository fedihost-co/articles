<script setup>
defineProps(['src'])
</script>


<template>
    <div class="flex w-full justify-center align-middle">
        <div class="h-full">
            <video :src="[src]" controls loop></video>
        </div>
    </div>
</template>

