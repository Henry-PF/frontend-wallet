import './TransferenciasStyles.css'; 
import Navbar from '../../User_Panel/Navbar/Navbar';


const Transferencias = () =>{
return(
    <div>
        <div className="global">
            <Navbar/>


        <div className="containerStyles">
            <h2 className='title'> Historial de transacciones </h2>
                

        <div className='filters'>
            <select className="form-select mb-3 selectStyles">
                <option> &#128179; Card </option>
                <option value="1">Mastercard</option>
                <option value="2">Visa</option>
                <option value="3">Banelco</option>
            </select>

            <select className="form-select mb-3 selectStyles">
                <option> &#128198; Fecha </option>
                <option value="1">1/01/2000</option>
                <option value="2">2/01/2000</option>
                <option value="3">3/01/2000</option>
            </select>
        </div>


    <div className="section">

        <div id="photos" className="column">
            <img src="/user.png" alt="userPic" className="imgStyles"/> 
            <img src="/user.png" alt="userPic" className="imgStyles"/> 
            <img src="/user.png" alt="userPic" className="imgStyles"/>
            <img src="/user.png" alt="userPic" className="imgStyles"/>          
        </div>

        <div className="column">
            <p>ID</p>
            <p>#1</p>
            <p>#2</p>
            <p>#3</p>
            <p>#4</p>
        </div>

        <div className="column">
            <p>Nombre</p>
            <p>User 1</p>
            <p>User 2</p>
            <p>User 3</p>
            <p>User 4</p>
        </div>

        <div className="column">
            <p>Monto</p>
            <p>100$</p>
            <p>200$</p>
            <p>300$</p>
            <p>400$</p>
        </div>

        <div className="column">
            <p>Fecha</p>
            <p>01/01/2000</p>
            <p>03/01/2000</p>
            <p>02/01/2000</p>
            <p>03/01/2000</p>
        </div>

        <div className="column">
        <p>Estado</p>
        <p>Completada<button className='buttonStyles'>&#x205E;</button></p>
        <p>Completada<button className='buttonStyles'>&#x205E;</button></p>
        <p>Completada<button className='buttonStyles'>&#x205E;</button></p>
        <p>Completada<button className='buttonStyles'>&#x205E;</button></p>
        </div>
      </div>
    </div>
  </div>
</div>)
}

export default Transferencias;