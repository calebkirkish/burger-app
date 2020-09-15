var connection = require('./connection.js');

var orm = {
    selectAll: function(tableInput, cb){
        console.log(tableInput);
        var queryString = "Select * From ??"
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
//     insertOne: function(whatToSelect, )
    
    
}

module.exports = orm;