const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
app.use(cors())
const {task1, task2,task3,task4,bonusTask} = require('./tasks');
app.get("/tasks",(req,res)=>{
    taskQuery = req.query;
    if(taskQuery.tasksId==1){
        return res.json({chartData:task1()});
    }else if(taskQuery.tasksId==2){
        return res.json({chartData:task2()});
    }else if(taskQuery.tasksId==3){
        return res.json({chartData:task3()});
    }else if(taskQuery.tasksId==4){
        return res.json({chartData:task4()});
    }else if(taskQuery.tasksId==5){
        return res.json({chartData:bonusTask()});
    }
})

app.listen(port,()=>{
    console.log("Listening...");
})