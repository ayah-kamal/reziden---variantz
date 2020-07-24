<template>
    <div>
        <p>Hello from Xenon Widget</p>
        <span>Hello Ms {{name}} you are {{age}} years old</span>
        <h4>You have 4 siblings, their names are:</h4>

        <ul>
            <li v-for="x in siblings"> {{x}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Xenon',
    data: function(){
        return{
            name: "Ayah",
            age: "21",
            siblings: ["Yumna"," Mayar", "Ahmed", "Mohammed"]
        }
    },
    components: {

    }
}
</script>

<style scoped>
p{
    color: red;
    border: black 1px solid;
}

span{
    color: green;
    border: red 1px solid;
}
</style>