import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
const RecoverPassword = () => {
    
    const [errors, setErrors] = React.useState({});
    const [userData, setUserData] = React.useState({
        email: "",
        password: "",
      });

      const validate = () => {
        const regexEmail = /^[^@]{1,35}@[^@]+\.[a-zA-Z]{2,}$/;
        const errors = {};

        if (!userData.email) {
          errors.email = "no puede estar vacio";
        } else if (!regexEmail.test(userData.email)) {
          errors.email = "debe ser un mail valido";}
    
        setErrors(errors);
      };
      
      const handleChange = (event) => {
          const { name, value } = event.target;
          setUserData((prevUserData) => ({
              ...prevUserData,
              [name]: value,
            }));
            validate();
        };

        const sendLinkHandler = () => { alert("Funcion de recuperacion de contraseña"); }
    return (
        <>
            <Navbar></Navbar>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <section className='d-flex justify-content-center' >
                <div className='card col-sm-31 p-5'>
                    <div className='mb-3'>
                        <h1>Reset Password</h1>
                    </div>
                    <Form>
                        <Form.Group className="mb-5" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" name='email' placeholder="Enter email to recover it" onChange={handleChange} />
                            <span>{errors.email}</span>
                            <br></br>
                            <Form.Text className="text-muted"  >
                                Introduce tu email relacionado con la cuenta para recuperar la contraseña
                            </Form.Text>
                        </Form.Group>
                        <Button variant="success" size='lg' onClick={() => sendLinkHandler()} > Enviar Link </Button>{" "}
                        <NavLink to="/login">
                            <Button variant="danger" size='lg' > Cancelar </Button>
                        </NavLink>
                    </Form>
                </div>

            </section>
        </>
    )
}

export default RecoverPassword