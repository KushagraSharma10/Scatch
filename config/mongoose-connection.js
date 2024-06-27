const mongoose = require("mongoose")
const debugLog = require("debug")("development:mongoose")
const config = require("config")

mongoose.connect(`${config.get("MONGODB_URL")}/scatch`)
.then(function(){
    debugLog("connected")
})
.catch(function(err){
    debugLog(err)
})

module.exports = mongoose.connection;