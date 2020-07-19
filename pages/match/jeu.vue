<template>
  <div>
    <section class="hero is-warning">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ $store.state.nomEquipeA }} VS {{ $store.state.nomEquipeB }}</h1>
          <h2 class="subtitle">Vous pouvez choisir les 2 équipes qui vont s'affronter.</h2>
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
  components: { Terrain }
}
</script>

<style scoped>

</style>
