export const state = () => ({
  idEquipeA: '',
  idEquipeB: '',
  nomEquipeA: '',
  nomEquipeB: '',
  idMatch: '',
  joueursTerrainA: [],
  joueursTerrainB: []
})

export const mutations = {
  setEquipeA (state, { idEquipeA, nomEquipeA }) {
    state.idEquipeA = idEquipeA
    state.nomEquipeA = nomEquipeA
  },
  setEquipeB (state, { idEquipeB, nomEquipeB }) {
    state.idEquipeB = idEquipeB
    state.nomEquipeB = nomEquipeB
  },
  setMatch (state, id) {
    state.idMatch = id
  },
  setJoueursTerrainA (state, joueursArray) {
    state.joueursTerrainA = joueursArray
  },
  setJoueursTerrainB (state, joueursArray) {
    state.joueursTerrainB = joueursArray
  }
}
