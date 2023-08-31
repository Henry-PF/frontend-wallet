import React from 'react'
import Button from 'react-bootstrap/Button';
import Recarga from '../Formularios/Recarga';
const ButtonPanel = () => {
  return (
    <div class="d-grid gap-2 col-10 mx-auto ">
      <br />
      <Button class="btn btn-primary" type='button' data-bs-toggle="modal" data-bs-target="#transferirModel">Transferir</Button>
      <Button class="btn btn-warning" type='button' data-bs-toggle="modal" data-bs-target="#recargaModel" >Recarga</Button>
      <Button class="btn btn-success" type='button' data-bs-toggle="modal" data-bs-target="#retirarModel">Retirar</Button>
      <Button class="btn btn-warning" type='button' data-bs-toggle="modal" data-bs-target="#pagarModel">Pagar</Button>


      {/* <!-- MODAL RECARGA--> */}
      <div class="modal fade" id="recargaModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
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
      <div class="modal fade" id="pagarModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               Funcion para poder pagar 
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- MODAL RETIRAR--> */}
      <div class="modal fade" id="retirarModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            Funcion para poder retirar el dinero abonado
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- MODAL TRANSFERIR --> */}
      <div class="modal fade" id="transferirModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Funcion para poder transferir a otra cuenta
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  )
}

export default ButtonPanel;