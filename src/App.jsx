import './App.scss'
import Profile from './components/profile/profile'
import Menu from './components/menu/menu'
import Auto from './components/auto/auto'
import Politic from './components/politic/politic'
import Story from './components/story/story'
import Support from './components/support/support'
import {
  BrowserRouter, Route, Routes
} 
from 'react-router-dom'

function App() {
  return (
    
      <BrowserRouter>
        <Menu />
        <container>
        <Routes>
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Auto" element={<Auto />} />
          <Route path="/Story" element={<Story />} />
          <Route path="/Politic" element={<Politic />} />
          <Route path="/Support" element={<Support />} />
        </Routes>
        </container>
      </BrowserRouter>  
    
  )
}

export default App
