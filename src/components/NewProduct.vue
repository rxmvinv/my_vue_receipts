<template>
  <div class="products">
    <h1>Add Product</h1>
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
          <button class="app_product_btn" @click="addProduct">Add</button>
        </div>
      </div>
    <router-link v-bind:to="{ name: 'Products' }" class="go-back-link">Go Back</router-link>
  </div>
</template>

<script>
import ProductsService from '@/services/ProductsService'
export default {
  name: 'NewProduct',
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
  methods: {
    async addProduct () {
      if (this.title && this.description && this.img && this.author && this.pass) {
        this.updated = ''
        await ProductsService.addProduct({
          title: this.title,
          description: this.description,
          img: this.img,
          author: this.author,
          pass: this.pass
        })
        this.$router.push({ name: 'Products' })
      } else {
        this.updated = 'All fields required'
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
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  max-width: 500px;
  width: 100%;
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
@media screen and (max-width: 553px) {
  .form input[name="author"] {
    width: 100%;
    max-width: 500px;
    margin: auto;
    margin-bottom: 20px;
  }
  .form input[name="pass"] {
    width: 100%;
    max-width: 500px;
    margin: auto;
  }
}
</style>
