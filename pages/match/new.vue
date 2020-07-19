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
        <h4 class="title is-4">
          Equipe A
        </h4>
        <div class="select">
          <select v-model="equipeA">
            <option v-for="equipe in listEquipe" :key="equipe.id" :value="equipe.id">
              {{ equipe.nom }}
            </option>
          </select>
        </div>
      </div>
      <div class="column has-text-centered">
        <h4 class="title is-4">
          Equipe B
        </h4>
        <div class="select">
          <select v-model="equipeB">
            <option v-for="equipe in listEquipe" :key="equipe.id" :value="equipe.id">
              {{ equipe.nom }}
            </option>
          </select>
        </div>
      </div>
      <div class="column has-text-centered">
        <h4 class="title is-4">
          Salle
        </h4>
        <div class="select">
          <select v-model="salle">
            <option v-for="gymnase in listSalles" :key="gymnase.id" :value="gymnase.id">
              {{ gymnase.nom }}
            </option>
          </select>
        </div>
      </div>
      <div class="column has-text-centered">
        <h4 class="title is-4">
          Date
        </h4>
        <input v-model="dateMatch" type="date" >
      </div>
    </div>
    <nuxt-link to="/match/effectif" class="button is-success is-large is-pulled-right" @click.native="handlerValidation">
      Valider
    </nuxt-link>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'

export default {
  name: 'New',
  async asyncData ({ $axios }) {
    const { data: dataEquipes } = await $axios.get('/equipes/')
    const { data: dataSalle } = await $axios.get('/salles/')
    return { listEquipe: dataEquipes['hydra:member'], listSalles: dataSalle['hydra:member'] }
  },
  data () {
    return {
      equipeA: this.$store.state.idEquipeA,
      equipeB: this.$store.state.idEquipeB,
      salle: '',
      dateMatch: ''
    }
  },
  methods: {
    handlerValidation (event) {
      const idEquipeA = this.equipeA
      const idEquipeB = this.equipeB
      const nomEquipeA = this.listEquipe.find(item => item.id === this.equipeA).nom
      const nomEquipeB = this.listEquipe.find(item => item.id === this.equipeB).nom
      this.$store.commit('setEquipeA', { idEquipeA, nomEquipeA })
      this.$store.commit('setEquipeB', { idEquipeB, nomEquipeB })
      this.$axios.$post('/matches', {
        date: this.dateMatch,
        salle: this.salle
        // idEquipeA: idEquipeA,
        // idEquipeB: idEquipeB
      })
    }
  }
}
</script>

<style scoped>

</style>
