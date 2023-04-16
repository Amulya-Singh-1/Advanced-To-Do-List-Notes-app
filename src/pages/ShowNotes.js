import React from 'react'
import { useState, useEffect } from 'react'
import Searchbar from '../components/Searchbar';
import Grid from '@mui/material/Grid';
import Cards from '../components/Cards';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const ShowNotes = ({ onAdd, showAdd }) => {
  const [tasks, setTasks] = useState([])

    useEffect(() => {
    const getTasks = async () => {
      const newdata = await fetchTasks()
      setTasks(newdata)
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

  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
  
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('Error Deleting This Task')
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(updTask),
    })
    const data = await res.json()
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, reminder: data.reminder } : task
        )
      )
    }

  return (
    <div >
      <br />
        <div  className='row'>
          <div className='ShowNotes col-lg-9 col-md-9'  >
            <br /> <br /> <br />
            <center>
            <h1> List of To-Do's </h1>  <br />
            <Grid container width='100%' justify-content='center' rowSpacing={3} columnSpacing={1} spacing={8} margin={2} >
               { tasks.map(task =>(
                  <Grid item key={task.id} xs={12} md={6} lg={6}> 
                     <Cards task={task} onDelete={deleteTask} onToggle={toggleReminder} /> 
                  </Grid>
              )) }
            </Grid>
            </center>
             <br />
            </div>
            <br /> <br />
            <div className='searchbar' >
              <br /> <br />
              <Searchbar />
              <br /> <br />
            </div>
        </div>
    </div>         
  )
}

export default ShowNotes