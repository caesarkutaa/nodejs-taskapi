const Task = require('../models/Task')
const asyncwrapper = require('../middleware/async')


const getAllTasks = async(req,res)=>{
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    }catch(error){
        res.status(500).json({msg:error})
    }
   }


   const createTasks = async (req,res)=>{
     try{
         const task = await Task.create(req.body)
         res.status (201).json({task});

     } catch(error){
        tatus(500).json({msg: error})
     }
   }


   const getTask =  async (req,res)=>{
    const {id:taskID}= req.params
    try {
        const task = await Task.findOne({_id:taskID})
       if(!task){
        return res.status(404).json({msg:`no task with the id found : ${taskID}`})
       }


        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }

   }
   const updateTask = async(req,res)=>{
     try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true
        })
            res.status(200).json({task})
        } catch (error) {
            res.status(500).json({msg:error})
     }
   }


   const deleteTask = async(req,res)=>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`no task with the id found : ${taskID}`})
        }
             req.status(200).json({task})
            // req.status(200).send()
    } catch (error) {
            res.status(404).json({msg:error})
    }
    
   }

   



   module.exports = {
    getAllTasks,
    createTasks,
    getTask,
    updateTask,
    deleteTask
   }