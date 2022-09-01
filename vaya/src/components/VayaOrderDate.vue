<template>
    <input class="datada" type="text" :value="current_date">
</template>

<script>

    export default {
        name: "VayaOrderDate",
        components: {

        },
        props: {

        },
        data() {
            return {
                current_date: new Date().toJSON().slice(0,10),
            }
        },
    }
</script>

<style lang="scss" scoped>
    input, select {
        background: none;
        outline: none;
        border: none;
        width: 100%;
        font-size: inherit;
        font-family: "Hack", monospace;
        padding: 1rem;
    }

</style>