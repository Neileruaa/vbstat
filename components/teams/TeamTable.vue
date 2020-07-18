<template>
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th>Equipe</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="equipe in listeEquipe" :key="equipe.id">
        <th>
          {{ equipe.nom }}
        </th>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Table',
  props: ['listeEquipe']
}
</script>

<style scoped>

</style>
