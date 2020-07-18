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
    const { data } = await $axios.get('/equipes/')
    return { listEquipe: data['hydra:member'] }
  }
}
</script>

<style scoped>

</style>
