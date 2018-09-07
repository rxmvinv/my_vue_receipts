<template>
  <div class="products">
    <h1>Product</h1>
      <div class="form">
        <img  v-if="img.data" :src="img.data" :alt="img.data">
        <div>
          <p><b>Title:</b> {{ title }}</p>
        </div>
        <div>
          <p><b>Author:</b> {{ author }}</p>
        </div>
        <div>
          <p><b>Description:</b> {{ description }}</p>
        </div>
      </div>
    <router-link v-bind:to="{ name: 'Products' }" class="go-back-link">Go Back</router-link>
  </div>
</template>

<script>
import ProductsService from '@/services/ProductsService'
export default {
  name: 'OneProduct',
  data () {
    return {
      title: '',
      author: '',
      description: '',
      img: ''
    }
  },
  mounted () {
    this.getProduct()
  },
  methods: {
    async getProduct () {
      const response = await ProductsService.getProduct({
        id: this.$route.params.id
      })
      this.title = response.data.title
      this.description = response.data.description
      this.img = response.data.img
      this.author = response.data.author
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_product_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
.go-back-link {
  color: #fff;
  background: #42b983;
  width: 180px;
  height: 30px;
  border-radius: 5px;
  display: inline-block;
  line-height: 30px;
  margin-bottom: 20px;
  font-weight: bold;
}
.go-back-link:hover {
  color: #fff;
}
</style>
