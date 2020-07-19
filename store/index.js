export const state = () => ({
  idEquipeA: '',
  idEquipeB: '',
  nomEquipeA: '',
  nomEquipeB: ''
})

export const mutations = {
  setEquipeA (state, { idEquipeA, nomEquipeA }) {
    state.idEquipeA = idEquipeA
    state.nomEquipeA = nomEquipeA
  },
  setEquipeB (state, { idEquipeB, nomEquipeB }) {
    state.idEquipeB = idEquipeB
    state.nomEquipeB = nomEquipeB
  }
}
