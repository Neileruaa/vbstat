<template>
  <div>
    <TeamTable :liste-equipe="listEquipe" />
  </div>
</template>

<script>
import TeamTable from '../../components/teams/TeamTable'

export default {
  name: 'Index',
  components: { TeamTable },
  async asyncData ({ $axios }) {
    const { data: dataEquipes } = await $axios.get('/api/equipes/')
    console.log(dataEquipes)
    return { listEquipe: dataEquipes }
  }
}
</script>

<style scoped>

</style>
