<template>
  <div>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Création d'un set</h1>
          <h2 class="subtitle">Choisissez les effectifs</h2>
        </div>
      </div>
    </section>
    <div class="columns pt-5">
      <div class="column has-text-centered">
        <h4 class="title is-4">Equipe A</h4>
        <h5 class="title is-5">{{ equipeA.nom }}</h5>
        <div class="select is-multiple">
          <select v-model="joueursA" multiple size="8">
            <option v-for="joueur in equipeA.joueurs" :value="joueur.id" :key="joueur.id">
              {{ joueur.prenom }}
            </option>
          </select>
        </div>
      </div>
      <div class="column has-text-centered">
        <h4 class="title is-4">Equipe B</h4>
        <h5 class="title is-5">{{ equipeB.nom }}</h5>
        <div class="select is-multiple">
          <select v-model="joueursB" multiple size="8">
            <option v-for="joueur in equipeB.joueurs" :value="joueur.id" :key="joueur.id">
              {{ joueur.prenom }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <nuxt-link
      event=""
      to="/match/effectif"
      class="button is-success is-large is-pulled-right"
      @click.native="handlerValidation"
    >Valider</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Effectif',
  async fetch () {
    const idEquipeA = this.$store.state.idEquipeA
    const idEquipeB = this.$store.state.idEquipeB
    const { data: equipeA } = await this.$axios.get('/equipes/' + idEquipeA)
    const { data: equipeB } = await this.$axios.get('/equipes/' + idEquipeB)
    this.equipeA = equipeA
    this.equipeB = equipeB
  },
  data () {
    return {
      equipeA: {},
      equipeB: {},
      joueursA: [],
      joueursB: []
    }
  },
  methods: {
    handlerValidation (event) {
      this.$store.commit('setJoueursTerrainA', this.joueursA)
      this.$store.commit('setJoueursTerrainB', this.joueursB)
      this.$router.push('/match/jeu')
    }
  }
}
</script>

<style scoped>

</style>
