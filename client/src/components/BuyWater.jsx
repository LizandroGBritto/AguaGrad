import { useState } from 'react';
import Form from './Form';
import axios from 'axios';
import Swal from 'sweetalert2';
import useForm from '../hooks/useForm';

const BuyWater = ({ updateClient }) => {
    const initialValues = {
        clientFullName: '',
        clientPhoneNumber: '',
        clientDirection: ''
    };

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
                    title: 'Datos guardados',
                    text: "Quieres ir al whatsapp para confirmar la compra?",
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Ir al whatsapp!'
            
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "https://api.whatsapp.com/send?phone=595975655014";
                    }
                });
            })
            .catch(err => {
                console.log(err);
                setError(err.response?.data?.error?.message || 'An error occurred');
            });
    };

    return (
        <div className='buyContainer mt-10' id='pedido'>
            <div className="buyCard">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Quiero comprar!</h2>
                <Form handleSubmit={handleSubmit} error={error} client={client} handleChange={handleChange} />
            </div>
        </div>
    )
}

export default BuyWater;