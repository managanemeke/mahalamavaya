<template>
    <input class="datada" type="text" :value="current_date">
</template>

<script>

function addDays(date, days) {
  let ra = new Date(date);
  ra.setDate(ra.getDate() + days);
  return(ra);
}
function getTomorrow() {
    let today = new Date();
    let tomorrow = addDays(today,1);
    return(tomorrow);
}
function dateToString(date) {
    let ra = date.toJSON().slice(0,10);
    return(ra);
}
function getTomorrowString() {
    let ta = getTomorrow();
    let ra = dateToString(ta);
    return(ra);
}

    export default {
        name: "VayaOrderDate",
        components: {

        },
        props: {

        },
        data() {
            return {
                current_date: getTomorrowString(),
            }
        },
    }
</script>

<style scoped>
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