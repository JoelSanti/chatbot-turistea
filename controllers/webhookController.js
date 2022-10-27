const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');

exports.webhook = (req, res) => {

const agent = new WebhookClient({ request:req, response:res});

const urlBD = "https://sheet.best/api/sheets/30c2412b-007b-4b1e-95ff-5b4c6fc7cf84";


function cuak(agent) {
   agent.add('patos al agua');
}

function recomendarLugares(agent){

/*
  agent.add("Bueno tengo una lista de lugares en mi base de datos puedes verlos haber si alguno te agrada");

*/
agent.add(new Card({
    title: `Title: this is a card title`,
    text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
    buttonText: 'Click me',
    buttonUrl: 'https://assistant.google.com/',
    imageUrl: 'https://res.cloudinary.com/dxhd3fys3/image/upload/s--8mebhpRV--/c_scale,w_761/v1666823231/imagenesParaTuristea/Templo_Blanco_de_Kotosh_amb_l_edifici_del_Templo_de_las_Manos_darrera03_ehjmhw.jpg',
    
  })
);   
/*
  agent.add(new Suggestion('No afronté el problema'))
  agent.add(new Suggestion('Analicé el problema pero no pude resolverlo'))
  agent.add(new Suggestion('Analicé y resolví el problema correctamente'))

*/
 }

let intentMap = new Map();
 
  intentMap.set('cuak', cuak);
  intentMap.set('Recomendar Lugares', recomendarLugares);

  agent.handleRequest(intentMap);

}
