import React from 'react'
import Button from 'react-bootstrap/Button';
import Recarga from '../Formularios/Recarga';
const ButtonPanel = () => {
  return (
    <div className="d-grid gap-2 col-10 mx-auto ">
      <br />
      <Button className="btn btn-primary" type='button' data-bs-toggle="modal" data-bs-target="#transferirModel">Transferir</Button>
      <Button className="btn btn-warning" type='button' data-bs-toggle="modal" data-bs-target="#recargaModel" >Recarga</Button>
      <Button className="btn btn-success" type='button' data-bs-toggle="modal" data-bs-target="#retirarModel">Retirar</Button>
      <Button className="btn btn-warning" type='button' data-bs-toggle="modal" data-bs-target="#pagarModel">Pagar</Button>


      {/* <!-- MODAL RECARGA--> */}
      <div className="modal fade" id="recargaModel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Recarga />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- MODAL PAGAR--> */}
      <div className="modal fade" id="pagarModel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Funcion para poder pagar
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- MODAL RETIRAR--> */}
      <div className="modal fade" id="retirarModel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Funcion para poder retirar el dinero abonado
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- MODAL TRANSFERIR --> */}
      <div className="modal fade" id="transferirModel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Funcion para poder transferir a otra cuenta
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ButtonPanel;