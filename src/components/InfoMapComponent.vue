<template>
  <div class="detail-container" v-if="this.infoBus">
    <div class="div-container-card-blue">
      <div class="logo-aluxion2"></div>

      <button class="volver" @click="cerrarmapa(true)">
        <strong>⬅</strong>
      </button>
      <div class="linea2"></div>

      <div class="contanerBusparadas">
        <!-- // general -->
        <div
          class="linea3"
          v-for="item in infoBus.data"
          v-bind:key="item.stopId"
        >
          <!-- // general -->

          <div
            class="cards-lines"
            v-for="elements in item.lines"
            v-bind:key="elements.line"
          >
            <h3 class="linea-div-number">Línea {{ elements.line }}</h3>
            <div
              class="cards-lines1"
              @click="imprimir(item.geometry.coordinates)"
            >
              <div class="title-card-line">
                <h3 class="stop-id-h3">{{ item.stopId }}</h3>
                <h5 class="stop-name">{{ item.stopName }}</h5>
                <h5 class="metros">Metros {{ item.metersToPoint }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="busses-near">Autobuses Cercanos</div>
      <div class="ubication" v-if="infoBus.data[0]">
        {{ infoBus.data[0].stopId }}, {{ infoBus.data[0].stopName }}
      </div>
    </div>

    <div class="div-container-card-map">
      <div class="loading-img-div" v-if="loading === false">
        <img src="../assets/loading-loader.gif" />
      </div>

      <Map
        key="1111111"
        :lat="cords.lat"
        :lng="cords.lng"
        v-if="info === true && loading === true && cords.lat > 0"
      />
    </div>
  </div>
  <div class="detail-container" v-if="infoDeStop">
    <div class="div-container-card-blue">
      <div class="logo-aluxion2"></div>
      <div class="input-search-2">
        <input type="number" class="parada" placeholder="N° de Parada" />

        <div class="lupa"></div>
        <div class="rectangle-div"></div>
      </div>
      <button class="volver" @click="cerrarmapa(true)">
        <strong>⬅</strong>
      </button>
      <div class="linea2"></div>

      <div class="contanerBusparadas">
        <!-- // general -->
        <div
          class="linea3"
          v-for="item in this.infoStops.dataLine"
          v-bind:key="item.line"
        >
          <!-- // general -->

          <div>
            <h3 class="linea-div-number">Línea {{ this.infoStops.line }}</h3>
            <div
              class="cards-lines1"
              @click="imprimir(this.infoStops.geometry.coordinates)"
            >
              <div class="title-card-line">
                <h3 class="stop-id-h3">{{ item.stop }}</h3>
                <h5 class="stop-name">{{ this.infoStops.name }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="busses-near">Autobuses Cercanos</div>
    </div>

    <div class="div-container-card-map">
      <div class="loading-img-div" v-if="loading === false">
        <img src="../assets/loading-loader.gif" />
      </div>

      <Map
        key="1111111"
        :lat="cords.lat"
        :lng="cords.lng"
        v-if="info === true && loading === true && cords.lat > 0"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Map from "./Map.vue";

export default defineComponent({
  name: "InfoMapComponent",
  props: {
    infoStops: Object,
    infoBus: Object,
    asignar2: Function,
    cerrar: Function,
  },
  components: {
    Map,
  },
  mounted() {
    if (this.infoStops.stop) {
      this.infoDeStop = true;
    }
  },
  data() {
    return {
      infoDelBus1: false,
      infoDeStop: false,
      cords: Array,
      info: false,
      loading: false,
    };
  },
  methods: {
    /*   async asignar(){
      console.log("setiando data a infoDelBus")
      this.infoDelBus = await this.infoBus.data[0]
      console.log("DATA SETIADA", this.infoDelBus)
    }, */
    async cerrarmapa(info) {
      this.info = false;
      this.loading = false;
      console.log("asdasd");
      this.cerrar(info);
    },
    async imprimir(info) {
      this.info = false;
      this.loading = false;
      console.log(info);
      this.cords = Object.values(info);
      this.cords = {
        lat: this.cords[1],
        lng: this.cords[0],
      };
      setTimeout(() => {
        this.info = true;
        this.loading = true;
      }, 1000);

      console.log(this.cords, "console.log en infomap");
    },
  },
});
</script>

<style>
@import "../assets/styles/styles.css";
</style>