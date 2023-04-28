const firebase = require("../database/firebase");
const { create_data_user } = require("../controllers/message_controllers");
require("firebase/auth");

exports.register = async (req, res) => {
  const { name, telephone, email, password } = req.body;
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        create_data_user(name, telephone);
        return res.status(200).json(data);
      });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((error) => {
        let error_code = error.code;
        let error_message = error.message;
        if (error_code === "auth/wrong-password") {
          return res.status(500).json({ error: error_message });
        } else {
          return res.status(500).json({ error: error_message });
        }
      });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
