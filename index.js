const nirmitServer = require("express");
const mainServer = nirmitServer();
const userRouter = require("./View/user");
const adminRouter = require("./View/admin");
const webPage = require("./View/website");
const webtest = require("./View/test");
const dataBase = require('./database/index');

mainServer.use('/userroute',userRouter);
mainServer.use('/adminroute',adminRouter);
mainServer.use('/adminwebsite',webPage);
mainServer.use('/test',webtest);
mainServer.listen(3000, () => {
    console.log("server running");
});