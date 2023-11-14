import React from "react";
import { FaCheckDouble, FaEdit, FaRegTrashAlt } from "react-icons/fa";

const Task = ({ tasks, editTask, deleteTask, completeTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <div
          className={task.completed ? "task completed" : "task"}
          key={task._id}
        >
          <p key={task._id}>
            <b>{++index}. </b>
            {task.name}
          </p>
          <div className="task-icons">
            <FaCheckDouble
              color="green"
              onClick={() => {
                completeTask(task._id);
              }}
            />
            <FaEdit color="purple" onClick={() => editTask(task)} />
            <FaRegTrashAlt
              color="red"
              onClick={() => {
                deleteTask(task._id);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;
