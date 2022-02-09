<template>
  <div class="home-cointaner" v-if="loading && !loadingSearchPlanTravel">
    <ModalComponent
      key="modal-component"
      :cerrarmodal="cerrarmodalHome"
      :travel="planTravel"
      :infoJobs="infoUserAluxioner"
      v-if="modal12 && tokenObtenido"
    />

    <div class="algocomounanav">
      <div class="menu-div-nav">
        <h5 class="text-metro">metro</h5>
        <h5 class="text-metro">cercanias</h5>
        <h5 class="text-metro">carsharing</h5>
      </div>
    </div>

    <div class="div-input-search">
      <div class="div-lupa-input">
        <button
          v-on:click="getStopsbyId(true)"
          class="lupa-input-button"
        ></button>
      </div>

      <input
        required
        type="number"
        class="input-search"
        placeholder="¿N° De Parada?"
        v-model="input"
      />

      <div class="rectangle-div"></div>
    </div>

    <div class="h1-div">
      <div class="aluxion-logo"></div>
      <h1 class="h1-text-webmax">Don't be late, aluxioners</h1>
    </div>
    <Content :abrirmodal="abrirmodalHome" />

    <InfoMapComponent
      key="1"
      :infoBus="paradas"
      :infoStops="paradas1"
      :cerrar="cerrarMapa"
      v-if="verMapa"
    />
    <InfoMapComponent
      key="3"
      :infoStops="paradas1"
      :cerrar="cerrarMapa"
      v-if="verMapaInfoStops"
    />
  </div>
  <div class="loading" v-if="!loading">
    <div class="loading-img-div">
      <h1 class="h1-text-loading" v-if="!errorToken">
        Conectando... Por favor Espere...
      </h1>
      <h1 class="h1-text-errorToken" v-if="errorToken">
        FUERA DE SERVICIO. VUELVA MÁS TARDE.
      </h1>
      <img src="../assets/loading-loader.gif" />
    </div>
  </div>
  <div class="loading" v-if="loadingSearchPlanTravel">
    <div class="loading-img-div">
      <h1 class="h1-text-loading" v-if="!errorTravel">
        Conectando... Por favor Espere...
      </h1>
      <h1 class="h1-text-errorToken" v-if="errorTravel">
        FUERA DE SERVICIO. Usted sera Redirigido en 3 Segundos.
      </h1>
      <h1 class="h1-text-errorToken" v-if="errorTravelstops">
        No existe la parada {{ stopId }}. Usted sera Redirigido en 3 Segundos.
      </h1>
      <img src="../assets/loading-loader.gif" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Content from "./Content.vue";
import axios from "axios";
import ModalComponent from "./ModalComponent.vue";
import InfoMapComponent from "./InfoMapComponent.vue";
/* import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src */

