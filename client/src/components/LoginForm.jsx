import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import * as Yup from 'yup';
import { Formik } from 'formik'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {


    const handleSubmit = (values, {setSubmitting, resetForm, setErrors}) => { 
        loginUser(values, setErrors);
    }
    const navigate = useNavigate(); 
    const loginUser = async (values, setErrors) => {
        try {
            let res = await axios.post(
                "http://localhost:8000/api/auth/login",
                values,
                { withCredentials: true }
            );
            setUser(res.data.user);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            navigate("/admin");
        } catch (err) {
            console.log("Error: ", err.response);
            setErrors({general: err.response.data.msg});
        }
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().min(8).required(),
    });


    return (
        <Formik
            initialValues={{
                userName: '',
                password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({isSubmitting, errors}) => (
                <form className="flex max-w-md flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Nombre de Usuario" />
                        </div>
                        <TextInput id="email1" type="text" placeholder="Usuario" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Contraseña" />
                        </div>
                        <TextInput id="password1" type="password" required />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <Button type="submit" disabled= {isSubmitting}>Submit</Button>
                </form>
            )}
        </Formik>
    );
}

export default LoginForm