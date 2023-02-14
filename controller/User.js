const Users = require("../Model/Users");

module.exports.userInfo = async (req, res) => {
  const data = {
    name: "Nirmit Sadh",
    email: "nirmitsadh74@gmail.com",
  };
  let userInstance = new Users(data);
  let savedData = await userInstance.save();
  res.send(savedData);
};
