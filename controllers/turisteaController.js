
//const {Card, Suggestion} = require('dialogflow-fulfillment');
//const {default:axios} = require('axios');

const dialogflow = require("@google-cloud/dialogflow")

//const { uuid } = require('uuidv4');
//
require('dotenv').config({path:'variables.env'})

const {Card,Suggestion} = require('dialogflow-fulfillment');


const { v4: uuidv4 } = require('uuid');

  const projectId = process.env.PROJECT_ID
  //const sessionId = process.env.DIALOGFLOW_ID_SESION
  const sessionId = uuidv4();
  // Create a new session
  const lenguaje = process.env.DIALOGFLOW_LANGUAJE_SESION
//
//
  const sessionClient = new dialogflow.SessionsClient();
  const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
  );

exports.textQuery = async (req, res) => {
 
  // A unique identifier for the given session
console.log('si estamos en text')

console.log(req.body)
  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: req.body.text,
        // The language used by the client (en-US)
        languageCode: lenguaje,
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);

    res.send(result)
}

exports.eventQuery = async (req, res) => {
 
  // A unique identifier for the given session

console.log(req.body)
  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      event: {
        // The query to send to the dialogflow agent
        name: req.body.event,
        // The language used by the client (en-US)
        languageCode: lenguaje,
      }, 
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);

    res.send(result)
}


