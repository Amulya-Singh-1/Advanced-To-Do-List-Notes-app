import React from 'react';
import { useState } from 'react'
import '../App.css'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text){
      alert('Please add a task')
      return
    }

    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <center>
    <form className='add-form' style={{display:'block'}} onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div> <br />
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='date'
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div> <br />
      <div className='form-control  form-control-check'>
      <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div> <br />

      <input type='submit' value='Save Task' className='btn ' />
    </form>
    </center>
  )
}
export default AddTask