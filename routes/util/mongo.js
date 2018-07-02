var MongoClient = require('mongodb').MongoClient;

const mongo_util = {
  
  open: function() {
    MongoClient.connect("mongodb://localhost:27017/test", function (err, client) {
    
      var db = client.db();
      db.collection('person', function (err, collection) {
          
        collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
        collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
        collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });
      
        db.collection('person').count(function (err, count) {
            if (err) throw err;
            
            console.log('Total Rows: ' + count);
        });
      });      
    });

  }
}

module.exports = mongo_util;
