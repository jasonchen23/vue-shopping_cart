<template>
    <div id="items">
        <div v-for="i in 6" :key="i" class="item">
            <img src="" alt="">
            <h5> {{type}} </h5>
            <h4> {{name}} </h4>
            <h5> Price: {{price}} </h5>
        </div>
    </div>
</template>

<style>
    *{
        border: 1px solid black;
    }
    .item{
        display: flex;
    }
</style>