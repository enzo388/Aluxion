<template>
<div class="div-content-container-master" v-if="teamUser">
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
     console.log("Datos Obtenidos Del Usuario:", info)
     console.log("enviando datos de usuario al Moldal")
     this.abrirmodal(info)
    },
  },
  async created() {
    this.teamUser = await getTeamUser();
    console.log("TeamUser Creado" , this.teamUser)
  },
};
</script>

<style>

@import "../assets/styles/styles.css";
</style>
