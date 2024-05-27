import React, { useState } from 'react';
import LoginForm from "../components/LoginForm";

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex space-x-4 mb-10">
        <button 
          onClick={() => setShowLogin(true)} 
          className={`py-2 px-4 ${showLogin ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
          Iniciar Sesión
        </button>
        <button 
          onClick={() => setShowLogin(false)} 
          className={`py-2 px-4 ${!showLogin ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
          Registrarse
        </button>
      </div>
      {showLogin ? (
        <div className="flex justify-center">
          <LoginForm formType="Iniciar Sesion" />
        </div>
      ) : (
        <div className="flex justify-center">
          <LoginForm formType="Registrarse" />
        </div>
      )}
    </div>
  );
};

export default Login;