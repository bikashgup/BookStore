const mongoose = require('mongoose');
const config = require('./../config');

const MONGOURI = config.db.mongodb.uri;

const InitiateMongoServer = async() =>{

try{
	await mongoose.connect(MONGOURI,{

		useNewUrlParser: true,
    	useUnifiedTopology: true
	});

console.log("Connected to DB!");

}
catch(e){
	console.log(e);
	throw e;
}

};

module.exports = InitiateMongoServer;