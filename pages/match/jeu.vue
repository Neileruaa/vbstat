<template>
  <div>
    <section class="hero is-warning">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ nomEquipeA }} VS {{ nomEquipeB }}
          </h1>
        </div>
      </div>
    </section>
    <div class="pt-5">
      <Terrain />
    </div>
  </div>
</template>

<script>
import Terrain from '../../components/terrain'
export default {
  name: 'Jeu',
  components: { Terrain },
  computed: {
    nomEquipeA () {
      return this.$store.getters.nomEquipeA
    },
    nomEquipeB () {
      return this.$store.getters.nomEquipeB
    }
  }
}
</script>

<style scoped>

</style>
