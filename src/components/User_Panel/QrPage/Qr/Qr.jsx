import QRCode from "react-qr-code";
import './Qr.css';

const Qr = ({name,pic, handleGoBack}) => {
    return(
    <>
      <div className="qrCont">
        <h5>QR de "{name}"</h5> 
        {pic && <img src={pic} id="imgStyle" alt="photo"/>}
        <QRCode id="qr" value="www.google.com"/>
        <button type="button" onClick={() => handleGoBack()} id="backBut" class="btn btn-secondary btn-lg">Volver</button>
      </div> 
    </>)
}

export default Qr;