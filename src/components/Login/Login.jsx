import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
// import axios from 'axios';


const Login = () => {
  const [errors, setErrors] = useState({});
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const userBDD = {
    email: "usuario1@example.com",
    name: "Usuario Uno",
    password: "Password123",
  };
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const validate = () => {
    const regexEmail = /^[^@]{1,35}@[^@]+\.[a-zA-Z]{2,}$/;
    const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    //     Contiene al menos un dígito.
    // Contiene al menos una letra mayúscula.
    // Contiene al menos una letra minúscula.
    // Tiene una longitud total de 8 a 16 caracteres.
    // Puede contener cualquier carácter que no sea un espacio en blanco.

    const errors = {};

    if (!userData.email) {
      errors.email = "no puede estar vacio";
    } else if (!regexEmail.test(userData.email)) {
      errors.email = "debe ser un mail valido";
    } else if (!userData.password) {
      errors.password = "no puede estar vacio";
    } else if (!regexPassword.test(userData.password)) {
      errors.password = "debe ser una password valida";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      setAccess(true);
    } else {
      setAccess(false);
    }

 
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
    validate(); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // validate();

    if (access) {
      navigate("/");
    }
  };

// const handleSubmit = async (event) => {
//   event.preventDefault();

//   try {
//     const response = await axios.post('URL_DEL_BACKEND', {
//       email: userData.email,
//       password: userData.password,
//     });

 
//   } catch (error) {
  
//   }
// };


  console.log(userData, "userdata");
  console.log(access, "ACCESS");
  console.log(errors, "ERRORS");
  return (
    <div className={styles.loginContainer}>
    <Navbar />
    <form id="msform" className={styles.msform} onSubmit={handleSubmit}>
      <fieldset>
        <h2 className={styles.fsTitle}>LOGIN</h2>
        <br />
        <div className={styles.fieldGroup}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={userData.email}
            />
          </div>
          <div className={styles.errorContainer}>
            <span>{errors.email}</span>
          </div>
        </div>
        <div className={styles.fieldGroup}>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={userData.password}
            />
          </div>
          <div className={styles.errorContainer}>
            <span>{errors.password}</span>
          </div>
        </div>
        <button className={styles.buttonLogIn} type="submit" disabled={!access}>
          INGRESAR
        </button>
        <button className={styles.buttonSigIn} type="button" onClick={()=>{alert('vamos a registrarnos!')}}>
          SIGIN
        </button>
    
      </fieldset>
    </form>
  </div>
  
  );
};

export default Login;
