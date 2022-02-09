
<template>
  <div class="Modal-cointainer">
    <div class="modal-mask">
      <button @click="cerrarmodal1" class="btns-modal1">Cerrar</button>
      <h1 class="header">¿Cual Es tu Rumbo, Aluxioner?</h1>
      <div class="modal-btn">
        <button @click="findBusCasa" class="btns-modal1">Casa</button>
        <button @click="findBusAluxion" class="btns-modal1">Trabajo</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalComponent",
  props: {
    show1Modal: Boolean,
    travel: Function,
    infoJobs: Object,
    cerrarmodal: Function,
  },
  components: {},
  data() {
    return {
      showModal: this.show1Modal,
    };
  },
  methods: {
    async findBusCasa(info) {
      this.cerrarmodal();
      await this.travel(this.infoJobs.street, this.infoJobs.number);
    },
    async findBusAluxion(info) {
      const aluxionJob = {
        street: "Calle Rafael Calvo",
        number: 18,
        lat: 40.433918,
        lng: -3.694181,
      };
      this.cerrarmodal();
      await this.travel(aluxionJob.street, aluxionJob.number);
    },
    async cerrarmodal1() {
      this.cerrarmodal();
    },
  },
});
</script>

<style>
@import "../assets/styles/styles.css";

</style>
