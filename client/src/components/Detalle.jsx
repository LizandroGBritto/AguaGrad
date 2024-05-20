import { useParams, Link } from "react-router-dom"
import useAxios from "../hooks/useAxios"
import { Card } from "flowbite-react";



const Detalle = () => {

    const { id } = useParams()
    const { data, isLoading, error } = useAxios(`http://localhost:8000/api/client/${id}`)


    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>

    const { client } = data

    return (
        <>
            <nav className="navbar ">
                <div className="container-fluid">
                    <h2 className='text-center ml-3'>Vista a detalle del  Producto</h2>
                    <Link to="/" className="btn btn-danger ">Go Back</Link>
                </div>
            </nav>

            <Card href="#" className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {client.clientFullName}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
        </>

    )
}

export default Detalle