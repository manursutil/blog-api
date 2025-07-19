const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String
});

blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('Blog', blogSchema);