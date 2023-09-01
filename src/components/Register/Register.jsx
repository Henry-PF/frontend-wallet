import { useDispatch } from 'react-redux'
import { useFormik } from 'formik';     // Metodos de formik
import validations from "./validations"  // Validaciones
import Navbar from '../Landing_Page/Navbar/Navbar'
import Footer from '../Landing_Page/Footer/Footer'
import swal from 'sweetalert'
import './RegisterStyles.css'; // Importa el archivo de estilos
import { userRegistration } from '../../redux/actions';

const Register = () => {
  const dispatch = useDispatch();
  // Por el momento al hacer submit, limpia el formulario y logea los datos enviados
  const onSubmit = (values, actions) => {
    const formData = new FormData();

    const dataCliente = {
      usuario: values.user,
      contra: values.pass,
      nombre: values.name,
      apellido: values.surname,
      correo_electronico: values.email,
      dni: values.dni,
      direccion: values.address,
      telefono: values.phone,
      imgFront: values.picfile,
      imgFrontDni: values.idfile1,
      imgbackDni: values.idfile2,

    }

    formData.append('dataCliente', JSON.stringify(dataCliente));
    formData.append('usuario', values.user);
    formData.append('contra', values.pass);
    // Realiza el dispatch de la acción para enviar los datos al backend
    dispatch(userRegistration(formData));

    console.log(formData);
    swal("Registrado!");
    console.log("Submitted!", values);
    actions.resetForm()
  }

  // Traemos metodos de formik, valores, errores, metodo touched, y handlers de blur, change y submit
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({

    // Valores iniciales que vamos a tener en nuestro formulario
    initialValues: { user: "", pass: "", name: "", surname: "", email: "", dni: "", address: "", phone: "", picfile: null, idfile1: null, idfile2: null },
    // Esquema de validaciones, que declaramos e importamos
    validationSchema: validations,
    // Funcion onSubmit que tomara el lugar en cualquier handleSubmit
    onSubmit
  })

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} className='formStyles'>
        <h1>Únase a SmartPay</h1>

        <div className="container">
          <div className="card cardStyles">
            <div className="card-body">
              <div className="row align-items-center pt-3 pb-2 fieldStyle">
                <div className="col-md-3 ps-5">
                  <h6 className="tagStyle">Usuario</h6>
                </div>

                <div className="col-md-9 pe-5">
                  <input type="text" id='user' name="user" onChange={handleChange} value={values.user}
                    placeholder="Su nombre aquí" onBlur={handleBlur}
                    className={"form-control form-control-lg inputStyle" + (errors.user && touched.user ? " inputError" : "")} />
                  <div className="errorContainer">{errors.user && touched.user && <p className='errorText'>{errors.user}</p>}</div>
                </div>
              </div>
              <hr className="mx-n3" />
              <div className="row align-items-center pt-3 pb-2 fieldStyle">
                <div className="col-md-3 ps-5">
                  <h6 className="tagStyle">Contraseña</h6>
                </div>

                <div className="col-md-9 pe-5">
                  <input type="password" id='pass' name="pass" onChange={handleChange} value={values.pass}
                    placeholder="Su nombre aquí" onBlur={handleBlur}
                    className={"form-control form-control-lg inputStyle" + (errors.pass && touched.pass ? " inputError" : "")} />
                  <div className="errorContainer">{errors.pass && touched.pass && <p className='errorText'>{errors.pass}</p>}</div>
                </div>
              </div>
              <hr className="mx-n3" />
              <div className="row align-items-center pt-3 pb-2 fieldStyle">
                <div className="col-md-3 ps-5">
                  <h6 className="tagStyle">Nombre</h6>
                </div>
                <div className="col-md-9 pe-5">
                  <input type="text" id='name' name="name" onChange={handleChange} value={values.name}
                    placeholder="Su nombre aquí" onBlur={handleBlur}
                    className={"form-control form-control-lg inputStyle" + (errors.name && touched.name ? " inputError" : "")} />
                  <div className="errorContainer">{errors.name && touched.name && <p className='errorText'>{errors.name}</p>}</div>
                </div>
              </div>
              <hr className="mx-n3" />
              <div className="row align-items-center pt-3 pb-2 fieldStyle">
                <div className="col-md-3 ps-5">
                  <h6 className="tagStyle">Apellido</h6>
                </div>

                <div className="col-md-9 pe-5">
                  <input type="text" id='surname' name="surname" onChange={handleChange} value={values.surname}
                    placeholder="Su apellido aquí" onBlur={handleBlur}
                    className={"form-control form-control-lg inputStyle" + (errors.surname && touched.surname ? " inputError" : "")} />
                  <div className="errorContainer">{errors.surname && touched.surname && <p className='errorText'>{errors.surname}</p>}</div>
                </div>
              </div>

              <hr className="mx-n3" />

              <div className="row align-items-center pt-3 pb-2 fieldStyle">
                <div className="col-md-3 ps-5">
                  <h6 className="tagStyle">DNI</h6>
                </div>

                <div className="col-md-9 pe-5">
                  <input type="text" id='dni' name="dni" onChange={handleChange} value={values.dni}
                    placeholder="Su DNI aquí" onBlur={handleBlur}
                    className={"form-control form-control-lg inputStyle" + (errors.dni && touched.dni ? " inputError" : "")} />
                  <div className="errorContainer">{errors.dni && touched.dni && <p className='errorText'>{errors.dni}</p>}</div>
                </div>
              </div>

              <hr className="mx-n3" />

              <div className="row align-items-center pt-3 pb-2 fieldStyle">
                <div className="col-md-3 ps-5">
                  <h6 className="tagStyle">Direccion</h6>
                </div>

                <div className="col-md-9 pe-5">
                  <input type="text" id='address' name="address" onChange={handleChange} value={values.address}
                    placeholder="Su dirección aquí" onBlur={handleBlur}
                    className={"form-control form-control-lg inputStyle" + (errors.address && touched.address ? " inputError" : "")} />
                  <div className="errorContainer">{errors.address && touched.address && <p className='errorText'>{errors.address}</p>}</div>
                </div>
              </div>

              <hr className="mx-n3" />

              <div className="row align-items-center py-3 fieldStyle">
                <div className="col-md-3 ps-5">
                  <h6 className="tagStyle">Correo Electrónico</h6>
                </div>
                <div className="col-md-9 pe-5">
                  <input type="email" name="email"
                    placeholder="Su correo aquí" id='email' onChange={handleChange} value={values.email} onBlur={handleBlur}
                    className={"form-control form-control-lg inputStyle" + (errors.email && touched.email ? " inputError" : "")} />
                  <div className="errorContainer">{errors.email && touched.email && <p className='errorText'>{errors.email}</p>}</div>
                </div>
              </div>

              <hr className="mx-n3" />

              <div className="row align-items-center pt-4 pb-3 fieldStyle">
                <div className="col-md-3 ps-5">
                  <h6 className="tagStyle">Teléfono</h6>
                </div>

                <div className="col-md-9 pe-5">
                  <input type="text" id='phone' name="phone" onChange={handleChange}
                    value={values.phone} placeholder="Su teléfono aquí" onBlur={handleBlur}
                    className={"form-control form-control-lg   inputStyle" + (errors.phone && touched.phone ? " inputError" : "")} />
                  <div className="errorContainer">{errors.phone && touched.phone && <p className='errorText'>{errors.phone}</p>}</div>
                </div>
              </div>

              <hr className="mx-n3" />

              <div className="row align-items-center py-3 fieldStyle">
                <div className="col-md-3 ps-5">
                  <h6 className="tagStyle">Foto de reconocimiento facial</h6>
                </div>

                <div className="col-md-9 pe-5">
                  <input type="file" id='picfile' name="picfile" value={values.picfile} onBlur={handleBlur} onChange={handleChange}
                    className={"form-control form-control-lg inputStyle" + (errors.picfile && touched.picfile ? "inputError" : "")} />
                  <div className="errorContainer">{errors.picfile && touched.picfile && <p className='errorText'>{errors.picfile}</p>}</div>
                </div>

              </div>

              <div className="row align-items-center py-3 fieldStyle">
                <div className="col-md-3 ps-5">
                  <h6 className="tagStyle">Frente de su DNI/Pasaporte</h6>
                </div>

                <div className="col-md-9 pe-5">
                  <input type="file" id='idfile1' name="idfile1" value={values.idfile1} onBlur={handleBlur} onChange={handleChange}
                    className={"form-control form-control-lg inputStyle" + (errors.idfile1 && touched.idfile1 ? "inputError" : "")} />
                  <div className="errorContainer">{errors.idfile1 && touched.idfile1 && <p className='errorText'>{errors.idfile1}</p>}</div>
                </div>

              </div>

              <div className="row align-items-center py-3 fieldStyle">
                <div className="col-md-3 ps-5">
                  <h6 className="tagStyle">Dorso de su DNI/Pasaporte</h6>
                </div>

                <div className="col-md-9 pe-5">
                  <input type="file" id='idfile2' name="idfile2" value={values.idfile2} onBlur={handleBlur} onChange={handleChange}
                    className={"form-control form-control-lg inputStyle" + (errors.idfile2 && touched.idfile2 ? "inputError" : "")} />
                  <div className="errorContainer">{errors.idfile2 && touched.idfile2 && <p className='errorText'>{errors.idfile2}</p>}</div>
                </div>

              </div>

              <hr className="mx-n3" />

              <div className="px-5 py-4">
                <button type="submit" className="btn btn-lg submitButton"> Registrarse </button>
              </div>

              <div className='login'>
                <h5 className='tagStyle'>Ya eres miembro?<a className='linksReg' href="/login">Inicia sesión</a></h5>
              </div>

            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Register;