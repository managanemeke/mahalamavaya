<template>
    <div class="bakala">
        <VayaSection v-for="section in sections"
            :key="section.name" :section="section">
        </VayaSection>
    </div>
</template>

<script>
    import VayaSection from './VayaSection.vue';
    //
    export default {
        name: "VayaSections",
        components: {
            VayaSection,
        },
        props: {
            sections: {
                type: Array,
                required: true,
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>