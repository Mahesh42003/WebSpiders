const express=require("express") 
const app=express() 
const dotenv=require("dotenv")
const Joi=require("joi")
dotenv.config()
const PORT=process.env.PORT || 3010 
const task=require("./task") // importing the task file from mongoDb database
const  mongoose  = require("mongoose")
app.use(express.json()) //Convert incoming data to json format
const tasks=require('./task') 
const Task=mongoose.model("tasks")



const validation = Joi.object({
  title: Joi.string().max(100).required(),
  description: Joi.string(),
  status: Joi.string().valid('TODO', 'IN_PROGRESS', 'COMPLETED'),
  priority: Joi.string().valid('LOW', 'MEDIUM', 'HIGH').required(),
  dueDate: Joi.date(),
});

  //Using Post Request We can inserting data into mongoDB database
app.post("/tasks",async(req,res) => {
    const {title,description,priority,dueDate,status}=req.body //Requesting the data from body
    const { error, value } = validation.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }
  try {
    const newTask = await new Task(value);
    await newTask.save();
    res.status(201).json({ message: 'Task created successfully',data:newTask});
  } catch (dbError) {
    res.status(500).json({ error: dbError.message });
  }
}) 

//Using Get Request we can retrive the data from the server

app.get("/tasks",async(req,res) => {
    const {status,priority,skip,sort,limit}=req.query  // We have to request query parameters using req.query
    //Find method using in mongodb is used to retrive the data
    //sort method is sorting the data in ascending or descending order
    //skip is used for how many items we want to skip
    //limit is used for how many items we want to retrive
    try {
      const query = {}; 
      if (status) query.status = status;
      if (priority) query.priority = priority;
        const tasks = await Task.find(query).sort(sort).skip(skip).limit(limit); 
        console.log(tasks)
         res.status(200).json( tasks );
      }
       catch (err) {
        res.status(500).json({ error: err.message });
      }
})

//Retriving a particular id from the data

app.get("/tasks/:id",async(req,res) => {
    const {id}=req.params //We have to request parameters using req.params

    const findingId=await Task.findOne({_id:id})  //Checking Whether id or not
    if(!findingId){         
        res.status(404).json('Id Not Found')
    }
    res.status(200).json({findingId})
    
}) 

//Updating a particular id from the data

app.put("/tasks/:id",async(req,res) => {
    const {id}=req.params //We have to request parameters using req.params
    const {title,description,priority,dueDate,status,createdAt}=req.body 
    const updatedData={_id:id,title,description,priority,dueDate
      ,status,createdAt}
    const updatingExistingData=await Task.findByIdAndUpdate(id,updatedData,{new:true} )  // Using findByIdAndUpdate is used to update the database in mongodb
    res.send(updatingExistingData)
})

//Deleting a particular id from the data

app.delete("/tasks/:id",async(req,res) => {
  const {id}=req.params  
  const filterById=await Task.find()
  const checkingIdpresentOrnot=filterById.filter(each => each._id == id)

  if(checkingIdpresentOrnot.length == 0){
    res.status(404).json("Not Found")
  }
  const deletingData=await Task.findByIdAndDelete({_id:id}) //Using findByIdAndDelete is remove to particular id in database
  res.status(204).json("No Content")
})

app.listen(PORT,() => {
    console.log(`Port has istened successfully at ${PORT}`)
})
