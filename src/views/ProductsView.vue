<template>
    <div class="row">
        <template v-for= 'product in products' :key="product">
            <ProductBox v-bind="product" />
        </template>
    </div>
</template>

<script>
import axios from 'axios'
import ProductBox from '@/components/ProjectBoxComponent.vue'
// function test(){
//     console.log("hello")
// };
// test();
export default {
    components: {
        ProductBox
    },
    data() {
        return {
            products : [],
            serverPath: this.$store.state.serverPath,
        }
    },
    mounted() {
        axios.get(`${this.serverPath}/products?user_id=1`)
        .then( res => this.products = res.data)
    },
}
</script>

<style scoped>
    div.row{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 80%;
        margin: auto;
    }
</style>