import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useHistory para redirigir
import { ModalTerminos } from "../ModalTerminos/ModalTerminos";
import styles from './ModalBaja.module.css'

export const ModalBaja = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const [modalTerminosShow, setModalTerminosShow] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAceptarClick = () => {
    if (isChecked && selectedOption !== "") {
      const isConfirmed = window.confirm(
        "¿Está seguro de que desea cancelar su cuenta?"
      );

      if (isConfirmed) {
        // Simulando la acción de cancelar la cuenta
        // Puedes reemplazar esta parte con tu lógica real
        // ...

        // Mostrar alert y redirigir
        alert("Cuenta cancelada");
        navigate("/register");
      }
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cancelación de Cuenta SmartPay
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Motivo de Cancelación</h4>
        <select
          className="form-select mb-3"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="">Selecciona un motivo...</option>
          <option value="motivo1">Ya no necesito el servicio</option>
          <option value="motivo2">Encontré una alternativa mejor</option>
          <option value="motivo3">Problemas con la plataforma</option>
          <option value="motivo4">Cambios en mis circunstancias</option>
          <option value="motivo5">Demasiado caro</option>
          <option value="motivo6">No estoy satisfecho con la calidad</option>
        </select>
        <textarea
          className="form-control mb-3"
          rows="4"
          placeholder="Explique el motivo de la cancelación..."
        ></textarea>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="termsCheckbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <div className={styles.terminosContainer}>
            <a
              href="#"
              onClick={() => setModalTerminosShow(true)}
            >
              términos y condiciones
            </a>
            <label className="form-check-label" htmlFor="termsCheckbox">
              Acepto los términos y condiciones
            </label>
          </div>

        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={props.onHide}>
          Cancelar
        </Button>
        <Button
          variant="dark"
          onClick={handleAceptarClick}
          disabled={!isChecked || selectedOption === ""}
        >
          Aceptar
        </Button>
      </Modal.Footer>
      <ModalTerminos show={modalTerminosShow} onHide={() => setModalTerminosShow(false)} />

    </Modal>
  );
};
