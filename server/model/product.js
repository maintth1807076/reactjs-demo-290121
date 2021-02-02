const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: {type: String},
    name: {type: String},
    thumbnail: {type: String},
    price: {type: Number},
    description: {type: String},
    artist: {type: String},
    createdAt: {type: Date},
    deletedAt: {type: Date},
    status: {type: String},
});

module.exports = mongoose.model("Product", productSchema);
