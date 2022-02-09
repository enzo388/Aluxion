<template >


 <div class="google"> <GoogleMap v-bind="this.lat1 && this.lng1"
    apiKey="AIzaSyDcy2sxb1vRwOKbIbxXH80VHraumLw2nHg"
    libraries="geometry,drawing,places"
    height="100vh"
    width="60.5vw"
    :options="{
      center: { lat:this.lat1, lng: this.lng1 },
      zoom: 14,
    }"
    :markers="[
      {
        position: {  lat:40.4098237, lng:-3.7045853 },
        title: 'Trabajo',
        draggable: false,
      },
      {
        position: {lat: this.lat1 , lng: this.lng1 } ,
        title: 'Casa',
        draggable: false,
      },
    ]"
    :polylines="[
      {
        path: [
          { lat:40.4098237, lng:-3.7045853 },
          { lat: this.lat1, lng: this.lng1},
        ],
        geodesic: true,
        strokeColor: '#ff0000',
        strokeOpacity: 1.0,
        strokeWeight: 3,
      },
    ]"
  /></div> 

</template>

<script lang="ts">
import { defineComponent } from "vue";

import { GoogleMap } from "google-map-ts-vue3"; 

export default defineComponent({
  name: "Map",
  components: {
    GoogleMap,
  },
  props: { 
    lat: Number,
    lng: Number,
  },
   data() {
    return  { 
      lat1 : this.lat, 
      lng1 : this.lng, 
    
     
    }
    
  },

});
</script>

<style>
@import "../assets/styles/styles.css";

</style>