export default defineComponent({
  name: "Home",
  components: {
    /*     HelloWorld, */
    Content,
    ModalComponent,
    InfoMapComponent,
  },
  async created() {
    this.tokenObtenido = await this.datosApi();
    if (this.tokenObtenido) {
      
        setTimeout(() => {
          this.loading = true;
        }, 1000)
      
    } else {
      
      this.errorToken = true;
    }
  },

  data() {
    return {
      response: [],
      a: {},
      b: {},
      stopId: null,
      street: "",
      number: null,
      paradas: [],
      paradas1: [],
      modal12: false,
      tokenObtenido: null,
      infoUserAluxioner: null,
      verMapa: false,
      loading: false,
      errorToken: false,
      loadingSearchPlanTravel: false,
      errorTravel: false,
      input: null,
      errorTravelstops: false,
      verMapaInfoStops: false,
      hardcodeado: [
        {
          stopId: 287,
          geometry: {
            type: "Point",
            coordinates: [-3.69448143552844, 40.4330591155163],
          },
          stopName: "Eduardo Dato",
          address: "Pº de Eduardo Dato, 9                                  ",
          metersToPoint: 94,
          lines: [
            {
              line: "147",
              label: "147",
              nameA: "CALLAO",
              nameB: "BARRIO DEL PILAR",
              metersFromHeader: 8170,
              to: "A",
            },
            {
              line: "040",
              label: "40",
              nameA: "TRIBUNAL",
              nameB: "ALFONSO XIII",
              metersFromHeader: 6788,
              to: "A",
            },
          ],
        },
        {
          stopId: 286,
          geometry: {
            type: "Point",
            coordinates: [-3.69432539855262, 40.4327897807045],
          },
          stopName: "Eduardo Dato",
          address: "Pº de Eduardo Dato, 4                                  ",
          metersToPoint: 122,
          lines: [
            {
              line: "147",
              label: "147",
              nameA: "CALLAO",
              nameB: "BARRIO DEL PILAR",
              metersFromHeader: 2433,
              to: "B",
            },
            {
              line: "040",
              label: "40",
              nameA: "TRIBUNAL",
              nameB: "ALFONSO XIII",
              metersFromHeader: 1197,
              to: "B",
            },
          ],
        },
        {
          stopId: 528,
          geometry: {
            type: "Point",
            coordinates: [-3.69525901953917, 40.4352976942766],
          },
          stopName: "Martínez Campos",
          address: "Pº General Martínez Campos, 23                         ",
          metersToPoint: 179,
          lines: [
            {
              line: "016",
              label: "16",
              nameA: "MONCLOA",
              nameB: "PIO XII",
              metersFromHeader: 5375,
              to: "A",
            },
            {
              line: "005",
              label: "5",
              nameA: "SOL SEVILLA",
              nameB: "CHAMARTIN",
              metersFromHeader: 3034,
              to: "B",
            },
            {
              line: "061",
              label: "61",
              nameA: "MONCLOA",
              nameB: "NARVAEZ",
              metersFromHeader: 3954,
              to: "A",
            },
          ],
        },
        {
          stopId: 1894,
          geometry: {
            type: "Point",
            coordinates: [-3.69261616937194, 40.4351243433176],
          },
          stopName: "Museo Sorolla",
          address: "Pº General Martinez Campos, 40                         ",
          metersToPoint: 193,
          lines: [
            {
              line: "016",
              label: "16",
              nameA: "MONCLOA",
              nameB: "PIO XII",
              metersFromHeader: 2510,
              to: "B",
            },
            {
              line: "005",
              label: "5",
              nameA: "SOL SEVILLA",
              nameB: "CHAMARTIN",
              metersFromHeader: 5345,
              to: "A",
            },
            {
              line: "061",
              label: "61",
              nameA: "MONCLOA",
              nameB: "NARVAEZ",
              metersFromHeader: 2510,
              to: "B",
            },
          ],
        },
        {
          stopId: 527,
          geometry: {
            type: "Point",
            coordinates: [-3.69605794266702, 40.4350226240769],
          },
          stopName: "Martínez Campos",
          address: "Pº General Martinez Campos, 18                         ",
          metersToPoint: 200,
          lines: [
            {
              line: "016",
              label: "16",
              nameA: "MONCLOA",
              nameB: "PIO XII",
              metersFromHeader: 2218,
              to: "B",
            },
            {
              line: "005",
              label: "5",
              nameA: "SOL SEVILLA",
              nameB: "CHAMARTIN",
              metersFromHeader: 5053,
              to: "A",
            },
            {
              line: "061",
              label: "61",
              nameA: "MONCLOA",
              nameB: "NARVAEZ",
              metersFromHeader: 2218,
              to: "B",
            },
          ],
        },
        {
          stopId: 288,
          geometry: {
            type: "Point",
            coordinates: [-3.69215708002548, 40.432892852179],
          },
          stopName: "Rubén Darío",
          address: "Pº de Eduardo Dato, 12                                 ",
          metersToPoint: 207,
          lines: [
            {
              line: "147",
              label: "147",
              nameA: "CALLAO",
              nameB: "BARRIO DEL PILAR",
              metersFromHeader: 2622,
              to: "B",
            },
            {
              line: "040",
              label: "40",
              nameA: "TRIBUNAL",
              nameB: "ALFONSO XIII",
              metersFromHeader: 1386,
              to: "B",
            },
          ],
        },
        {
          stopId: 1893,
          geometry: {
            type: "Point",
            coordinates: [-3.69260668643583, 40.435349625417],
          },
          stopName: "Museo Sorolla",
          address: "Pº General Martínez Campos, 35                         ",
          metersToPoint: 212,
          lines: [
            {
              line: "016",
              label: "16",
              nameA: "MONCLOA",
              nameB: "PIO XII",
              metersFromHeader: 5150,
              to: "A",
            },
            {
              line: "005",
              label: "5",
              nameA: "SOL SEVILLA",
              nameB: "CHAMARTIN",
              metersFromHeader: 2809,
              to: "B",
            },
            {
              line: "061",
              label: "61",
              nameA: "MONCLOA",
              nameB: "NARVAEZ",
              metersFromHeader: 3729,
              to: "A",
            },
          ],
        },
        {
          stopId: 316,
          geometry: {
            type: "Point",
            coordinates: [-3.69147882339103, 40.4334374455295],
          },
          stopName: "Rubén Darío",
          address: "Miguel Angel, 1                                        ",
          metersToPoint: 237,
          lines: [
            {
              line: "147",
              label: "147",
              nameA: "CALLAO",
              nameB: "BARRIO DEL PILAR",
              metersFromHeader: 7871,
              to: "A",
            },
            {
              line: "040",
              label: "40",
              nameA: "TRIBUNAL",
              nameB: "ALFONSO XIII",
              metersFromHeader: 6489,
              to: "A",
            },
          ],
        },
        {
          stopId: 495,
          geometry: {
            type: "Point",
            coordinates: [-3.69177613397615, 40.4325347678537],
          },
          stopName: "Almagro-Rubén Darío",
          address: "Almagro, 33                                            ",
          metersToPoint: 256,
          lines: [
            {
              line: "007",
              label: "7",
              nameA: "ALONSO MARTINEZ",
              nameB: "MANOTERAS",
              metersFromHeader: 8028,
              to: "A",
            },
          ],
        },
        {
          stopId: 317,
          geometry: {
            type: "Point",
            coordinates: [-3.6971540048151, 40.4326917040781],
          },
          stopName: "Plaza Chamberí",
          address: "Pza. de Chamberí, 1                                    ",
          metersToPoint: 281,
          lines: [
            {
              line: "147",
              label: "147",
              nameA: "CALLAO",
              nameB: "BARRIO DEL PILAR",
              metersFromHeader: 8396,
              to: "A",
            },
            {
              line: "040",
              label: "40",
              nameA: "TRIBUNAL",
              nameB: "ALFONSO XIII",
              metersFromHeader: 7015,
              to: "A",
            },
          ],
        },
        {
          stopId: 494,
          geometry: {
            type: "Point",
            coordinates: [-3.69149061132661, 40.432284220689],
          },
          stopName: "Almagro-Rubén Darío",
          address: "Almagro, 44                                            ",
          metersToPoint: 292,
          lines: [
            {
              line: "007",
              label: "7",
              nameA: "ALONSO MARTINEZ",
              nameB: "MANOTERAS",
              metersFromHeader: 552,
              to: "B",
            },
          ],
        },
        {
          stopId: 4338,
          geometry: {
            type: "Point",
            coordinates: [-3.6914654709386, 40.4355906802269],
          },
          stopName: "Miguel Ángel",
          address: "Miguel Angel, 11                                       ",
          metersToPoint: 300,
          lines: [
            {
              line: "147",
              label: "147",
              nameA: "CALLAO",
              nameB: "BARRIO DEL PILAR",
              metersFromHeader: 7630,
              to: "A",
            },
            {
              line: "040",
              label: "40",
              nameA: "TRIBUNAL",
              nameB: "ALFONSO XIII",
              metersFromHeader: 6249,
              to: "A",
            },
            {
              line: "007",
              label: "7",
              nameA: "ALONSO MARTINEZ",
              nameB: "MANOTERAS",
              metersFromHeader: 7676,
              to: "A",
            },
          ],
        },
        {
          stopId: 1868,
          geometry: {
            type: "Point",
            coordinates: [-3.69763801757434, 40.432751852108],
          },
          stopName: "Plaza Chamberí",
          address: "Pza. de Chamberí con C/ Santa Engracia                 ",
          metersToPoint: 315,
          lines: [
            {
              line: "003",
              label: "3",
              nameA: "PUERTA TOLEDO",
              nameB: "SAN AMARO",
              metersFromHeader: 5724,
              to: "B",
            },
            {
              line: "523",
              label: "N23",
              nameA: "CIBELES",
              nameB: "MONTECARMELO",
              metersFromHeader: 2118,
              to: "B",
            },
          ],
        },
        {
          stopId: 1895,
          geometry: {
            type: "Point",
            coordinates: [-3.69772233959168, 40.4352108052776],
          },
          stopName: "Iglesia-Alonso Cano",
          address: "Pº General Martínez Campos, 3                          ",
          metersToPoint: 330,
          lines: [
            {
              line: "016",
              label: "16",
              nameA: "MONCLOA",
              nameB: "PIO XII",
              metersFromHeader: 5639,
              to: "A",
            },
            {
              line: "005",
              label: "5",
              nameA: "SOL SEVILLA",
              nameB: "CHAMARTIN",
              metersFromHeader: 3243,
              to: "B",
            },
            {
              line: "061",
              label: "61",
              nameA: "MONCLOA",
              nameB: "NARVAEZ",
              metersFromHeader: 4219,
              to: "A",
            },
          ],
        },
        {
          stopId: 529,
          geometry: {
            type: "Point",
            coordinates: [-3.69054126311367, 40.4351457446768],
          },
          stopName: "Miguel Ángel",
          address: "Pº General Martínez Campos frente al Nº 47             ",
          metersToPoint: 341,
          lines: [
            {
              line: "147",
              label: "147",
              nameA: "CALLAO",
              nameB: "BARRIO DEL PILAR",
              metersFromHeader: 3035,
              to: "B",
            },
            {
              line: "016",
              label: "16",
              nameA: "MONCLOA",
              nameB: "PIO XII",
              metersFromHeader: 2686,
              to: "B",
            },
            {
              line: "040",
              label: "40",
              nameA: "TRIBUNAL",
              nameB: "ALFONSO XIII",
              metersFromHeader: 1799,
              to: "B",
            },
            {
              line: "061",
              label: "61",
              nameA: "MONCLOA",
              nameB: "NARVAEZ",
              metersFromHeader: 2686,
              to: "B",
            },
            {
              line: "007",
              label: "7",
              nameA: "ALONSO MARTINEZ",
              nameB: "MANOTERAS",
              metersFromHeader: 957,
              to: "B",
            },
          ],
        },
        {
          stopId: 1869,
          geometry: {
            type: "Point",
            coordinates: [-3.69842442141596, 40.4346930588471],
          },
          stopName: "Iglesia",
          address: "Santa Engracia, 56                                     ",
          metersToPoint: 366,
          lines: [
            {
              line: "003",
              label: "3",
              nameA: "PUERTA TOLEDO",
              nameB: "SAN AMARO",
              metersFromHeader: 5950,
              to: "B",
            },
            {
              line: "037",
              label: "37",
              nameA: "CUATRO CAMINOS",
              nameB: "PUENTE VALLECAS",
              metersFromHeader: 5735,
              to: "A",
            },
            {
              line: "523",
              label: "N23",
              nameA: "CIBELES",
              nameB: "MONTECARMELO",
              metersFromHeader: 2343,
              to: "B",
            },
          ],
        },
        {
          stopId: 284,
          geometry: {
            type: "Point",
            coordinates: [-3.69815033086212, 40.4321271421345],
          },
          stopName: "Plaza Chamberí",
          address: "Luchana, 40                                            ",
          metersToPoint: 386,
          lines: [
            {
              line: "147",
              label: "147",
              nameA: "CALLAO",
              nameB: "BARRIO DEL PILAR",
              metersFromHeader: 2051,
              to: "B",
            },
            {
              line: "040",
              label: "40",
              nameA: "TRIBUNAL",
              nameB: "ALFONSO XIII",
              metersFromHeader: 815,
              to: "B",
            },
          ],
        },
        {
          stopId: 530,
          geometry: {
            type: "Point",
            coordinates: [-3.69002310722513, 40.4353875724595],
          },
          stopName: "Emilio Castelar",
          address: "Pº Gral Martínez Campos, 53.                           ",
          metersToPoint: 392,
          lines: [
            {
              line: "016",
              label: "16",
              nameA: "MONCLOA",
              nameB: "PIO XII",
              metersFromHeader: 4930,
              to: "A",
            },
            {
              line: "005",
              label: "5",
              nameA: "SOL SEVILLA",
              nameB: "CHAMARTIN",
              metersFromHeader: 2590,
              to: "B",
            },
            {
              line: "061",
              label: "61",
              nameA: "MONCLOA",
              nameB: "NARVAEZ",
              metersFromHeader: 3510,
              to: "A",
            },
          ],
        },
      ],
    };
  },
  methods: {
    async datosApi() {
      
      let result = await axios.get(
        "https://openapi.emtmadrid.es/v1/mobilitylabs/user/login/",
        {
          headers: {
            "content-type": "application/json",
            "X-ApiKey": "555a6c09-dd52-42cc-b85c-35873ebd8751",
            "X-ClientId": "c7310f8e-a0f0-4c3d-a8d2-d349d9b94f49" /* 1 */,
            passKey:
              "43F15FE2571B58FF9EDC24012FBDC9A94EEDD970C9E5E84A70E2E566323C032148BF886188087059324DF20950F258CE17523E01CA379D83F4DBC01578525637",
          },
        }
      );
      this.response = result.data.data;
      if (this.response.length > 0) {
        if (this.response[0].accessToken.length > 0) {
     
          return true;
        } else {
          
          return false;
        }
      }
     
      return false;
    },
    async planTravel(a, b) {
     
      const seekStops = async (a, b) => {
        try {
          this.errorTravel = false;
          this.loadingSearchPlanTravel = true;
          
          if (this.response[0].accessToken) {
           
            this.verMapa = false;
            const accessToken = this.response[0].accessToken;
            
            let result = await axios.get(
              `https://openapi.emtmadrid.es/v1/transport/busemtmad/stops/arroundstreet/${a}/${b}/400/`,
              {
                headers: {
                  accessToken: accessToken,
                },
              }
            );
            
            if (result.data.code === "00") {
              this.paradas = result.data;
             
              this.loadingSearchPlanTravel = false;
              return true;
            } else {
              
              setTimeout(() => {
                this.loadingSearchPlanTravel = false;
              }, 3000);
      
              let data = {
                data: this.hardcodeado,
              };
              this.paradas = data; 
             
              return true; 
            }
          }
        } catch (error) {
          console.log(error.message);
        }
      };
     
      let paradasObtenidas = await seekStops(a, b);
     
      if (paradasObtenidas) {
      
        this.verMapa = true;
        return paradasObtenidas;
      } else {
        const x1 = 545454
      }
    },

    async abrirmodalHome(info) {
      if (this.tokenObtenido) {
  
        this.modal12 = true;

        this.infoUserAluxioner = info;
      } else {
        const x2 = 1515454
      }
    },
    async cerrarmodalHome() {
      if (this.modal12) {
        this.modal12 = false;
      } else {
        this.modal12 = false;
      }
    },
    async cerrarMapa(info) {
      if (this.verMapa || this.verMapaInfoStops) {

        this.verMapa = !info;
        this.verMapaInfoStops = false;
        this.paradas = [];
        this.paradas1 = [];
      } else {
        this.verMapa = true;
      }
    },
    async getStopsbyId(e) {
      const b = e
      try {
        if (e) {
          if (this.response[0].accessToken && this.input > 0) {
            this.loadingSearchPlanTravel = true;
            this.paradas1 = {};
           
            const accessToken = this.response[0].accessToken;
          
            this.stopId = this.input;
            const stop = this.stopId;
            this.verMapaInfoStops = false;
            this.errorTravel = false;
          
            let result = await axios.get(
              `https://openapi.emtmadrid.es/v1/transport/busemtmad/stops/${stop}/detail/`,
              {
                headers: {
                  accessToken: accessToken,
                },
              }
            );

            if (
              result.data.code === "00" &&
              result.data.data[0].stops[0].stop == this.stopId
            ) {
          
              this.paradas1 = result.data.data[0].stops[0];
            
              this.loadingSearchPlanTravel = false;

              this.errorTravelstops = false;

              setTimeout(() => {
                this.verMapaInfoStops = true;
              }, 1000);
            } else if (result.data.code === "90") {
              this.errorTravel = true;
              setTimeout(() => {
                this.loadingSearchPlanTravel = false;
                this.errorTravelstops = false;
                this.errorTravel = true;
                this.stopId = null;
              }, 3000);
             
            }
          } else {
            console.log("token o input vacio");
          }
        } else {
          console.log("nadie apreto la lupa");
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  },
});
</script>

<style>
@import "../assets/styles/styles.css";
</style>