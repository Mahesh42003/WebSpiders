const mongoose=require("mongoose") 
const dotenv=require("dotenv") //importing environmental variables file
dotenv.config() 
mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.jf4gnyu.mongodb.net/react-tut`) //Mongodb Connection String
const Task= mongoose.Schema({
    title: {type:String,required:true, maxlength:100}, 
    description: {type:String},
    status: {type:String,Enum: ['TODO', 'IN_PROGRESS', 'COMPLETED'], default: 'TODO'},
    priority: {type:String,Enum: ['LOW', 'MEDIUM', 'HIGH']},
    dueDate: {type:Date}
},{ timestamps: true }) 
const data=mongoose.model("tasks",Task)
