<template>
  <div>
    <Navbar />
    <div class="section">
      <div class="container">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<style>
</style>
<script>
import Navbar from './TheNavbar'
export default {
  components: { Navbar }
}
</script>
