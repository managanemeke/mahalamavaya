<template>
    <button @click="createOrders()">
        Заказать
    </button>
</template>

<script>
    import OrderDataService from "../services/OrderDataService";

    export default {
        name: "VayaCreateOrdersButton",
        components: {

        },
        props: {

        },
        methods: {
            createOrders() {
                let date = document.querySelector(".datada").value;
                let salaka = document.querySelector(".salaka");
                salaka = salaka.selectedOptions[0];
                let worker_id = salaka.dataset.workerId;
                let malada = document.querySelectorAll(".malada");
                let meal_id = null;
                let va = 0;
                for(let na of malada) {
                    meal_id = na.dataset.mealId;
                    let data = this.getDataFromAttr(date,worker_id,meal_id);
                    let ga = parseInt(na.value);
                    for(let ka = 0; ka<ga; ka++) {
                        this.createOrder(data);
                        va++;
                    }
                }
                if(va > 0) {
                    alert("Заказано блюд: "+va+" (вроде)!");
                }
            },
            getDataFromAttr(date,worker_id,meal_id) {
                const ma = JSON.stringify({
                    "date": date,
                    "worker_id": worker_id,
                    "meal_id": meal_id,
                });
                return(ma);
            },
            createOrder(data) {
                OrderDataService.create(data)
                .then(response => {
                    let resp = response.data;
                    console.log(resp);
                })
                .catch(e => {
                    console.log(e);
                });
            },

        },
        data() {
            return {
            }
        },
    }
</script>

<style scoped>
    button {
        background: none;
        outline: none;
        border: none;
        width: 100%;
        font-size: inherit;
        font-family: "Hack", monospace;
        padding: 1rem;
        background-color: #f5f5f5;
    }

</style>