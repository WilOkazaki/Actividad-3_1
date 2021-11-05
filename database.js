
const mongoose = require('mongoose')
const url = 'mongodb://localhost/BackEnd_3'

async function connect_database() {
 try{
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useFindAndModify: false,
      //useCreateIndex: true,
    });
    console.log("Mongodb is connected")
    }
	catch (error) {
    console.error(error);
   }
}

module.exports = connect_database();