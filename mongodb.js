// This is not required in any functionality of this app, it's here just to
// remember the working of the mongodb

const { MongoClient, ObjectID } = require('mongodb'); 

const connectionURL = 'mongodb://127.0.0.1:27017';
const databasename = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error,client) => {
    if(error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databasename);

    db.collection('tasks').deleteOne({
        description: "Pot plants"
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
})