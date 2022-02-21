<template>
  <nav>
    <router-link to="/products">商品清單</router-link> | 
    <router-link to="/checkout">結帳(共有 {{amount}} 個商品)</router-link>
  </nav>
</template>
<script>
export default {
    computed: {
        amount() {
            return this.$store.getters.currentQuantity
        }
    }
}
</script>

<style>
    nav {
    padding: 30px;
    text-align: center;
    background: rgb(73, 113, 224);
    }

    nav a {
    font-weight: bold;
    color: #2c3e50;
    }

    nav a.router-link-exact-active {
    color: #d4d4d4;
    }
</style>