
import PropTypes from 'prop-types';

const Form = ({ handleSubmit, error, client, handleChange }) => {
    return (
        <>
            <div className="text-danger">{error}</div>
            <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900" >Nombre Completo</label>
                                <div className="mt-2">
                                    <input value={client.clientFullName} onChange={handleChange} type="text" name="clientFullName" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900" >Numero de Celular</label>
                                <div className="mt-2">
                                    <input value={client.clientPhoneNumber} onChange={handleChange} id="email" name="clientPhoneNumber" type="text" autoComplete="number" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Direccion</label>
                                <div className="mt-2">
                                    <input value={client.clientDirection} onChange={handleChange} type="text" name="clientDirection" id="street-address" autoComplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>




                        </div>
                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enviar</button>
                        </div>
                    </div>
                </div>
            </form>

        </>

    )
}

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    client: PropTypes.shape({
        clientFullName: PropTypes.string.isRequired,
        clientPhoneNumber: PropTypes.number.isRequired,
        clientDirection: PropTypes.string.isRequired
    }).isRequired,
    handleChange: PropTypes.func.isRequired
};

export default Form;