<template>
  <div class="hello">
    <img class="main-logo" src="../assets/food.png">
    <h1>{{ msg }}</h1>
    <p>{{ aboutApp }}</p>
    <router-link v-bind:to="{ name: 'Products' }" class="goto-products-link">Go To Products</router-link>
    <div>Graphic materials are taken from Freepik <a href="http://www.freepik.com">Designed by Freepik</a></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Simple Products Box',
      aboutApp: 'It\'s a basic app for demonstration of my possibility to work with Vue with so called MEVN stack. It would be updated in advance.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
a.goto-products-link {
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
img.main-logo {
  max-width: 800px;
  width: 100%;
}
</style>
