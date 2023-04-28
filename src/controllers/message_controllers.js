const admin = require("firebase-admin");
const key = require("../database/key.json");
const { send_message } = require("./messenger");

admin.initializeApp({
  credential: admin.credential.cert(key),
});

const db = admin.firestore();

exports.create_data_user = async (name, telephone) => {
  try {
    const active = true;
    db.collection("user").add({
      name,
      telephone,
      active,
    });
  } catch (error) {
    return console.log(error.message);
  }
};

exports.get_data_user = async (req, res) => {
  try {
    const { address, info } = req.body;
    const userRef = db.collection("user");
    const response = await userRef.get();
    let response_array = [];
    response.forEach((doc) => {
      response_array.push(doc.data().telephone);
    });
    send_message(response_array, address, info);
    return res.status(200).json(response_array);
  } catch (error) {
    return console.log(error.message);
  }
};
