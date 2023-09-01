import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { addToFavorites, removeFromFavorites } from "./actions";
import styles from "./Button_Panel.module.css";
import { addToFavorites, removeFromFavorites } from "../../../../redux/actions";

const ButtonPanel = () => {
  const { contacts, favorites } = useSelector((state) => state.user);
  console.log(contacts);
  const [activeSection, setActiveSection] = useState("CONTACTOS");
  const dispatch = useDispatch();

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleFavoriteClick = (contact) => {
   
    const isFavorite = favorites.some((fav) => fav.id === contact.id);

    if (isFavorite) {
      dispatch(removeFromFavorites(contact.id));
    } else {
      dispatch(addToFavorites(contact));
    }
  };
  // handleDeleteClick(){}
  //MAPEO DE TODOS LOS CONTACTOS
  const renderContacts = () => {
    return (
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className={styles.contactItem}>
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
//al renderizar favoritos quisiera que todos comiencen con la estrella en negro 
//al hacer clic en la estrella se debe ejecutar la funcion de handlefavoriteclic , que se encarga de eliminar o agregar favoritos 
  const renderFavorites = (contact) => {
    return (
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id} className={styles.contactItem}>
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
  // const handleEmailChange = event => {
  //   const userEmail = event.target.value;
  //   const user = users.find(user => user.email === userEmail);
  //   setSelectedUser(user);
  // };

  return (
    <div class="d-grid gap-2 col-10 mx-auto ">
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
              Funcion para poder depositar plata a la cuenta
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
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Elegí a qué cuenta transferir
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div>
                <h6
                  onClick={() => handleSectionClick("CONTACTOS")}
                  style={{ cursor: "pointer" }}
                >
                  Contactos
                </h6>
                <h6
                  onClick={() => handleSectionClick("FAVORITOS")}
                  style={{ cursor: "pointer" }}
                >
                  Favoritos
                </h6>
              </div>
              {activeSection === "CONTACTOS" ? (
                contacts && contacts.length > 0 ? (
                  renderContacts()
                ) : (
                  <p>No tienes contactos.</p>
                )
              ) : favorites && favorites.length > 0 ? (
                renderFavorites()
              ) : (
                <p>No tienes favoritos.</p>
              )}
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
    </div>
  );
};

export default ButtonPanel;
