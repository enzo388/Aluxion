
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.png';
import user4 from '../assets/user4.png';
import user5 from '../assets/user5.png';
import user6 from '../assets/user6.png';

export default function getTeamUser() {



  const TeamUser = [
    {
      urlImage: user1,
      altImg: user1,
      nameUser: "Esther Howard",
      function: "Frontend developer",
      paradaCasa: "3378",
      paradaAluxion: "494",
      houseAddress: {
        street: "Calle del oso",
        number: 8,
        lat: 40.4098237,
        lng: -3.7045853,
      },
    },
    {
      urlImage: user2,
      altImg: user2,
      nameUser: "Bessie Cooper",
      function: "Frontend developer",
      paradaCasa: "2908",
      paradaAluxion: "1229",
      houseAddress: {
        street: "Calle Nicolás Sánchez",
        number: 19,
        lat: 40.386271,
        lng: -3.706334,
      },
    },
    {
      urlImage: user3,
      altImg: user3,
      nameUser: "Bessie Cooper",
      function: "Backend developer",
      paradaCasa: "1688",
      paradaAluxion: "2710",
      houseAddress: {
        street: "Calle de Canarias",
        number: 27,
        lat: 40.402271,
        lng: -3.692672,
      },
    },
    {
      urlImage: user4,
      altImg: user4,
      nameUser: "Jenny Wilson",
      function: "Mobile developer",
      paradaCasa: "59",
      paradaAluxion: "85",
      houseAddress: {
        street: "Calle de Echegaray",
        number: 9,
        lat: 40.415912,
        lng: -3.699527,
      },
    },
    {
      urlImage: user5,
      altImg: user5,
      nameUser: "Savannah Nguyen",
      function: "Head of Backend",
      paradaCasa: "189",
      paradaAluxion: "806",
      houseAddress: {
        street: "Calle de Altamirano",
        number: 9,
        lat: 40.431066,
        lng: -3.718416,
      },
    },
    {
      urlImage: user6,
      altImg: user6,
      nameUser: "Javi",
      function: "CEO & Founder",
      paradaCasa: "189",
      paradaAluxion: "806",
      houseAddress: {
        street: "Calle de Alberto Bosch",
        number: 38,
        lat: 40.413727,
        lng: -3.689054,
      },
    },
  ];

  return TeamUser
}