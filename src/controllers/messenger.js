require("dotenv").config();

exports.send_message = (array, address, info) => {
  const accountSid = process.env.ACCOUNT_SID;
  const authToken = process.env.AUTH_TOKEN;
  const client = require("twilio")(accountSid, authToken);

  array.map((number) => {
    console.log(`${number} ${address} ${info}`)
    client.messages
      .create({
        body: `Alerta: ${address} ${info}`,
        from: "+16206340387",
        to: number,
      })
      .then((message) => console.log(message.sid));
  });
};
