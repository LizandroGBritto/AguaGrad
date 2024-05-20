import { useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import Swal from 'sweetalert2';
import useForm from '../hooks/useForm';
import { Link, useNavigate } from 'react-router-dom';

const CreateClient = ({ updateClient }) => {
    const initialValues = {
        clientFullName: '',
        clientPhoneNumber: '',
        clientDirection: ''
    };
    const navigate = useNavigate();

    const { values: client, handleChange, clearData } = useForm(initialValues);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/client/new', client)
            .then(res => {
                console.log(res);
                updateClient(res.data.client);
                clearData();
                setError('');
                Swal.fire({
                    icon: 'success',
                    title: 'Excelente',
                    text: 'Agregaste un nuevo cliente!',
                });
                navigate('/admin');
            })
            .catch(err => {
                console.log(err);
                setError(err.response?.data?.error?.message || 'An error occurred');
            });
    };

    return (
        <div className='buyContainer' id='pedido'>
            <div className="buyCard">
                <h1>Agregar Cliente <Link to="/admin" className="btn btn-danger ">Cancelar</Link> </h1>
                <Form handleSubmit={handleSubmit} error={error} client={client} handleChange={handleChange} />
            </div>
        </div>
    )
}

export default CreateClient;