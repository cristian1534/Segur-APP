require("dotenv").config();

exports.send_message = (array, address, info) => {
  const accountSid = process.env.ACCOUNT_SID;
  const authToken = process.env.AUTH_TOKEN;
  const client = require("twilio")(accountSid, authToken);
 
  client.messages
    .create({
      body: `Alerta: ${address} ${info}`,
      from: "+16206340387",
      to: `${array}`,
    })
    .then((message) => console.log(message.sid));
};
