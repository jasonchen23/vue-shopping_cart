<template>
    <div class="row">
        <template v-for= 'product in products' :key="product">
            <div class="products-box">
                <div class="image-box">
                    <img :src="parseImgPath(product.img_path)" alt="">
                </div>
                <h4><strong>{{product.brand}}</strong> <small>{{product.category}}</small> </h4> <br>
                <h3> <strong> {{product.name}} </strong></h3>
                <h5> 售價: {{product.price}}</h5>
            </div>
        </template>
        <router-view />
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            products : []
        }
    },
    mounted() {
        axios.get(`http://35.234.34.149/products?user_id=1`)
        .then( res => this.products = res.data)
    },
    methods: {
        parseImgPath: function(path) {
            return `http://35.234.34.149${path}`;
        }
    }
}
</script>

<style>
    div.row{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 80%;
        margin: auto;
    }
    div.products-box{
        border: 1px solid #888888;
        min-width: 350px;
        width: 24%;
        text-align: center;
        margin: 1px;
        cursor: pointer;
        display: block;
    }
    div.image-box{
        width: 100%;
        height: 250px;
        display: flex;
    }
    img{
        display: block;
        width: 50%;
        margin: auto;
    }
</style>