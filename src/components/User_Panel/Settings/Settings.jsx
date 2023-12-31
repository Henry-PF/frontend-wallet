import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Card from "../Dashboard/Card/Card";
import "./settings.css";
import { ModalBaja } from "./ModalBaja/ModaBaja";
import { Button } from "react-bootstrap";

const editIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
    <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
  </svg>
);

const Settings = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <section className="">
        <div className="container-fluid">
          <div className="row position-relative">
            <div className="col-auto px-0 min-vh-100 bg-dark">
              <Navbar />
            </div>
            <div className="col bg-light">
              <h1 className="p-3">Mi Cuenta</h1>
              <Button variant="primary" onClick={() => setModalShow(true)} className='position-absolute top-0 end-0 m-4 p-1 bg-danger text-white border-0 text-decoration-none'>
                Cancelar Cuenta
              </Button>

              <ModalBaja show={modalShow} onHide={() => setModalShow(false)} />

              <div className="row m-3 d-flex align-items-center justify-content-center">
                {/* <div className="col settings-img">
                  <img
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className=" object-fit-cover"
                  />
                  <button className="p-2 border-0 bg-secundary rounded">
                    Cambiar Imagen
                  </button>
                </div> */}
              </div>
              <form className="row d-flex flex-column align-items-center">
                <div className="row w-100 d-flex align-items-center">
                  <div className="col d-flex flex-column">
                    <div className="d-flex align-items-center justify-content-between">
                      <label className="w-25 m-3">Nombre</label>
                      <input
                        className="settings-input m-3 w-50"
                        type="text"
                        placeholder={`${localStorage.nombre} ${localStorage.apellido}`}
                        disabled
                      />
                      <button className="border-0 bg-transparent" type="button">
                        {editIcon}
                      </button>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <label className="w-25 m-3">Correo</label>
                      <input
                        className="settings-input m-3 w-50"
                        type="email"
                        placeholder={localStorage.correo_electronico}
                        disabled
                      />
                      <button className="border-0 bg-transparent" type="button">
                        {editIcon}
                      </button>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <label className="w-25 m-3">Contraseña</label>
                      <input
                        className="settings-input m-3 w-50"
                        type="password"
                        name="password"
                        id=""
                        placeholder="**********"
                        disabled
                      />
                      <button className="border-0 bg-transparent" type="button">
                        {editIcon}
                      </button>
                    </div>
                  </div>

                  <div className="col d-flex flex-column">
                    <div className="d-flex align-items-center justify-content-between">
                      <label className="w-25 m-3">DNI / PASAPORTE</label>
                      <input
                        className="settings-input m-3 w-50"
                        type="text"
                        placeholder={localStorage.dni}
                        disabled
                      />
                      <button className="border-0 bg-transparent" type="button">
                        {editIcon}
                      </button>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <label className="w-25 m-3">Teléfono</label>
                      <input
                        className="settings-input m-3 w-50"
                        type="email"
                        placeholder={localStorage.telefono}
                        disabled
                      />
                      <button className="border-0 bg-transparent" type="button">
                        {editIcon}
                      </button>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <label className="w-25 m-3">Dirección</label>
                      <input
                        className="settings-input m-3 w-50"
                        type="password"
                        name="password"
                        id=""
                        placeholder={localStorage.direccion}
                        disabled
                      />
                      <button className="border-0 bg-transparent" type="button">
                        {editIcon}
                      </button>
                    </div>
                  </div>
                </div>
                <input
                  className="w-25 mt-4"
                  type="submit"
                  value="Guardar"
                  disabled
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Settings;
