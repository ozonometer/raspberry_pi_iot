let mongoose = require('mongoose');

let Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

let DataSchema = new Schema({
    id: ObjectId,
    open: Boolean,
    temperature: Number,
    message: String,
});

// to access model 'users' - name of collection, UserSchema - fields defined above
let RecordModel = mongoose.model('records', DataSchema);
module.exports = RecordModel;