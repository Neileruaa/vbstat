<template>
  <div>
    <div v-for="match in listMatchs" :key="match.id">
      <pre>{{ match }}</pre>
      <h3 class="title is-3">{{ match.equipeA.nom }} VS {{ match.equipeB.nom }}</h3>
      <h4 class="subtitle is-4">{{ match.date }} - {{ match.salle.nom }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListMatchs',
  async asyncData ({ $axios }) {
    const { data: dataMatches } = await $axios.get('/matches/')
    return {
      listMatchs: dataMatches['hydra:member']
    }
  }
}
</script>

<style scoped>

</style>
