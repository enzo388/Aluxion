<template>
<div class="div-content-container-master">
  <div class="div-cointainer-title-team">
     <h4 class="team-h4">Team</h4>
    <h2 class="Aluxiones-sub-tittle">Aluxioners</h2>
  </div>
  <div class="content">
      <div
        class="card"
        v-for="user in teamUser"
        :key="user.id"
        @click="selectUser(user.houseAddress)"
      >
        <div class="rectangle"></div>
        <img :src="user.urlImage" :alt="user.altImg" />
        <h4 v-text="user.nameUser" class="Aluxion-name-h4"></h4>
         <span v-text="user.function" class="function-span"></span> -->
      </div>
  </div>
  </div>
   
</template>

<script>
import getTeamUser from "./getTeamUser";


export default {
  name: "Content",
  props: {
    abrirmodal : Function,
  },
  components: {
  },
  data() {
    return {
      teamUser: [],
    };
  },
  methods: {
   async selectUser(info) {
     this.abrirmodal(info)
     
      console.log("para de casa ", info)

      
    },
  },
  created() {
    this.teamUser = getTeamUser();
  },
};
</script>

<style>


</style>
