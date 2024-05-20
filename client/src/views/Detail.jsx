import { useParams, Link } from "react-router-dom"
import useAxios from "../hooks/useAxios"
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";



const Detalle = () => {

    const { id } = useParams()
    const { data, isLoading, error } = useAxios(`http://localhost:8000/api/client/${id}`)


    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>

    const { client } = data

    return (
        <>
            <nav className="navbar ">
                <div className="container-fluid flex justify-center mt-10">
                    <h2 className="text-base font-semibold leading-7 text-gray-900 mr-10">Vista a detalle del cliente</h2>
                    <Button as={Link} to="/admin" className='mb-10' color="failure">Volver</Button>

                </div>
            </nav>
            <div className=" flex justify-center">
                <Card href="#" className="max-w-sm">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {client.clientFullName}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Numero de Celular: {client.clientPhoneNumber}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Barrio: {client.clientDirection}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Productos: {client.products}</p>

                </Card>
            </div>

        </>

    )
}

export default Detalle