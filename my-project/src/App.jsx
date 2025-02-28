import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Header from './pages/Header'
import Layout from './pages/Layout'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} /> 
        <Route path='/login' element={<LoginPage />} />
      </Route>
    </Routes>
  )
}

export default App
