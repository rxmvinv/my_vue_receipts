<template>
  <div class="products">
    <h1>Products</h1>
    <div v-if="products.length > 0" class="list-wrap">
      <ul>
        <li v-for="product in products" :key="product.title">
          <img  v-if="product.img.data" :src="product.img.data" :alt="product.img.data">
          <p><b>Title:</b> <router-link v-bind:to="{ name: 'Product', params: { id: product._id } }" class="title_product_link">{{ product.title }}</router-link></p>
          <p><b>Author:</b> {{ product.author }}</p>
          <p><b>Description:</b> {{ product.description }}</p>
          <p class="product-actions" v-if="!product.confirmed">
            <router-link v-bind:to="{ name: 'EditProduct', params: { id: product._id } }" class="edit_product_link">Edit</router-link>
          </p>
        </li>
      </ul>
      <div>
        <router-link v-bind:to="{ name: 'NewProduct' }" class="add_product_link">Add Product</router-link>
      </div>
    </div>
    <div v-else>
      There are no products.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'NewProduct' }" class="add_product_link">Add Product</router-link>
    </div>
    <router-link v-bind:to="{ name: 'Home' }" class="gohome-link">Go Home</router-link>
  </div>
</template>

<script>
import ProductsService from '@/services/ProductsService'
export default {
  name: 'products',
  data () {
    return {
      products: []
    }
  },
  mounted () {
    this.getProducts()
  },
  methods: {
    async getProducts () {
      const response = await ProductsService.fetchProducts()
      this.products = response.data.products
    }
  }
}
</script>
<style type="text/css">
.list-wrap {
  width: 50%;
  margin: 0 auto;
  text-align: center;
}
.list-wrap ul {
  list-style: none;
  padding: 0;
}

.list-wrap ul li {
  border-bottom: 1px #010101 solid;
  margin-bottom: 20px;
  margin-top: 20px;
  height: 200px;
}
.list-wrap ul li img {
  max-width: 200px;
  width: 100%;
  margin-bottom: 5px;
  display: inline-block;
  margin-left: auto;
  margin-right: 10px;
  float: left;
  border-radius: 5px;
}
.list-wrap ul li p {
  text-align: left;
}
.list-wrap ul li p.product-actions {
  text-align: right;
}

a.gohome-link {
  color: #fff;
  background: #42b983;
  width: 180px;
  height: 30px;
  border-radius: 5px;
  display: inline-block;
  line-height: 30px;
  margin-top: 20px;
  font-weight: bold;
}
a.add_product_link {
  background: #42b983;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  border-radius: 5px;
}
a.edit_product_link {
  background: #42b983;
  color: #fff;
  padding: 10px 10px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  border-radius: 5px;
}
a.title_product_link {
  color: #42b983;
}
@media screen and (max-width: 800px) {
  .list-wrap {
    width: 90%;
  }
}
</style>
view raw
products_with_delete.vue hosted with ❤ by GitHub
