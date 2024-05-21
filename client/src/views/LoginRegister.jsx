import LoginForm from "../components/LoginForm"

const Login = () => {
  return (
    <>
      <div className=" flex justify-center mt-10">
        <LoginForm formType="Iniciar Sesion" />
      </div>
      <div className=" flex justify-center mt-10">
        <LoginForm formType="Registrarse" />
      </div>
    </>

  )
}

export default Login