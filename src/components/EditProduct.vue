<template>
  <div class="products">
    <h1>Edit Product</h1>
      <div class="form">
        <div>
          <input type="text" name="author" placeholder="AUTHOR" v-model="author">
          <input type="password" name="pass" placeholder="PASSWORD" v-model="pass">
        </div>
        <div>
          <input type="text" name="title" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div>
        <div>
          <input type="file" name="upload" accept="image/*" v-on:change="imgUploaded">
        </div>
        <div v-if="updated">{{ updated }}</div>
        <div>
          <button class="app_product_btn" @click="updateProduct">Update</button>
        </div>
        <div>
          <button class="remove_product_btn" @click="deleteProduct">Delete</button>
        </div>
      </div>
    <router-link v-bind:to="{ name: 'Products' }" class="go-back-link">Go Back</router-link>
  </div>
</template>

<script>
import ProductsService from '@/services/ProductsService'
export default {
  name: 'EditProduct',
  data () {
    return {
      title: '',
      description: '',
      img: '',
      author: '',
      pass: '',
      updated: ''
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
    },
    async updateProduct () {
      const response = await ProductsService.updateProduct({
        id: this.$route.params.id,
        title: this.title,
        description: this.description,
        img: this.img,
        author: this.author,
        pass: this.pass
      })

      this.updated = response.data.message ? response.data.message : ''
      if (this.updated) {
        console.log(this.updated)
      } else {
        this.$router.push({ name: 'Products' })
      }
    },
    imgUploaded (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.createImage(files[0])
    },
    createImage (file) {
      var reader = new FileReader()
      var vm = this

      reader.onload = (e) => {
        vm.img = e.target.result
      }
      reader.readAsDataURL(file)
    },
    async deleteProduct () {
      await ProductsService.deleteProduct(this.$route.params.id)
      // this.getProducts()
      this.$router.push({ name: 'Products' })
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
.form input[name="author"] {
  width: 240px;
  margin-right: 15px;
}
.form input[name="pass"] {
  width: 240px;
}
.form div {
  margin: 20px;
}
.app_product_btn {
  background: #42b983;
  border-radius: 5px;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
.remove_product_btn {
  background: #42b983;
  color: #fff;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding: 10px 80px;
  font-size: 12px;
  width: 520px;
  text-transform: uppercase;
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
