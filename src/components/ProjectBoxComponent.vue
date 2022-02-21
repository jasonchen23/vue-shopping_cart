<template>
    <div class="products-box" @click="redirectProduct(id)">
        <div class="image-box">
            <img :src="parseImgPath(img_path)">
        </div>
        <h4><strong>{{brand}}</strong> <small>{{category}}</small> </h4> <br>
        <h3> <strong> {{name}} </strong></h3>
        <h5> 售價: {{price}}</h5>
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            serverPath: this.$store.state.serverPath
        }
    },
    props: {
        'id': Number,
        'img_path': String,
        'brand': String,
        'category': String,
        'name': String,
        'price': Number,
    },
    methods: {
        parseImgPath: function(path) {
            console.log(this.serverPath);
            console.log(path); //???
            return `${this.serverPath}${path}`;
        },
        redirectProduct: function(id) {
            console.log(id)
            this.$router.push(`/products/${id}`)
        }
    }
}
</script>

<style scoped>
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