
<template>    

            <div class="modal-mask" >
                                 <button  @click="showModal = false">
                                    Cerrar
                                </button>
                                <h1 class="header">
                                ¿Cual Es tu Rumbo, Aluxioner?
                                </h1>
                                <div class="modal-btn"> <button  @click="findBusCasa">
                                    Casa
                                </button>
                                 <button @click="findBusAluxion">
                                    Trabajo
                                </button>
                                </div>

            </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

 const aluxionJob = {
    street: "Calle Rafael Calvo",
    number: 18,
    lat: 40.433918,
    lng: -3.694181,
  };

export default defineComponent({
  name: "ModalComponent",
  props: {
      show1Modal: Boolean,
      travel: Function,
      infoJobs: Object,
  },
  components: {
  },
  data() {
    return {
      showModal: this.show1Modal
    }
  },
   methods: {
   async findBusCasa(info) {
       console.log("entro a la funcion")
       await this.travel(this.infoJobs.street, this.infoJobs.number)
      
    },
    async findBusAluxion(aluxionJob) {
  await this.travel(aluxionJob.street, aluxionJob.number)
    },
  },
});
</script>

<style>

    .modal-mask {
     position: absolute;
    width: 651px;
    height: 325px;
    border: solid #091E42 5px;
    justify-items: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    z-index: 555;
    background: rgb(185, 185, 185);
    border-radius:20px

}
.modal-btn{
    display: flex;
    border: solid;
    width: 62%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}



.header  {

width: 405px;
height: 67px;
font-family: SF Pro Display;
font-size: 28px;
line-height: 33px;
text-align: center;
letter-spacing: 0.02em;
color: #091E42;
border: solid 2px red
}



</style>
