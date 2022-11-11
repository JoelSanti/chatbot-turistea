const {WebhookClient} = require('dialogflow-fulfillment');
const {Card,Suggestion,Payload} = require('dialogflow-fulfillment');

exports.webhook = (req, res) => {

const agent = new WebhookClient({ request:req, response:res});

const urlBD = "https://sheet.best/api/sheets/30c2412b-007b-4b1e-95ff-5b4c6fc7cf84";



/*
function bienvenida(agent) {
  
}*/

function serviciosKotosh(agent) {
agent.add("Kotosh ofrece los siguientes servicios:");
agent.add("🛖​🛖​🛖​ Zona Arqueológica Monumental de Kotosh");
agent.add("🏺⚱️​​ Sala de Exhibición");
agent.add("📄Se puede encontrar venta de material informativo.");
agent.add("🍛​ 🍧 🍔​ 🥤 kioskos de comida y/o bebida.");
agent.add("🛗​ Y Servicios higiénicos.");


}

function recomendarLugares(agent){


  const payload = { 
    type: "carousel", 
    items: [ 
     { 
    title: `Kotosh, Templo de las manos cruzadas`,
    text: `Kotosh es un sitio arqueológico ubicado en el distrito, provincia y departamento de Huánuco, en el Perú. Se compone de una serie de edificios superpuestos con 6 periodos de ocupación continua que datan desde el Arcaico Tardío hasta el Intermedio Temprano. El más famoso de sus recintos, que se encuentra expuesto actualmente al público, es el Templo de las Manos Cruzadas, llamado así por tener dos altorrelieves en barro en forma de sendos brazos cruzados, cuya antigüedad se remonta al 1800 a. C. (fase Kotosh-Mito). Entre los investigadores y arqueólogos que han estudiado este sitio arqueológico se encuentran Javier Pulgar Vidal, Julio César Tello y Seiichi Izumi (este último fue el descubridor del Templo de las Manos Cruzadas)`,
    buttonText: 'Se halla en Kotosh, una pequeña pampa situada a 4 km al oeste de la ciudad de Huánuco y sobre el margen derecha del río Higueras.',
    buttonUrl: 'A 4 kilómetros de la ciudad de Huánuco',
    imageUrl: 'https://res.cloudinary.com/dxhd3fys3/image/upload/s--8mebhpRV--/c_scale,w_761/v1666823231/imagenesParaTuristea/Templo_Blanco_de_Kotosh_amb_l_edifici_del_Templo_de_las_Manos_darrera03_ehjmhw.jpg',
    },
     { 
      title: `Huánuco Pampa `,
      text: `Este importante centro arqueológico habría tenido la finalidad de ser un centro administrativo, religioso y militar, además se le conoce como un centro importante de elaboración de finos productos textiles. En sus principales ambientes se le rendía culto al Inti (el Sol) adorándolo con cantos y ceremonias para agradecerle las buenas cosechas y victorias ganadas. El complejo arqueológico Huánuco Pampa, destaca por sus edificaciones y arquitectura, pues fue el centro administrativo mas importante de la cultura inca. Está dividido en sectores, entre los que destacan su extensa plaza de aproximadamente 200 metros cuadrados donde se encuentra el imponente Ushnu, una construcción de base cuadrada y forma piramidal utilizada por los incas para las ceremonias importantes del Tahuantinsuyo y distintas festividades, donde destaca el inconfundible estilo inca, que demuestra la destreza que tenían para labrar enormes piedras. Este Ushnu tiene muros de más de tres metros de alto y escalinatas que servían para entrar a él. Además, alrededor se encuentran los grandes ambientes destinados a finalidades estatales, llamados kallancas, así como cerca de 500 depósitos que servían de almacenes llamados colcas, en donde guardaban alimentos como la papa y el maíz. `,
      buttonText: 'Ubicado sobre una meseta o pampa de 200 ha de extensión a 3,700 metros de altura que se emplaza sobre el valle del Vizcarra.',
      buttonUrl: 'A 63.6 kilometros de la ciudad de Huánuco',
      imageUrl: 'https://res.cloudinary.com/dxhd3fys3/image/upload/s--hcKxX212--/v1666863050/imagenesParaTuristea/huanuco-pampa_hvujpp.jpg',
      
    },
    { 
      title: `Puente Calicanto (Huánuco)`,
      text: `El Puente Calicanto está ubicado en la ciudad de Huánuco y cruza el río Huallaga.​Su construcción comenzó en 1879 y culminó el 1884. Fue diseñado por Santos Benedetti, Silverio Lázzaro y Vitorio Albertini.2​3​ Tiene una longitud de 60 m y dos columnas. Fue construido sobre la base de piedra de canto rodado junto con mezcla de cal, arena y claras de huevos.`,
      buttonText: 'El Puente Calicanto está ubicado en la ciudad de Huánuco y cruza el río Huallaga',
      buttonUrl: 'Se encuentra en la misma ciudad de Huánuco',
      imageUrl: 'https://res.cloudinary.com/dxhd3fys3/image/upload/s--PGOzSu9U--/v1666863970/imagenesParaTuristea/gran-paisaje-representativo_rnutki.jpg',
      
    } 
   ] 
  } 



agent.add("Bueno tengo una lista de lugares en mi base de datos");
agent.add("Puedes verlos tal vez alguno te resulte agradable (̶◉͛‿◉̶)");
agent.add("Selecciona el lugar y te mostraré más información 👇");

agent.add(
  new Payload(agent.UNSPECIFIED, payload, {rawPayload: true, sendAsMessage: true})
);

}

function ubicacionKotosh(agent) {

  agent.add("Puedo mostrarte la hubicación exacta del lugar 😉​");
  agent.add("El icono azul muestra la hubicación de Kotosh en el mapa 👇​");
  const payload = { 
    type: "mapa", 
    items: [ 
     { 
    title: `-9.93083333`,
    text: `-76.27944444`,
    buttonText: 'Kotosh, Templo de las manos cruzadas',
    buttonUrl: 'xxxxxxx',
    imageUrl: 'https://res.cloudinary.com/dxhd3fys3/image/upload/s--8mebhpRV--/c_scale,w_761/v1666823231/imagenesParaTuristea/Templo_Blanco_de_Kotosh_amb_l_edifici_del_Templo_de_las_Manos_darrera03_ehjmhw.jpg',
    }
   ] 
  } 

  agent.add(
    new Payload(agent.UNSPECIFIED, payload, {rawPayload: true, sendAsMessage: true})
  );
  


}

function ubicacionCalicanto(agent) {

  agent.add("Puedo mostrarte la hubicación exacta del lugar 😉​");
  agent.add("El icono azul muestra la hubicación del Puente Calicanto en el mapa 👇​");
  const payload = { 
    type: "mapa", 
    items: [ 
     { 
    title: `-9.932335`,
    text: `-76.236379`,
    buttonText: 'Puente Calicanto (Huánuco)',
    buttonUrl: 'xxxxxxx',
    imageUrl: 'https://res.cloudinary.com/dxhd3fys3/image/upload/s--8mebhpRV--/c_scale,w_761/v1666823231/imagenesParaTuristea/Templo_Blanco_de_Kotosh_amb_l_edifici_del_Templo_de_las_Manos_darrera03_ehjmhw.jpg',
    }
   ] 
  } 

  agent.add(
    new Payload(agent.UNSPECIFIED, payload, {rawPayload: true, sendAsMessage: true})
  );
  


}

let intentMap = new Map();
 
  
  intentMap.set('Recomendar Lugares', recomendarLugares);
  
  intentMap.set('que ofrece kotosh', serviciosKotosh);

  intentMap.set('como llegar a kotosh', ubicacionKotosh);

  intentMap.set('como llegar al puente Calicanto', ubicacionCalicanto);

  agent.handleRequest(intentMap);

}
