<template>
    <div v-if="submitted">
        <select class="salaka">
            <option v-for="worker in workers"
                :key="worker.id" :worker="worker"
                :data-worker-id="worker.id">
                {{ worker.name }}
            </option>
        </select>
    </div>
</template>

<script>
    import WorkerDataService from "../services/WorkerDataService";

    export default {
        name: "VayaWorkerList",
        components: {

        },
        props: {

        },
        data() {
            return {
                workers: null,
                submitted: false,
            }
        },
        methods: {
            getAll() {
                WorkerDataService.getAll()
                .then(response => {
                    this.workers = response.data;
                    this.submitted = true;
                })
                .catch(e => {
                    console.log(e);
                });
            },
        },
        created: function() {
            this.getAll();
        },
    }
</script>

<style scoped>
    select {
        background: none;
        outline: none;
        border: none;
        width: 100%;
        font-size: inherit;
        padding: 1rem;
    }

</style>