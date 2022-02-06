<template>

  <div class="home-cointaner">
    <ModalComponent :travel="planTravel" :infoJobs="infoUserAluxioner" v-if="modal12" /> -->
    <div class="aluxion-logo"></div>
    <div class="algocomounanav">
      <div>
        <h5 class="text-metro">metro</h5>
      </div>

      <div>
        <h5 class="text-cercanias">cercanias</h5>
      </div>

      <div>
        <h5 class="text-carsharing">carsharing</h5>
      </div>
    </div>

    <div class="div-input-search">
      <div class="div-lupa-input">
        <button type="button" class="lupa-input-button"></button>
      </div>
      <input
        type="text"
        class="input-search"
        placeholder="¿Cuál es tu parada?"
      />
      <div class="rectangle-div"></div>
    </div>

    <div class="h1-div">
      <h1 class="h1-text-webmax" >Don't be late, aluxioners</h1>
    </div>
    <Content :abrirmodal='abrirmodalHome'/>
    <button type="submit" @click="planTravel('Calle del oso', 8)">CONSEGIR DATAAA</button>
    <h1 v-if="response.length > 0">{{ response }}</h1>
     <InfoMapComponent :infoBus="paradas" v-if="verMapa"/>
  </div>
 
    
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Content from "./Content.vue";
import axios from "axios";
import ModalComponent from "./ModalComponent.vue"
import InfoMapComponent from "./InfoMapComponent.vue"
/* import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src */

export default defineComponent({
  name: "Home",
  components: {
    /*     HelloWorld, */
    Content,
   ModalComponent,
   InfoMapComponent
  },
    created(){
        this.datosApi();
        
    },
     data() {
    return {
      response: [],
      a: {},
      b: {},
      street: "",
      number: null,
      paradas: [],
      modal12 : false,
      infoUserAluxioner: null,
      verMapa: false
    };
  },
  methods: { 
    async datosApi() {
          let result = await axios.get("https://openapi.emtmadrid.es/v1/mobilitylabs/user/login/", { 
            headers: {

          "content-type": "application/json",
          "X-ApiKey": "555a6c09-dd52-42cc-b85c-35873ebd8751",
          "X-ClientId": "c7310f8e-a0f0-4c3d-a8d2-d349d9b94f49",
          passKey: "43F15FE2571B58FF9EDC24012FBDC9A94EEDD970C9E5E84A70E2E566323C032148BF886188087059324DF20950F258CE17523E01CA379D83F4DBC01578525637"

        },
        })
        this.response = result.data.data;
          
          console.log( this.response);
    },
    async planTravel(a, b) {
     
      console.log(a,b)
        const seekStops = async (a, b) => {
          if(this.response[0].accessToken){
            const accessToken = this.response[0].accessToken
            console.log("entro al if", accessToken)
             let result = await axios.get(`https://openapi.emtmadrid.es/v1/transport/busemtmad/stops/arroundstreet/${a}/${b}/400/`,{
              headers: {
                accessToken: accessToken,
              },
            })
            console.log(result.data);
            this.paradas = result.data
          }
  
            
        }
         const blabla = await seekStops(a, b)
         this.verMapa = true
        return blabla
      /*  const stopsA = await seekStops(a.street, b.number);
      const stopsB = await seekStops(a.street, b.number); */
      
    },

    async abrirmodalHome(info) {
       this.modal12 = true
       this.infoUserAluxioner = info
       console.log(info)
    }

  
  },
  
});

</script>

<style>
@import "../assets/styles/styles.css";
</style>