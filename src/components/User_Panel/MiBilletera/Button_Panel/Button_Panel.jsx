import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
// import { addToFavorites, removeFromFavorites } from "./actions";
import styles from "./Button_Panel.module.css";
import {
  addToFavorites,
  removeFromFavorites,
  updateSaldo,
} from "../../../../redux/actions";
import Recarga from "../Formularios/Recarga";

const ButtonPanel = () => {
  const { contacts, favorites, saldo } = useSelector((state) => state.user);
  const [activeSection, setActiveSection] = useState("CONTACTOS");
  const [activeTextColor, setActiveTextColor] = useState("blue");
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedFavorite, setSelectedFavorite] = useState(null);

  const handleTransfer = () => {
    const parsedAmount = parseFloat(amount);
  
    if (selectedContact === null) {
      setError("Selecciona un usuario antes de realizar la transferencia");
      return;
    }
    // Validación: El campo no puede ser nulo
    if (!amount || amount.trim() === "") {
      setError("El campo no puede ser nulo");
      return;
    }
  
    // Validación: Si se ingresa una letra, muestra 'solo número'
    if (isNaN(parsedAmount)) {
      setError("Ingresa solo números");
      return;
    }
  
    // Validación: Si se ingresa un número negativo, muestra 'monto inválido'
    if (parsedAmount < 0) {
      setError("Monto inválido");
      return;
    }
  
    // Validación: Si el monto es mayor que el saldo, muestra 'saldo insuficiente'
    if (parsedAmount > saldo) {
      setError("Saldo insuficiente");
      return;
    }
  
    // Si pasa todas las validaciones, muestra un alert y realiza la transferencia
    window.confirm('Esta seguro que desea realizar la operacion?')
    alert("Transferencia realizada con éxito");
    const nuevoSaldo = saldo - parsedAmount;
    dispatch(updateSaldo(nuevoSaldo));
    setAmount("");
    setError("");
  };
  

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  // const filteredContacts = contacts.filter((contact) =>
  //   contact.email.toLowerCase().includes(searchTerm.toLowerCase())  // Error no se sabe el porque 
  // );

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
    // Si el contacto seleccionado es el mismo que se hace clic, deselecciónalo
    if (selectedContact === contact) {
      setSelectedContact(null);
    } else {
      setSelectedContact(contact);
    }
    // Puedes realizar otras acciones si es necesario
  };
  
  const handleFavoriteItemClick = (favorite) => {
    // Si el favorito seleccionado es el mismo que se hace clic, deselecciónalo
    if (selectedFavorite === favorite) {
      setSelectedFavorite(null);
    } else {
      setSelectedFavorite(favorite);
    }
    // Puedes realizar otras acciones si es necesario
  };
  
  
  
  const renderContacts = (filteredContacts) => {
    return (
      <ul className={styles.contactsContainer}>
        {filteredContacts.map((contact) => (
          <li
            key={contact.id}
            className={`${styles.contactItem} ${selectedContact === contact ? styles.selected : ''}`}
            onClick={() => handleContactClick(contact)}
          >
            <div className={styles.contactInfo}>
              <span>{contact.name}</span>
              <span>({contact.email})</span>
            </div>
            <div className={styles.contactButtons}>
              <button onClick={() => handleFavoriteClick(contact)}>
                {favorites.some((fav) => fav.id === contact.id) ? "★" : "☆"}
              </button>
              <button>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    );
  };
  

  const renderFavorites = () => {
    return (
      <ul className={styles.favoritesContainer}>
        {favorites.map((favorite) => (
          <li
            key={favorite.id}
            className={`${styles.contactItem} ${selectedFavorite === favorite ? styles.selected : ''}`}
            onClick={() => handleFavoriteItemClick(favorite)} // Cambia el nombre de la función aquí
          >
            <div className={styles.contactInfo}>
              <span>{favorite.name}</span>
              <span>({favorite.email})</span>
            </div>
            <div className={styles.contactButtons}>
              <button onClick={() => handleFavoriteClick(favorite)}>
                {favorites.some((fav) => fav.id === favorite.id) ? "★" : "☆"}
              </button>
              <button>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    );
  };
  

  return (
    <div className="d-grid gap-2 col-10 mx-auto ">
      <br />
      <Button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#transferirModel"
      >
        Transferir
      </Button>
      <Button
        class="btn btn-warning"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#recargaModel"
      >
        Recarga
      </Button>
      <Button
        class="btn btn-success"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#retirarModel"
      >
        Retirar
      </Button>
      <Button
        class="btn btn-warning"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#pagarModel"
      >
        Pagar
      </Button>

      {/* <!-- MODAL RECARGA--> */}
      <div class="modal fade" id="recargaModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Recarga eligiendo un metodo de pago</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <Recarga/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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
                class="btn btn-secondary"
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
                class="btn btn-secondary"
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
                    //parte del error en las lineas marcadas de arriba esta aca abajo
                    <div>
                      {/* <input
                    type="text"
                    placeholder="Buscar por email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{marginLeft:'30px'}}
                  /> */}
                      {/* {filteredContacts.length > 0 ? (
                        renderContacts(filteredContacts)
                      ) : (                   
                        <p>No se encontraron contactos.</p>
                      )} */}
                    </div>
                  ) : favorites && favorites.length > 0 ? (
                    renderFavorites()
                  ) : (
                    <p>No tienes favoritos.</p>
                  )}
                </div>
              </div>
              {/* TRANSFERENCIA */}
              <div style={{ display: "flex", justifyContent: "center", flexDirection:'column' }}>
                <div>
                  <h3 style={{ fontSize: "18px" }}>
                    Dinero disponible ${saldo}
                  </h3>
                </div>
                <div>
                  <div className={styles.inputError} style={{display:'flex'}}>
                    <input
                      type="text"
                      placeholder="Ingresa el monto"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
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

const mapStateToProps = (state) => {
  return { contacts: state.user && state.user.contacts,
           favorites: state.user.favorites,
           saldo: state.user.saldo
  };
}

export default connect(mapStateToProps, null)(ButtonPanel);