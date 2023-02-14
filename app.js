// const http = require('http');

// // create server
// const server = http.createServer();
// server.get('/', (req, res) => {
//     res.send("hiiiiiii")
// })
// // console.log("server",server)
// server.listen(5000, () => {
//     console.log("Server is created")
// })

// // GET, POST, PUT, PATCH

// Create server using express

const nodeExpress = require("express");
const expressServer = nodeExpress();
// console.log("expressServer",expressServer);

expressServer.get("/", (req, res) => {
  // res.send("Node Start with Express");
  res.send(`<form>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
  </form>`);
});

expressServer.post('/usingpost', (req,res) => {
   const data = {
    email:"nirmitsadh7777@gmail.com",
    password:"1234567",
    name:"nirmit sadh"
   };
   console.log("data",data);
   res.send(data);
})

expressServer.listen("4000", () => {
  console.log("Express Server Connected");
});
