import { useState } from 'react'
import './App.css'
import FeedbackDashboard from './components/FeedbackDashboard'
import Navbar from './components/Navbar'
import AddFeedback from "./components/AddFeedback";
import { Route, Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/feedbackDashboard' element={<Navbar child={<FeedbackDashboard/>}/>}></Route>
        <Route path='/addFeedback' element={<Navbar child={ <AddFeedback />}/>}></Route>
      </Routes>
    </>
  )
}

export default App
