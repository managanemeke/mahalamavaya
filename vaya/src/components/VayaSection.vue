<template>
    <div class="tamasa">
        <div class="tamasama">{{ section.name }}</div>
        <div v-if="submitted">
            <VayaMeals :meals="meals"></VayaMeals>
        </div>
    </div>
</template>

<script>
    import MealDataService from "../services/MealDataService";
    import VayaMeals from './VayaMeals.vue';
    //
    export default {
        name: "VayaSection",
        components: {
            VayaMeals,
        },
        props: {
            section: {
                type: Object,
                required: true,
            },
        },
        data() {
            return {
                meals: null,
                submitted: false,
            };
        },
        methods: {
            findMeals() {
                MealDataService.findBySectionId(this.section.id)
                .then(response => {
                    this.meals = response.data;
                    this.submitted = true;
                })
                .catch(e => {
                    console.log(e);
                });
            },
        },
        created: function() {
            console.log("onBeforeMount");
            this.findMeals();

        },
    }
    //
</script>

<style scoped>
    .tamasama {
        display: flex;
        flex-direction: center;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background-color: #f5f5f5;
    }
</style>