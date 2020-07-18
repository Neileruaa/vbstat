export const state = () => ({
  equipeA: '',
  equipeB: ''
})

export const mutations = {
  setEquipeA (state, equipeA) {
    state.equipeA = equipeA
  },
  setEquipeB (state, equipeB) {
    state.equipeB = equipeB
  }
}
