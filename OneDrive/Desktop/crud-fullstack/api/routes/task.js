const router = require("express").Router();
const Task = require("../models/Task");

/**
 * ! Getting all the tasks
 */

router.get("/:id", async (req, res) => {
  try {
    // const tasks = await Task.findById(req.params.id);
    const tasks = await Task.find({ userId: req.params.id });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
});

/**
 * ! Create a Task
 */
//  userId : req.body.userId,
//  task_date: req.body.task_date,
//  task_desc : req.body.task_desc

// router.post("/create", async(req,res)=>{
//   try{
//     const newTask = await new Task({
//       username: req.body.username,
//     })
//     const saveTask = await new newTask.save()
//     res.status(200).json(saveTask)
//   }
//   catch(err){
//     res.status(500).json(err)
//   }
// })

router.post("/create", async (req, res) => {
  try {
    //  We are creating new user here
    let newUser = await new Task({
      userId: req.body.userId,
      task: req.body.task,
      task_date: req.body.task_date,
      task_desc: req.body.task_desc,
    });

    let user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.put()
// router.delete('/posts/:hchassabsabx') // :id = params

module.exports = router;
