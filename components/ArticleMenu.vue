<template>
    <div class="overflow-hidden">
        <!-- <div class="divider w-full m-2 p-0"></div> -->
        <br />
        <section class="">
            <span v-if="children" class="header text-lg">{{data.title}}</span>
            <router-link :class="classObject(data)" class="text-lg text hover:underline" :to="data._path"
                v-if="!children"> {{ data.title }}</router-link>
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
