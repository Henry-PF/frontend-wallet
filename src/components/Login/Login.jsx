import React, { useState } from "react";
import styles from "./Login.module.css"; 
// import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [errors, setErrors] = useState({});
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const userBDD = {
    email: "usuario1@example.com",
    name: "Usuario Uno",
    password: "Gatocon2!",
  };
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const validate = () => {
    const regexEmail = /^[^@]{1,35}@[^@]+\.[a-zA-Z]{2,}$/;
    const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])(?=\w*[!@#$%^&*()])\S{6,10}$/;
    const newErrors = {};

    if (!userData.email || !userData.password) {
      newErrors.general = "Falta completar campos";
    } else if (
      userData.email === userBDD.email &&
      userData.password === userBDD.password
    ) {
      setAccess(true);
      return
    } 
    // else {
    //   newErrors.general = "Credenciales incorrectas";
    // }

    if (!regexEmail.test(userData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!regexPassword.test(userData.password)) {
      newErrors.password = "Password inválido";
    }

    setErrors(newErrors);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
    validate(); // Validar después de actualizar el estado de userData
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validate();

    if (access) {
      navigate("/home");
    }
  };

  // Encerrar las expresiones JSX dentro de paréntesis
  console.log(userData, "userdata");
  return (
    <div className={styles.App}>
      <form id="msform" className={styles.msform} onSubmit={handleSubmit}>
        <fieldset>
          <h2 className={styles.fsTitle}>LOGIN</h2>
          <br />
          <br />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={userData.email}
          />
          <p>{errors.email}</p>

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={userData.password}
          />
          <p>{errors.password}</p>

          {access ? (
            <Link to="/home">
              <button type="submit">INGRESAR</button>
            </Link>
          ) : null
        //   (
        //     <button
        //       type="button"
        //       onClick={() => alert("Vuelve a ingresar los datos")}
        //     >
        //       INGRESAR
        //     </button>
        //   )
          }

          {/* {Object.keys(errors).length === 0 && userData.email && userData.password ? (
              <input
                name="next"
                className="next action-button"
                value="Sign In"
                onClick={handleSubmit}
              />
            ) : null} */}
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
