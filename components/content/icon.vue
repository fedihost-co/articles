<script setup>
const props = defineProps(['icon', 'size'])

import * as ico from '@heroicons/vue/24/outline';

const s = ref()
s.value = 'h-6'

if(props.size) {
    s.value = 'h-' + props.size
}

</script>


<template>
        <component :is="ico[icon]" :class="s" class="inline-block" />
</template>
