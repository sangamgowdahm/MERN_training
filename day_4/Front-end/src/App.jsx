import { useState } from 'react'
import React from 'react'
import{Routes, Route} from 'react-router-dom'
import TrainerList from './components/TrainerList'
import AddTrainer from './components/AddTrainer'
import EditTrainer from './components/EditTrainer'

import './App.css'

function App() {
  

  return (
   <div className='container'>
    <h1 className='my-4-text-center'>Trainer mangement</h1>
    <Routes>
      <Route path='/' element={<TrainerList/>}/>
      <Route path='/add' element={<AddTrainer/>}/>
      <Route path='/edit/:id' element={<EditTrainer/>}/>
    </Routes>

   </div>
  )
}

export default App
