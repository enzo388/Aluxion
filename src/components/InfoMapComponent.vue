<template>
  <div class="detail-container">
        <div class="div-container-card-blue">
            <div class="logo-aluxion2"></div>
            <div class="input-search-2">
                <input type="text" class="parada" placeholder="Parada"/>
                <div class="lupa"></div>
                <div class="rectangle-div"></div>
            </div>
            <div class="linea2">
            </div>
            <div class="contanerBusparadas">
                    <div class="linea3" v-for="item in infoBus.data" v-bind:key="item.stopId">
                        <content>
                             <h2  >{{item.stopId}}</h2>
                        <h4  >{{item.stopName}}</h4>
                        </content>
                     
                    </div>
                   
            </div>
           
            <div class="busses-near">Autobuses Cercanos </div>
            <div class="ubication" v-if="infoBus.data[0]"> {{infoBus.data[0].stopId}}, {{infoBus.data[0].stopName}}</div>
            <div class="group1">{{infoBus.data[0].stopId}}</div>
            <div class="group2">{{infoBus.data[0].stopId}}</div>
        </div>
        <div class="div-container-card-map"><Map /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Map from "./Map.vue";

export default defineComponent({
  name: "InfoMapComponent",
  props: {
    infoBus: Object,
    asignar2: Function
  },
  mounted(){
    this.asignar()
    console.log(this.infoBus.data[0], "INFO BUS")
  },
  components: {
    Map,
  },
  data() {
    return  { 
      infoDelBus : false
    }
    
  },
  methods: {
    asignar(){
      this.infoDelBus = this.infoBus.data[0]
      console.log(this.infoDelBus, "SDASDASDASD")
    },
  }
});
</script>

<style>
    @import "../assets/styles/styles.css";
</style>