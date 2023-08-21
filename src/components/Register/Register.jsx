import './RegisterStyles.css'; // Importa el archivo de estilos
import { useFormik } from 'formik';     // Metodos de formik
import validations from "./validations"  // Validaciones


const Register = () => {

  // Por el momento al hacer submit, limpia el formulario y logea los datos enviados
  const onSubmit = (values, actions) =>{alert("Registrado!"); console.log("Submitted!", values); actions.resetForm()}

  // Traemos metodos de formik, valores, errores, metodo touched, y handlers de blur, change y submit
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({

  // Valores iniciales que vamos a tener en nuestro formulario
  initialValues: {name:"",email:"",password:"", file:null},
  // Esquema de validaciones, que declaramos e importamos
  validationSchema: validations,
  // Funcion onSubmit que tomara el lugar en cualquier handleSubmit
  onSubmit})

    return (
      <div>

        <form onSubmit={handleSubmit} className='formContainer'>

          <div className="container inputContainer">
                <h1 className="text-white mb-3">Únase a SmartPay</h1>
                <div className="card">
                  <div className="card-body">
                    
                    
                    
                <div className="row align-items-center pt-3 pb-2 fieldStyle">
                      <div className="col-md-3 ps-5">
                        <h6 className="tagStyle">Nombre Completo</h6>
                      </div>

                    <div className="col-md-9 pe-5">
                        <input type="text" id='name' name="name" onChange={handleChange}  value={values.name}  
                        placeholder="Su nombre aquí" onBlur={handleBlur}
                        className={"form-control form-control-lg inputStyle" + (errors.name && touched.name ? " inputError" : "")}/>
                        <div className="errorContainer">{errors.name && touched.name && <p className='errorText'>{errors.name}</p>}</div>
                    </div>
                </div>


            <hr className="mx-n3" />


                <div className="row align-items-center py-3 fieldStyle">
                      <div className="col-md-3 ps-5">
                        <h6 className="tagStyle">Correo Electrónico</h6>
                      </div>
                    <div className="col-md-9 pe-5">
                        <input type="email" name="email"  
                        placeholder="Su correo aquí" id='email'  onChange={handleChange}  value={values.email} onBlur={handleBlur}
                        className={"form-control form-control-lg inputStyle" + (errors.email && touched.email ? " inputError" : "")}/>
                        <div className="errorContainer">{errors.email && touched.email && <p className='errorText'>{errors.email}</p>}</div>
                    </div>
                </div>
                    


            <hr className="mx-n3"/>



            <div className="row align-items-center pt-4 pb-3 fieldStyle">
                      <div className="col-md-3 ps-5">
                        <h6 className="tagStyle">Contraseña</h6>
                      </div>

                    <div className="col-md-9 pe-5">
                        <input type="password" id='password' name="password" onChange={handleChange}  
                        value={values.password}  placeholder="Su contraseña aquí" onBlur={handleBlur}
                        className={"form-control form-control-lg   inputStyle" + (errors.password && touched.password ? " inputError" : "")}/>
                        <div className="errorContainer">{errors.password && touched.password && <p className='errorText'>{errors.password}</p>}</div>
                    </div>
                </div>



            <hr className="mx-n3"/>



            <div className="row align-items-center py-3 fieldStyle">
                    <div className="col-md-3 ps-5">
                        <h6 className="tagStyle">Foto de reconocimiento facial</h6>
                    </div>

                <div className="col-md-9 pe-5">
                    <input type="file" id='picfile' name="picfile" value={values.picfile} onBlur={handleBlur} onChange={handleChange}
                    className={"form-control form-control-lg inputStyle" + (errors.picfile && touched.picfile ? "inputError" : "")}/>
                    <div className="errorContainer">{errors.picfile && touched.picfile && <p className='errorText'>{errors.picfile}</p>}</div>
                </div>

            </div>



            <div className="row align-items-center py-3 fieldStyle">
                    <div className="col-md-3 ps-5">
                        <h6 className="tagStyle">Frente de su DNI/Pasaporte</h6>
                    </div>

                <div className="col-md-9 pe-5">
                    <input type="file" id='idfile1' name="idfile1" value={values.idfile1} onBlur={handleBlur} onChange={handleChange}
                    className={"form-control form-control-lg inputStyle" + (errors.idfile1 && touched.idfile1 ? "inputError" : "")}/>
                    <div className="errorContainer">{errors.idfile1 && touched.idfile1 && <p className='errorText'>{errors.idfile1}</p>}</div>
                </div>
                
            </div>



            <div className="row align-items-center py-3 fieldStyle">
                    <div className="col-md-3 ps-5">
                        <h6 className="tagStyle">Dorso de su DNI/Pasaporte</h6>
                    </div>

                <div className="col-md-9 pe-5">
                    <input type="file" id='idfile2' name="idfile2" value={values.idfile2} onBlur={handleBlur} onChange={handleChange}
                    className={"form-control form-control-lg inputStyle" + (errors.idfile2 && touched.idfile2 ? "inputError" : "")}/>
                    <div className="errorContainer">{errors.idfile2 && touched.idfile2 && <p className='errorText'>{errors.idfile2}</p>}</div>
                </div>
                
            </div>



            <hr className="mx-n3"/>


                <div className="px-5 py-4">
                    <button type="submit" className="btn btn-primary btn-lg submitButton"> Registrarse </button>
                </div>

                <div className='login'>
                  <h5 className='tagStyle'>Ya eres miembro? <a className='linksReg' href="/rutaLogin">Inicia sesión</a></h5>
                </div>

                  
                  </div>
                </div>
              </div>
        </form>
      </div>
    );
  }

export default Register;