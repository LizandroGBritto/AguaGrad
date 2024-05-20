import { Route, Routes} from 'react-router-dom'
import {useState} from 'react'
import Home from './views/Home'
import Admin from './views/Admin'
import Detalle from './views/Detail'
import CreateClient from './views/CreateClient'
import UpdateClient from './views/UpdateClient'
import Login from './views/Login'

function App() {

  const [clients, setClients] = useState([])
  const updateClient = (client) => {
    setClients([...clients, client])
}


  return (
    <>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin clients={clients} setClients={setClients} />} />
      <Route path='/client/:id' element={<Detalle />} />
      <Route path='/new' element = {<CreateClient updateClient={updateClient} />} />
      <Route path = '/client/:id/update' element = {<UpdateClient updateClient={updateClient} />} />
    </Routes>
    </>
  )
}

export default App
