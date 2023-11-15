import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Taskform from "./Taskform";
import Task from "./Task";
import axios from "axios";
import loader from "../assets/loader.gif";
let URL = import.meta.env.VITE_BACKEND_URL;
const Tasklist = () => {
  const [formData, setFormData] = useState({
    name: "",
    completed: false,
  });
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const { name } = formData;

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const createTask = async (e) => {
    e.preventDefault();
    if (e.target.name.value === "")
      return toast.error("Please enter a task", {
        position: toast.POSITION.TOP_CENTER,
      });
    else {
      try {
        setIsLoading(true);
        await axios.post(`${URL}/api/task`, formData);
        toast.success("Task created successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
        setIsLoading(false);
        getTasks();
        setFormData({ name: "" });
      } catch (error) {
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        setIsLoading(false);
      }
    }
  };

  const getTasks = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${URL}/api/task`);
      setIsLoading(false);
      setTasks(response.data);
      setCompletedTasks(response.data.filter((task) => task.completed));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      setIsLoading(false);
    }
  };

  const deleteTask = async (id) => {
    try {
      setIsLoading(true);
      await axios.delete(`${URL}/api/task/${id}`);
      toast.success("Task deleted successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      setIsLoading(false);
      getTasks();
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      setIsLoading(false);
    }
  };

  const completeTask = async (id) => {
    try {
      setIsLoading(true);
      await axios.put(`${URL}/api/task/${id}`, { completed: true });
      toast.success("Task completed successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      setIsLoading(false);
      getTasks();
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      setIsLoading(false);
    }
  };

  const editTask = async (task) => {
    setEdit(true);
    setEditId(task._id);
    setFormData({ name: task.name, completed: false });
  };
  const updateTask = async (e) => {
    try {
      e.preventDefault();
      if (formData.name === "") {
        toast.error("Please enter a task", {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      }
      setIsLoading(true);
      await axios.put(`${URL}/api/task/${editId}`, formData);
      toast.success("Task updated successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      setFormData({ ...formData, name: "" });
      setEdit(false);
      setEditId(null);
      getTasks();
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <h2 className="--flex-center">Task Manager</h2>
      <Taskform
        createTask={createTask}
        taskName={name}
        handleInputChange={handleInputChange}
        edit={edit}
        updateTask={updateTask}
      />
      <div className="--flex-between --pb">
        <p>
          <b>Total Tasks: {tasks.length}</b>
        </p>
        <p>
          <b>Completed Tasks: {completedTasks.length}</b>
        </p>
      </div>
      {isLoading ? (
        <div className="--flex-center">
          <img src={loader} alt="loader" />
        </div>
      ) : (
        <Task
          tasks={tasks}
          deleteTask={deleteTask}
          completeTask={completeTask}
          editTask={editTask}
        />
      )}
    </>
  );
};

export default Tasklist;
