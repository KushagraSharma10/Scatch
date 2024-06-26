const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  products: {
    type: Array,
    default: [],
  },    
  picture: String,
  gstin:String,
});

module.exports = mongoose.model("owner", ownerSchema);
