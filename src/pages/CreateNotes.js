import { useState, useEffect } from 'react'
import React from 'react';
import '../App.css'
import AddTask from '../components/AddTask';
import Header from '../components/Header';


const CreateNotes = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

    useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
    }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()
    setTasks([...tasks, data])
  }

  return (
    <div>
      <br /> <br /> <br /> <br />

        <Header style={{display:'flex', justifycontent:'center'}}
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        
        {showAddTask && <AddTask onAdd={addTask} />}

    </div>
  )
}

export default CreateNotes