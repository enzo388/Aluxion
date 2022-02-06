<template >
<div class="google"> <GoogleMap
    apiKey="AIzaSyDcy2sxb1vRwOKbIbxXH80VHraumLw2nHg"
    libraries="geometry,drawing,places"
    height="1000px"
    width="auto"
    :options="{
      center: { lat: 40.43387, lng:-3.69417 },
      zoom: 5,
    }"
    :markers="[
      {
        position: {  lat: 40.43387, lng:-3.69417 },
        title: 'position1',
        draggable: false,
      },
      {
        position: { lat: 37.1, lng: 139.1 },
        title: 'position2',
        draggable: false,
      },
    ]"
    :polylines="[
      {
        path: [
          { lat: 35.1, lng: 135.1 },
          { lat: 37.1, lng: 139.1 },
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
});
</script>

<style>
  .google{
    border: solid 3px red;
    width: auto;
    height: 100%;
  }
</style>