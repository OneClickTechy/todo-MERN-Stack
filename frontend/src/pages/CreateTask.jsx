import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useGetmeQuery } from "../app/services/userSlicer";
import { useCreateTaskMutation } from "../app/services/taskSlicer";

const CreateTask = () => {
  const { data: user } = useGetmeQuery();
  const [createTask] = useCreateTaskMutation();

  const [newTask, setNewTask] = useState({
    name: "",
    description: "",
    duedate: "",
    priority: "",
    label: "",
    completed: false,
    userId: user?._id,
  });
  const handleChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const task = {
      ...newTask,
      priority: Number(newTask.priority),
    };

    try {
      const res = await createTask(task).unwrap();
      toast.success(res.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error(error?.data?.error, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleCreate}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">task name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={newTask.name}
          onChange={handleChange}
        />

        <label htmlFor="description">description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={newTask.description}
          onChange={handleChange}
        />

        <label htmlFor="duedate">Due date</label>
        <input
          type="date"
          name="duedate"
          id="duedate"
          value={newTask.duedate}
          onChange={handleChange}
        />

        <label htmlFor="priority">priority</label>
        <select
          name="priority"
          id="priority"
          value={newTask.priority}
          onChange={handleChange}
        >
          <option value="" disabled>
            select priority
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <button type="submit">Create</button>
      <ToastContainer />
    </form>
  );
};

export default CreateTask;
