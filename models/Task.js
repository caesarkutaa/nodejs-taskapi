const mongoose =require('mongoose')

//any properties you SET in the schema is what that is going to display
const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "must provide name"],
        trim:true,
        maxlength:[20,"name must not be more than 20 charaters"]
    },
    completed:{
        type:Boolean,
        default:false,
    }
})

module.exports = mongoose.model('Tasks',TaskSchema)