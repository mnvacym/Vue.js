const express = require("express");

const router = express.Router();

const Todo = require('../../models/Todo');

// Get todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error!");
  }
});

// Add todo
router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo({
      description: req.body.description,
      deadline: req.body.deadline,
      done: false
    });
    await newTodo.save();
    res.status(200).json({ msg: "Todo saved" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error!");
  }
});

// Delete todo
router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    await todo.remove();
    res.status(200).json({ msg: "Todo removed" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error!");
  }
});

// toggle todo
router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    todo.done = !todo.done;
    await todo.save();
    res.status(200).json({ msg: "Congratz!" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;
