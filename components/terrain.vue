<template>
  <div>
    <canvas id="field" @click="handlerClickTerrain" />
  </div>
</template>

<script>
export default {
  name: 'Terrain',
  data () {
    return {
      canvas: null,
      canvasCtx: null,
      actualPoint: [0, 0]
    }
  },
  computed: {
  },
  mounted () {
    this.canvas = document.getElementById('field')
    this.canvas.style.width = '100%'
    this.canvas.width = '1000'
    this.canvas.height = '500'
    this.canvasCtx = this.canvas.getContext('2d')
  },
  methods: {
    handlerClickTerrain (event) {
      this.getCoordinateClick(event)
      this.drawPoint(event)
    },
    getCoordinateClick (event) {
      const x = event.offsetX * this.canvas.width / this.canvas.clientWidth
      const y = event.offsetY * this.canvas.height / this.canvas.clientHeight
      this.actualPoint = [x, y]
    },
    drawPoint (event) {
      if (this.actualPoint[0] < 20 || this.actualPoint[0] > 979 || this.actualPoint[1] < 77 || this.actualPoint[1] > 423) {
        this.canvasCtx.fillStyle = '#FF0000'
      } else {
        this.canvasCtx.fillStyle = '#71F618'
      }
      this.canvasCtx.fillRect(this.actualPoint[0] - 5, this.actualPoint[1] - 5, 10, 10)
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
