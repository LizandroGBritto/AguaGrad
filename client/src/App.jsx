import { Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './views/Home';
import Admin from './views/Admin';
import Detalle from './views/Detail';
import CreateClient from './views/CreateClient';
import UpdateClient from './views/UpdateClient';
import Login from './views/LoginRegister';
import UserContext from './context/UserContext';

function App() {
  const [clients, setClients] = useState([]);
  const userDetails = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(userDetails || null);

  const updateClient = (client) => {
    setClients([...clients, client]);
  };

  const setUserKeyValue = (clave, valor) => {
    setUser({
      ...user,
      [clave]: valor,
    });
  };

  const objetContext = {
    user,
    setUser,
    setUserKeyValue,
  };

  return (
    <UserContext.Provider value={objetContext}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={user ? <Navigate to="/admin/panel" /> : <Login />} />
        <Route path="/admin/panel" element={user ? <Admin clients={clients} setClients={setClients} /> : <Navigate to="/admin" />} />
        <Route path="/client/:id" element={<Detalle />} />
        <Route path="/new" element={<CreateClient updateClient={updateClient} />} />
        <Route path="/client/:id/update" element={<UpdateClient updateClient={updateClient} />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
