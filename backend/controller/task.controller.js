import { Task } from "../models/task.model.js";

export const createTask = async (req, res) => {
  try {
    const { _id: userId } = req.user;
    if (!userId) {
      return res.status(404).json({ error: "userId not found" });
    }
    const {
      name,
      description,
      duedate,
      priority = 4,
      label = null,
      completed = false,
    } = req.body;
    if (!name || !description || !duedate) {
      return res.status(400).json({ error: "please fill all fields" });
    }

    const existTask = await Task.findOne({ name, userId });

    if (existTask) {
      return res
        .status(400)
        .json({ error: "task with same name already exist" });
    }

    const newTask = new Task({
      name,
      description,
      duedate,
      priority,
      label,
      completed,
      userId,
    });

    const savedTask = await newTask.save();

    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ error: `Internal server error: ${error.message}` });
  }
};

export const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Unable to read id" });
    }

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: ` Internal server error: ${error}` });
  }
};

export const getUserTasks = async (req, res) => {
  try {
    const { _id: userId } = req.user;

    if (!userId) {
      return res.status(404).json({ error: "userId not found" });
    }
    const userTasks = await Task.find({ userId });
    res.status(200).json(userTasks);
  } catch (error) {
    res.status(500).json({ error: ` Internal server error: ${error}` });
  }
};
