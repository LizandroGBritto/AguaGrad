import { useState, useEffect } from 'react';
import DeleteButton from '../components/DeleteButton';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jsPDF } from 'jspdf';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";



const Admin = ({ clients, setClients }) => {

    const deleteClient = (clientId) => {
        setClients(clients.filter(client => client._id !== clientId));
    };
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/api/client')
            .then(res => {
                setClients(res.data.clients)
                setIsLoading(false)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }, [setClients])

    if (isLoading) return <h1>Loading...</h1>;

    const downloadPDF = () => {
        const doc = new jsPDF();
        let yPos = 10;

        clients.forEach(client => {
            doc.text(`Nombre y apellido: ${client.clientFullName}`, 10, yPos);
            doc.text(`Número de celular: ${client.clientPhoneNumber}`, 10, yPos + 10);
            doc.text(`Barrio/Localidad: ${client.clientDirection}`, 10, yPos + 20);
            doc.text(`Productos: ${client.products}`, 10, yPos + 20);
            doc.text("--------------------------------------------------", 10, yPos + 25);
            yPos += 30;
        });

        doc.save("lista_de_clientes.pdf");
    };

    return (
        <div>
            <nav className="navbar">
                <Navbar fluid rounded>
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Panel de Administracion</span>
                    <NavbarToggle />
                    <NavbarCollapse>
                        <NavbarLink as={Link} to="/new">
                            Crear Cliente
                        </NavbarLink>
                        <button onClick={downloadPDF}>Descargar PDF</button>
                    </NavbarCollapse>
                </Navbar>
            </nav>

            <div className="overflow-x-auto">
                <Table hoverable>
                    <TableHead>
                        <TableHeadCell>Nombre</TableHeadCell>
                        <TableHeadCell>Acciones</TableHeadCell>
                    </TableHead>
                    <TableBody className="divide-y">
                        {clients.map(client => (
                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800" key={client._id}>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {client.clientFullName}
                                </TableCell>
                                <TableCell>
                                    <Link className="btn btn-warning m-2" to={`/client/${client._id}`}>Ver cliente</Link>
                                    <Link className="btn btn-warning m-2" to={`/client/${client._id}/update`}>Actualizar cliente</Link>
                                    <DeleteButton clientId={client._id} onDelete={deleteClient} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default Admin;
