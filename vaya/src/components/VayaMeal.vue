<template>
    <div class="mahala">
        <div class="mahalama">
            <button @click="counter += 1">+</button>
        </div>
        <div class="mahalama">
            <input class="malada" type="text"
                :value="counter"
                :data-meal-id="meal.id">
        </div>
        <div class="mahalama">
            <button @click="counter -= 1">-</button>
        </div>
        <div class="mahalama">
            {{ meal.name }}
        </div>
        <div class="mahalama">
            {{ meal.composition }}
        </div>
        <div class="mahalama">
            {{ meal.price }}
        </div>
        <div class="mahalama hatakata">
            - Название
        </div>
        <div class="mahalama hatakata">
            - Состав
        </div>
        <div class="mahalama hatakata">
            - Цена
        </div>

    </div>
</template>

<script>
    export default {
        name: "VayaMeal",
        props: {
            meal: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                counter: 0,
            }
        },
    }
</script>

<style lang="scss" scoped>
    input, button {
        background: none;
        outline: none;
        border: none;
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: inherit;
        padding: 0;
    }
    button {
        background-color: #f5f5f5;
    }
    .mahala {
        display: grid;
        grid-template-columns: 1fr 3fr 2fr;
        grid-template-rows: 1fr 3fr 1fr;
        grid-auto-flow: column;
    }
    .mahalama {
        display: flex;
        align-items: center;
        justify-content: left;
        padding: 0.5rem;
    }
    .hatakata {
        font-size: 0.75rem;
        justify-content: right;
    }
</style>