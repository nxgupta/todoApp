const Taskform = ({
  createTask,
  updateTask,
  taskName,
  handleInputChange,
  edit,
}) => {
  return (
    <>
      <form className="task-form" onSubmit={edit ? updateTask : createTask}>
        <input
          type="text"
          value={taskName}
          name="name"
          placeholder="Add a task"
          onChange={handleInputChange}
        />
        <button type="submit">{edit ? "Edit" : "Add"}</button>
      </form>
    </>
  );
};

export default Taskform;
