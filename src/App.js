import { useState, useEffect } from 'react';
import AllNotes from './pages/AllNotes';
import SingleNote from './pages/SingleNote';
import Form from './pages/Form';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'reactstrap';


const apiURL = 'https://notes-api-backend.herokuapp.com'

function App() {
  const [posts, setPosts] = useState([])

  const getNotes = async () => {
    const response = await fetch(apiURL + '/notes/')
    const data = await response.json()
    setPosts(data)
  }

  useEffect(()=> {
    getNotes()
  }, [])

  const handleFormSubmission = async (data, type) => {
    if (type === 'new'){
      const response = await fetch(`${apiURL}/notes/`, {
        method:'post',
        headers : {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      getNotes()
      
    } else {
      const response = await fetch(`${apiURL}/notes/${data.id}/`, {
        method:'put',
        headers : {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      getNotes()
    }
  }

  const deleteNote =  async (id) => {
    const response = await fetch(`${apiURL}/notes/${id}/`, {
      method: 'delete'
    })
    getNotes()
  }
  
  


  return (
    <div className="App">
    <h1> My Notes ✍🏽</h1>
    <Routes>
      <Route 
      path='/'
      element={<AllNotes posts={posts} deleteNote={deleteNote}/>}
      />
      <Route 
      path='/post/:id'
      element={<SingleNote posts={posts}/>}
      />
      <Route 
      path='/new'
      element={<Form  posts={posts} handleSubmit={handleFormSubmission} buttonLabel = 'Add Note' formType='new'/>}
      />
      <Route 
      path='/edit/:id'
      element={<Form posts={posts} handleSubmit={handleFormSubmission} buttonLabel= 'Edit Note' formType= 'edit'/>}
      />
    </Routes>
    </div>
  )
}

export default App;
