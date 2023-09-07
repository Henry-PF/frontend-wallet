import React from "react";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
// import { fetchContacts } from './actions';
// import { addToFavorites, removeFromFavorites } from "./actions";
import styles from "./Button_Panel.module.css";
import {
  addToFavorites,
  fetchContacts,
  removeFromFavorites,
  updateSaldo,
} from "../../../../redux/actions";
import Recarga from "../Formularios/Recarga";
import axios from "axios";

const ButtonPanel = () => {
  const { contacts, favorites, saldo } = useSelector((state) => state.user);
  const [concepto, setConcepto] = useState("");

  const [activeSection, setActiveSection] = useState("CONTACTOS");
  const [activeTextColor, setActiveTextColor] = useState("blue");
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedFavorite, setSelectedFavorite] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/usuarios/getAll")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data, "SOY DATA");
        dispatch(fetchContacts(data.data));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleConceptoChange = (e) => {
    // Actualizar el estado 'concepto' cuando cambie el campo de entrada
    setConcepto(e.target.value);
  };

  const handleTransfer = async () => {
    const parsedAmount = parseFloat(amount);

    if (selectedContact === null) {
      setError("Selecciona un usuario antes de realizar la transferencia");
      return;
    }
    if (!amount || amount.trim() === "") {
      setError("El campo no puede ser nulo");
      return;
    }

    if (isNaN(parsedAmount)) {
      setError("Ingresa solo números");
      return;
    }

    if (parsedAmount < 0) {
      setError("Monto inválido");
      return;
    }

    if (parsedAmount > saldo) {
      setError("Saldo insuficiente");
      return;
    }

    const correoElectronico = selectedContact.datos_persona.correo_electronico;
    console.log(
      correoElectronico,
      "CORREO ELECTRONICO DEL CONTACTO SELECCIONADO"
    );

    try {
      const response1 = await axios.post(
        "http://localhost:3001/usuarios/getUserTrans",
        {
          email: correoElectronico,
        }
      );

      if (response1.data.error) {
        throw new Error(response1.data.error);
      }
      //ESTA SERIA LA INFO DEL USUARIO
      const userData = response1.data;

      const transactionData = {
        //PONER UN CAMPO QUE PIDA CONCEPTO
        concepto: concepto,
        //OBTENER EL EMAIL DE LOCALSTORAGE DEL EMISOR
        // id_usuario_emisor: "43",
correo_electronico: localStorage.getItem("correo_electronico"),
        monto: amount,
        id_usuario_receptor: userData.id,
        //OBTENER LA FECHA EN LA QUE SE HIZO CLIC AL BOTON DE ENVIAR
        fecha: "06/09/2023",
      };

      const response2 = await axios.post(
        "http://localhost:3001/transactions/",
        transactionData
      );

      if (response2.data.error) {
        throw new Error(response2.data.error);
      }

      alert("Transferencia realizada con éxito");
      const nuevoSaldo = saldo - parsedAmount;
      dispatch(updateSaldo(nuevoSaldo));
      setAmount("");
      setError("");
    } catch (error) {
      console.error("Error en la solicitud:", error.message);
      setError(error.message);
    }
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setActiveTextColor(section === "CONTACTOS" ? "blue" : "black");
  };

  const handleFavoriteClick = (contact) => {
    const isFavorite = favorites.some((fav) => fav.id === contact.id);

    if (isFavorite) {
      dispatch(removeFromFavorites(contact.id));
    } else {
      dispatch(addToFavorites(contact));
    }
  };
  const handleContactClick = (contact) => {
    if (selectedContact === contact) {
      setSelectedContact(null);
    } else {
      setSelectedContact(contact);
    }
  };

  const handleFavoriteItemClick = (favorite) => {
    if (selectedFavorite === favorite) {
      setSelectedFavorite(null);
    } else {
      setSelectedFavorite(favorite);
    }
  };

  const renderContacts = () => {
    const filteredContacts = contacts.filter((contact) =>
      contact.datos_persona.correo_electronico.includes(searchTerm)
    );
    console.log(filteredContacts);

    return (
      <div className={styles.contactsContainerWrapper}>
        <ul className={styles.contactsContainer}>
          {filteredContacts.map((contact) => (
            <li
              key={contact.id}
              className={`${styles.contactItem} ${
                selectedContact === contact ? styles.selected : ""
              }`}
              onClick={() => handleContactClick(contact)}
            >
              <div className={styles.contactInfo}>
                <span>{contact.datos_persona.nombre_usuario}</span>
                <span>({contact.datos_persona.correo_electronico})</span>
              </div>
              <div className={styles.contactButtons}>
                <button
                  onClick={() => handleFavoriteClick(contact)}
                  className={
                    favorites.some((fav) => fav.id === contact.id)
                      ? "active"
                      : ""
                  }
                >
                  {favorites.some((fav) => fav.id === contact.id) ? "★" : "☆"}
                </button>
                {/* <button>🗑️</button> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderFavorites = () => {
    return (
      <ul className={styles.favoritesContainer}>
        {favorites.map((favorite) => (
          <li
            key={favorite.id}
            className={`${styles.contactItem} ${
              selectedFavorite === favorite ? styles.selected : ""
            }`}
            onClick={() => handleFavoriteItemClick(favorite)}
          >
            <div className={styles.contactInfo}>
              <span>{favorite.datos_persona.nombre_usuario}</span>
              <span>({favorite.datos_persona.correo_electronico})</span>
            </div>
            <div className={styles.contactButtons}>
              <button onClick={() => handleFavoriteClick(favorite)}>
                {favorites.some((fav) => fav.id === favorite.id) ? "★" : "☆"}
              </button>
              {/* <button>🗑️</button> */}
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="d-grid gap-2 col-10 mx-auto ">
      <br />
      <button
        class="btn btn-dark"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#transferirModel"
      >
        Transferir
      </button>
      <button
        class="btn btn-dark"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#recargaModel"
      >
        Recarga
      </button>
      <button
        class="btn btn-dark"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#retirarModel"
      >
        Retirar
      </button>
      <button
        class="btn btn-dark"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#pagarModel"
      >
        Pagar
      </button>

      {/* <!-- MODAL RECARGA--> */}
      <div
        class="modal fade"
        id="recargaModel"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Recarga eligiendo un metodo de pago
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <Recarga />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- MODAL PAGAR--> */}
      <div
        class="modal fade"
        id="pagarModel"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Funcion para poder pagar</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-dark"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- MODAL RETIRAR--> */}
      <div
        class="modal fade"
        id="retirarModel"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">
              Funcion para poder retirar el dinero abonado
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-dark"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- MODAL TRANSFERIR --> */}
      <div
        className="modal fade"
        id="transferirModel"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div
              class="modal-header"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h5 class="modal-title" id="exampleModalLabel">
                  Elegí a qué cuenta transferir
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "15px",
                    fontSize: "15px",
                  }}
                ></button>
              </div>

              <input
                type="text"
                placeholder="Buscar por email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "228px",
                  border: "1px solid #ccc",
                  padding: "2px",
                }}
              />
            </div>

            <div
              className="modal-body"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "350px",
                }}
              >
                <div className={styles.contactsFavs}>
                  <h6
                    onClick={() => handleSectionClick("CONTACTOS")}
                    style={{
                      cursor: "pointer",
                      color:
                        activeSection === "CONTACTOS"
                          ? activeTextColor
                          : "black",
                    }}
                  >
                    Contactos
                  </h6>
                  <h6
                    onClick={() => handleSectionClick("FAVORITOS")}
                    style={{
                      cursor: "pointer",
                      color:
                        activeSection === "FAVORITOS"
                          ? activeTextColor
                          : "black",
                    }}
                  >
                    Favoritos
                  </h6>
                </div>
                {/* //BUSCADOR */}
                <div>
                  {activeSection === "CONTACTOS" ? (
                    <div>
                      {renderContacts()}{" "}
                      {/* Renderiza la lista de contactos aquí */}
                    </div>
                  ) : favorites && favorites.length > 0 ? (
                    renderFavorites()
                  ) : (
                    <p>No tienes favoritos.</p>
                  )}
                </div>
              </div>
              {/* TRANSFERENCIA */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "18px" }}>
                    Dinero disponible ${saldo}
                  </h3>
                </div>
                {/* contenedor de concepto y transferencia */}
                <div  className={styles.conceptoTransfer}>
                  <div
                    className={styles.inputError}
                    // style={{ display: "flex" }}
                  >
                    <input
                      type="text"
                      placeholder="Ingresa el monto"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Concepto"
                      value={concepto}
                      onChange={handleConceptoChange}
                      style={{ marginTop: "10px" }}
                    />
                    {error && <p className={styles.errorMessage}>{error}</p>}
                    <button
                      className={styles.buttonTransfer}
                      onClick={handleTransfer}
                      type="button"
                      class="btn btn-secondary"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="modal-footer">
           

            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return { contacts: state.user && state.user.contacts,
//            favorites: state.user.favorites,
//            saldo: state.user.saldo
//   };
// }

// export default connect(mapStateToProps, null)(ButtonPanel);
export default ButtonPanel;
