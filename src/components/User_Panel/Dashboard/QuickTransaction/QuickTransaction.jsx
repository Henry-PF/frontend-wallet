import React from "react";
import styles from "./QuickTransaction.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSaldo } from "../../../../redux/actions";


const QuickTransaction = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const { favorites, saldo } = useSelector(state => state.user);
  console.log(favorites, 'fav de user DE REDUX')
  console.log(amount, 'soy el amount')
  const dispatch = useDispatch();

  const handleSelected = (id) => {
    if (selectedButton === id) {
      setSelectedButton(null); // Deselecciona si el botón ya está seleccionado
    } else {
      setSelectedButton(id); // Selecciona si el botón no está seleccionado
    }
  };
  const handleAmountChange = (event) => {
    const input = event.target.value;
    const saldoActual = saldo; // Obtén el saldo actual del usuario

    if (/^[0-9]*$/.test(input) || input === "") {
      setAmount(input);
      setError("");

      if (input !== "" && parseFloat(input) > saldoActual) {
        setError("Saldo insuficiente");
      } else {
        setError(""); // Borra el mensaje de error si el monto es válido
      }
    } else {
      setError("Solo se admiten números");
    }
  };


  const handleButtonTransfer = () => {
    if (!selectedButton || amount === "") {
      alert("Debe seleccionar usuario y monto a enviar");
    } else {
      const saldoActual = saldo;
      const nuevoSaldo = saldoActual - amount; // Asegúrate de convertir el amount a número

      dispatch(updateSaldo(nuevoSaldo)); // Dispatch de la acción con el nuevo saldo
      alert("Transferencia realizada con éxito");
      setSelectedButton(null);
      setAmount("")
    }
  }

  return (
    <>
      <div className={styles.QuickTransactionContainer}>
        <div className={styles.text}>
          <h3>Transferencia Rápida</h3>
          <h3>Dinero disponible ${saldo}</h3>
        </div>

        <div className={styles.favorites}>
          {favorites?.map((e) => (
            console.log(e, 'cada elemento de favorites'),
            <div key={e.id}>
              <button
                onClick={() => handleSelected(e.id)}
                className={`${styles.buttonFav} ${selectedButton === e.id ? styles.selected : ''}`}
              >
                {e.name.charAt(0)}
              </button>
              <p>{e.name}</p>
            </div>
          ))}
        </div>

        <div className={styles.transferContainer}>
          <div className={styles.inputError}>
            <input
              type="text"
              placeholder="Ingresa el monto"
              className={`${styles.inputTransfer} ${error && styles.errorInput}`}
              value={amount}
              onChange={handleAmountChange}
            />
            <p className={styles.errorMessage}>{error}</p>
          </div>

          <button
            className={styles.buttonTransfer}
            onClick={handleButtonTransfer}
          >
            Enviar
          </button>

        </div>
      </div>
    </>
  );
};

export default QuickTransaction;
