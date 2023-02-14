const app = require("mongoose");
const Schema = app.Schema;
const user = new Schema({
    name:{type:String},
    email:{type:String},
 });


//  const users = app.model('user', user);
 module.exports = app.model("user", user);