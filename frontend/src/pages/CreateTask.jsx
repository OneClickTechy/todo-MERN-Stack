import React, { useState } from 'react'

const CreateTask = () => {
  const [newTask, setNewTask] = useState({
    name: "",
    description: "",
    duedate: "",
    priority: 4,
  })
  const handleChange = (e) => {
    setNewTask({
      ...newTask, 
      [e.target.name] : e.target.value,
    })
    console.log(newTask);
  }
  return (
    <form>

      <label htmlFor='name'>task name</label>
      <input type="text" name='name' id='name' />

      <label htmlFor="description">description</label>
      <input type="text" name='description' id='description' />

      <label htmlFor="dudate">Due date</label>
      <input type="date" name='dudate' id='dudate' />

      <label htmlFor="priority">priority</label>
      <select name="priority" id="priority">
        <option value="" disabled>select priority</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

    </form>
  )
}

export default CreateTask