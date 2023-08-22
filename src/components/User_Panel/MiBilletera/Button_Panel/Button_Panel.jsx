import React from 'react'
import Button from 'react-bootstrap/Button';

const ButtonPanel = () => {
    return (
          <div class="d-grid gap-2 col-10 mx-auto ">
            <br/><br/>
            <Button class="btn btn-primary" type='button' >Transferir</Button>
            <Button class="btn btn-success" type='button' >Retirar</Button>
            <Button class="btn btn-warning" type='button' >Pagar</Button>
          </div>
    )
}

export default ButtonPanel;