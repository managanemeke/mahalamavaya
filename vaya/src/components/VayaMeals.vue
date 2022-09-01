<template>
    <div>
        <VayaMeal v-for="meal in meals"
            :key="meal.name" :meal="meal">
            </VayaMeal>
    </div>
</template>

<script>
import VayaMeal from './VayaMeal.vue';

    export default {
        name: "VayaMeals",
        components: {
            VayaMeal,
        },
        props: {
            meals: {
                type: Array,
                required: true,
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>