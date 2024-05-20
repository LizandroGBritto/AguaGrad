
import { useState, useEffect } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import Swal from 'sweetalert2';
import useForm from '../hooks/useForm';
import { Link, useNavigate, useParams } from 'react-router-dom';    
import { Button } from "flowbite-react";


const UpdateClient = () => {

    const { id } = useParams();

    const initialValues = {
        clientFullName: 'cargando...',
        clientPhoneNumber: 'cargando...',
        clientDirection: 'cargando...'
    };    const navigate = useNavigate();

    const { values: client, handleChange, setValues } = useForm(initialValues);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/client/${id}`)
            .then(res => {
                console.log(res);
                setValues({
                    clientFullName: res.data.client.clientFullName,
                    clientPhoneNumber: res.data.client.clientPhoneNumber,
                    clientDirection: res.data.client.clientDirection
            });
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/client/${id}`, client)
            .then(res => {
                console.log(res);
                setError('');
                Swal.fire({
                    icon: 'success',
                    title: 'Excelente',
                    text: 'Actualizaste un cliente!',
                });
                navigate('/admin');
            })
            .catch(err => {
                console.log(err);
                setError(err.response?.data?.error?.message || 'An error occurred');
            });
    };

    return (
        <div className="buyContainer" id="pedido">
            <div className="buyCard">
                <div className=" flex ">
                    <h2 className="text-base font-semibold leading-7 text-gray-900 mr-10">Agregar Cliente</h2>
                  <Button as={Link} to="/admin" className='ml-10' color="failure">Cancelar</Button>

                </div>
                <Form handleSubmit={handleSubmit} error={error} client={client} handleChange={handleChange} />
            </div>
        </div>
    );
}

export default UpdateClient;