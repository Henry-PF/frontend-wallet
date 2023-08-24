import React from "react";
import styles from './QuickTransaction.module.css'

const QuickTransaction = () => {

  const user = {
    name: "Pepito",
    id: "222-fff",
    saldo: 200000,
    favorites: [
      { name: "Nombre1", id: "id1" },
      { name: "Nombre2", id: "id2" },
      { name: "Nombre3", id: "id3" },
    ],
  };

  return (
    <div className={styles.QuickTransactionContainer}>
      <div className={styles.text}>
        <h3>Transferencia Rápida</h3>
        <h3>Dinero disponible ${user.saldo}</h3>
      </div>

      <div className={styles.favorites}>
  {user.favorites.map((e) => (
    <div key={e.id}>
      <button
        onClick={() => {
          alert("Favorito seleccionado");
        }}
        className={styles.buttonFav}
        id={e.id}
      >        {e.name.charAt(0)}
      </button>
      <p >{e.name}</p>
    </div>
  ))}
</div>


      <div className={styles.transferContainer}>
        <input
          type="text"
          placeholder="Ingresa el monto"
          className={styles.inputTransfer}
        />
        <button
          className={styles.buttonTransfer}
          onClick={() => {
            alert("debe seleccionar usuario y monto a enviar");
          }}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default QuickTransaction;
