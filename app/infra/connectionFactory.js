var mysql = require('mysql');

//anonima
var connectMYSQL = function(){
		if(!process.env.NODE_END){
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'eduardo',
			database: 'casadocodigo_nodejs'
		});
	}
	
	if(!process.env.NODE_END == 'test'){
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'eduardo',
			database: 'casadocodigo_nodejs'
		});
	}
};


//wrapper
module.exports = function(){
	return connectMYSQL;
}		