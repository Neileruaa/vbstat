<template>
  <div>
    <div class="level">
      <p class="level-item has-text-centered">
        <a class="link is-info">Home</a>
      </p>
      <p class="level-item has-text-centered">
        <a class="link is-info" @click.prevent="showModal = true">Faute</a>
      </p>
      <p class="level-item has-text-centered is-size-2">
        {{ score[0] }} : {{ score[1] }}
      </p>
      <p class="level-item has-text-centered">
        <a class="link is-info" @click.prevent="validerSet">Valider Set</a>
      </p>
      <p class="level-item has-text-centered">
        <a class="link is-info">Contact</a>
      </p>
    </div>
    <div>
      <canvas id="field" ref="field" @click="handlerClickTerrain" />
    </div>

    <div v-if="showModal" class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Quel joueur a fait cette action ?</p>
          <button class="delete" @click.prevent="showModal = false" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <h4 class="subtitle is-4">Joueurs équipe A</h4>
          <button v-for="joueur in joueursA" :key="joueur" @click="createPoint(joueur)" class="button is-dark">
            {{ joueur }}
          </button>
          <h4 class="subtitle is-4">Joueurs équipe B</h4>
          <button v-for="joueur in joueursB" :key="joueur" @click="createPoint(joueur)" class="button is-dark">
            {{ joueur }}
          </button>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Terrain',
  data () {
    return {
      canvas: null,
      canvasCtx: null,
      actualPoint: [0, 0],
      showModal: false,
      isChoosenPlayer: false,
      points: JSON.parse(localStorage.getItem('points')) ?? []
    }
  },
  computed: {
    joueursA () {
      return this.$store.getters.joueursTerrainA
    },
    joueursB () {
      return this.$store.getters.joueursTerrainB
    },
    score () {
      let scoreA = 0
      let scoreB = 0
      this.points.forEach((point) => {
        const { idJoueur, type } = point
        if (this.joueursA.includes(idJoueur)) {
          if (type === 'jeu') {
            scoreA++
          } else {
            scoreB++
          }
        } else if (this.joueursB.includes(idJoueur)) {
          if (type === 'jeu') {
            scoreB++
          } else {
            scoreA++
          }
        }
      })
      return [scoreA, scoreB]
    },
    isGoodBall () {
      if (this.actualPoint[0] < 20 || this.actualPoint[0] > 979 || this.actualPoint[1] < 77 || this.actualPoint[1] > 423) {
        // faute
        return false
      } else {
        return true
      }
    }
  },
  mounted () {
    this.canvas = this.$refs.field
    this.canvas.style.width = '100%'
    this.canvas.width = '1000'
    this.canvas.height = '500'
    this.canvasCtx = this.canvas.getContext('2d')
    // this.drawPoints()
  },
  methods: {
    handlerClickTerrain (event) {
      this.showModal = true
      this.getCoordinateClick(event)
      this.drawPoint(event)
    },
    createPoint (idJoueur) {
      this.points.push({ idJoueur, type: this.isGoodBall ? 'jeu' : 'faute', x: this.actualPoint[0], y: this.actualPoint[1] })
      localStorage.setItem('points', JSON.stringify(this.points))
      this.showModal = false
    },
    createFault (idJoueur) {
      this.points.push({ idJoueur, type: 'faute' })
      localStorage.setItem('points', JSON.stringify(this.points))
      this.showModal = false
    },
    getCoordinateClick (event) {
      const x = event.offsetX * this.canvas.width / this.canvas.clientWidth
      const y = event.offsetY * this.canvas.height / this.canvas.clientHeight
      this.actualPoint = [x, y]
    },
    // drawPoints () {
    //   this.points.forEach((point) => {²
    //     const { type, x, y } = point
    //     console.log(type, x, y)
    //   })
    // },
    drawPoint (event) {
      if (this.isGoodBall) {
        this.canvasCtx.fillStyle = '#71F618'
      } else {
        this.canvasCtx.fillStyle = '#FF0000'
      }
      this.canvasCtx.fillRect(this.actualPoint[0] - 5, this.actualPoint[1] - 5, 10, 10)
    },
    validerSet () {
      const pointArr = []
      this.points.forEach((point) => {
        const { idJoueur, type } = point
        pointArr.push({ type, joueur: '/api/joueurs/' + idJoueur })
      })
      this.$axios.$post('/sets', {
        numero: 0,
        scoreA: this.score[0],
        scoreB: this.score[1],
        points: pointArr,
        matchs: '/api/matches/' + this.$store.getters.idMatch
      })
    }
  }
}
</script>

<style scoped>
canvas{
  border: 1px solid #000000;
  background-image: url('~assets/volley-court.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
}
img {
  /*display: none;*/
}
</style>
