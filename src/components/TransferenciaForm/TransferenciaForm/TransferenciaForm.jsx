import { useFormik } from 'formik';     
import validations from "./validations"
import "./TransferenciaForm.css"

const TransferenciaForm = ({handleConfirm, handleGoDestiny, destiny}) =>{

const { values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
  initialValues: { amount: 0, message: "" },
  validationSchema: validations,
  onSubmit: (values,actions) => {handleConfirm(values.amount, values.message)
  actions.resetForm();}});

return(
<>

  <h2 id='titleTF'>Transfiriendo a {destiny}</h2>
  
  <section className="formStyles">

  <div className='transferInput'>
    <div className='inputContainer'>
        <label htmlFor='amount'> Monto </label>
        <input className={`form-control inputStyles ${errors.amount && touched.amount ? 'inputError' : ''}`} id='amount'
            type="number" name="amount" onChange={handleChange} value={values.amount} placeholder='Tu monto' onBlur={handleBlur} />
        {errors.amount && touched.amount && <p className='errorTextTr'>{errors.amount}</p>}
    </div>

    <div className='inputContainer'>
        <label htmlFor="message"> Mensaje </label>
        <input className={`form-control inputStyles ${errors.message && touched.message ? 'inputError' : ''}`} id='message'
            type="message" name="message" onChange={handleChange} value={values.message} placeholder='Tu mensaje' onBlur={handleBlur} />
        {errors.message && touched.message && <p className='errorTextTr'>{errors.message}</p>}
    </div>
</div>


  <div className='methods'>
      <label htmlFor= "payMethod"> Método de pago </label>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active"><img src="ejCard2.png" class="imgCarr" alt="img2"/></div> 
            <div class="carousel-item"><img src="ejCard3.png" class="imgCarr" alt="img3"/></div>
        </div>
  
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span></button>
        
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span></button>
      </div>
  </div>
</section>

<div className='buttonCont'>
    <button type="button" onClick={handleSubmit} className="btn btn-secondary btn-lg buttons">Transferir</button>
    <button type="button" onClick={handleGoDestiny} className="btn btn-secondary btn-lg buttons">Atrás</button>
</div>

</>)
}

export default TransferenciaForm;