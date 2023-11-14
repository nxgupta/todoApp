const { Task } = require("../models/taskModels");

const createTask = async (req, res) => {
  try {
    let response = await Task.create(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};
const getTasks = async (req, res) => {
  try {
    let response = await Task.find({});
    res.status(200).json(response);
  } catch (error) {
    res.status(204).json({ err: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    let response = await Task.findById(req.params.id);
    if (!response) {
      return res
        .status(404)
        .json({ "msg": `No task found with id:${req.params.id}` });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    let response = await Task.findByIdAndDelete(req.params.id);
    if (!response) {
      return res
        .status(404)
        .json({ msg: `No task found with id:${req.params.id}` });
    }
    res.status(200).json({success:true, msg:"Task Deleted Successfully"});
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};
const updateTask = async (req, res) => {
  try {
    let response = await Task.findByIdAndUpdate({_id:req.params.id},req.body,{new:true, runValidators:true});
    if (!response) {
      return res
        .status(404)
        .json({ msg: `No task found with id:${req.params.id}` });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask
};
