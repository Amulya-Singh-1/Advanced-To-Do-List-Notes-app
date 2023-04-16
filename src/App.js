import { useState } from 'react'
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ShowNotes from './pages/ShowNotes';
import CreateNotes from './pages/CreateNotes';
import Layout from './components/Layout';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path='/'
            element={ <ShowNotes showAdd={showAddTask} onAdd={()=> setShowAddTask(!showAddTask)} /> }
          />
          
          <Route path='/create' element={ <CreateNotes /> }
          />
        </Routes> 
            
      </Layout> 
    </Router>   
  )
}
export default App