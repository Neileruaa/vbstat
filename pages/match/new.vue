<template>
  <div>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Création d'un match
          </h1>
          <h2 class="subtitle">
            Vous pouvez choisir les 2 équipes qui vont s'affronter.
          </h2>
        </div>
      </div>
    </section>
    <div class="columns pt-5">
      <div class="column has-text-centered">
        <h4 class="title is-4">Equipe A</h4>
        <div class="select">
          <select v-model="equipeA">
            <option v-for="equipe in listEquipe" :key="equipe.id" :value="equipe.id">
              {{ equipe.nom }}
            </option>
          </select>
        </div>
      </div>
      <div class="column has-text-centered">
        <h4 class="title is-4">Equipe B</h4>
        <div class="select">
          <select v-model="equipeB">
            <option v-for="equipe in listEquipe" :key="equipe.id" :value="equipe.id">
              {{ equipe.nom }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <nuxt-link to="/" @click.native="handlerValidation" class="button is-success is-large is-pulled-right">
      Valider
    </nuxt-link>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'

export default {
  name: 'New',
  async asyncData ({ $axios }) {
    const { data } = await $axios.get('/equipes/')
    return { listEquipe: data['hydra:member'] }
  },
  data () {
    return {
      equipeA: this.$store.state.equipeA,
      equipeB: this.$store.state.equipeB
    }
  },
  methods: {
    handlerValidation (event) {
      this.$store.commit('setEquipeA', this.equipeA)
      this.$store.commit('setEquipeB', this.equipeB)
    }
  }
}
</script>

<style scoped>

</style>
