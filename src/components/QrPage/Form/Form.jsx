import { useState } from 'react';
import { useFormik } from 'formik';
import validations from "./validations"

const Form = ({ handleGenerate }) => {
    
    // Formik para validacion de nombre
    const formik = useFormik({
    initialValues: {businessName: '',},
    validationSchema: validations,
    onSubmit: (values) => {handleGenerate(values.businessName, businessPic)}});

    // Almacenamos la imagen
    const [businessPic, setBusinessPic] = useState(null);
    const handleFileChange = (event) => {
    const file = event.target.files[0];
    setBusinessPic(URL.createObjectURL(file));};


// Renderizado
return (
    <section>

        <div className='inputs'>

            <div className="mb-3">
               <label htmlFor="businessName" className="form-label"> Ingrese nombre del comercio/propietario:</label>
               <input className={`form-control ${formik.errors.businessName && formik.touched.businessName ? 'inputError' : ''}`}
               id="businessName" type="text" placeholder="Su texto aquí"  {...formik.getFieldProps('businessName')}/>
               {formik.errors.businessName && formik.touched.businessName 
               && (<p className="errorText" style={{margin:0}}>{formik.errors.businessName}</p>)}
            </div>

            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Ingrese logo/imagen del comercio (opcional):</label>
                <input type="file" className="form-control" id="formFile"onChange={handleFileChange}/>
            </div>

            <button type="button" onClick={formik.handleSubmit} id='generateBut' className="btn btn-secondary btn-lg">Generar</button>
        
        </div>

    </section>);
}

export default Form;
