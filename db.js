const mongoose = require('mongoose');
mongoose.connect('mongodb://10.1.0.159:27017/EventStoreDb');
//mongoose.connect('mongodb://passmid1:Lhkle7A1hbtb8abR@passcluster-shard-00-00-zydoj.mongodb.net:27017,passcluster-shard-00-01-zydoj.mongodb.net:27017,passcluster-shard-00-02-zydoj.mongodb.net:27017/EventStoreDb?authSource=admin&replicaSet=PassCluster-shard-0&retryWrites=true&ssl=true');
var EventSchema = new mongoose.Schema({
    CreationDate: String,
    EventName:String,
    ErrorMessage: String

},{ collection: 'EventHandledWithErrorEvents' });
 
module.exports = { Mongoose: mongoose, EventSchema: EventSchema }