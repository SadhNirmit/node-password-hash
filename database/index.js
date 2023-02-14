const mongoose = require('mongoose');
let URL = 'mongodb://127.0.0.1:27017/nodejsdaily';

// mongoose.connect('mongodb://127.0.0.1:27017/test')
//   .then(() => console.log('Connected!'));

mongoose.connect(URL).then((success) => {
    console.log("DataBase Connected!")
}).catch((err) => {
    console.log("err",err);
})
