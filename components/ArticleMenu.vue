<template>
    <div class="overflow-hidden pt-4">
        <section class="">
            <span v-if="children" class="header text-lg">{{data.title}}</span>
            <div class="flex flex-col">
                <RouterLink :class="classObject(child)" :to="child._path" v-for="child in children"
                    class="text-lg hover:underline" :key="child.title">{{ child.title }}</RouterLink>
            </div>
        </section>
    </div>
</template>

<script setup>

const route = useRoute()

const props = defineProps(['data'])
const children = ref()

const classObject = (child) => {
    return {
        underline: child._path == route.path,
        'text-primary': child._path == route.path
    }
}

if (props.data.children) {
    children.value = props.data.children.filter( c => c.title != props.data.title)
}

</script>
