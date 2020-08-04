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
    localStorage.setItem('idEquipeA', idEquipeA)
    state.nomEquipeA = nomEquipeA
    localStorage.setItem('nomEquipeA', nomEquipeA)
  },
  setEquipeB (state, { idEquipeB, nomEquipeB }) {
    state.idEquipeB = idEquipeB
    localStorage.setItem('idEquipeB', idEquipeB)
    state.nomEquipeB = nomEquipeB
    localStorage.setItem('nomEquipeB', nomEquipeB)
  },
  setMatch (state, id) {
    state.idMatch = id
    localStorage.setItem('idMatch', id)
  },
  setJoueursTerrainA (state, joueursArray) {
    state.joueursTerrainA = joueursArray
    localStorage.setItem('joueursTerrainA', JSON.stringify(joueursArray))
  },
  setJoueursTerrainB (state, joueursArray) {
    state.joueursTerrainB = joueursArray
    localStorage.setItem('joueursTerrainB', JSON.stringify(joueursArray))
  }
}

export const getters = {
  idEquipeA: (state) => {
    return (process.browser && localStorage.getItem('idEquipeA')) ?? state.idEquipeA
  },
  idEquipeB: (state) => {
    return (process.browser && localStorage.getItem('idEquipeB')) ?? state.idEquipeB
  },
  nomEquipeA: (state) => {
    return (process.browser && localStorage.getItem('nomEquipeA')) ?? state.nomEquipeA
  },
  nomEquipeB: (state) => {
    return (process.browser && localStorage.getItem('nomEquipeB')) ?? state.nomEquipeB
  },
  idMatch: (state) => {
    return (process.browser && localStorage.getItem('idMatch')) ?? state.idMatch
  },
  joueursTerrainA: (state) => {
    return (process.browser && JSON.parse(localStorage.getItem('joueursTerrainA'))) ?? state.joueursTerrainA
  },
  joueursTerrainB: (state) => {
    return (process.browser && JSON.parse(localStorage.getItem('joueursTerrainB'))) ?? state.joueursTerrainB
  }
}
