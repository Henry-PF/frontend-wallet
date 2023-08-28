import { useFormik } from 'formik';     
import "./Destinatario.css"
import validationsUser from "./validationsUser"
import validationsCbuAlias from "./validationsCbuAlias"

const Destinatario = ({ handleDestiny }) => {

    const formikUser = useFormik({
        initialValues: { user: "" },
        validationSchema: validationsUser,
        onSubmit: (values, actions) => {
            handleDestiny(values.user);
            actions.resetForm();
        }
    });

    const formikCbuAlias = useFormik({
        initialValues: { cbuAlias: "" },
        validationSchema: validationsCbuAlias,
        onSubmit: (values) => {
            handleDestiny(values.cbuAlias);
        }
    });

    return (
        <div className='destinyContainer'>
            <h1>Elige tu Destinatario</h1>

            <form className='destinyOption' onSubmit={formikUser.handleSubmit}>
                <label htmlFor='user'> Seleccione usuario </label>
                <select
                    className={`form-select inputStyles ${formikUser.errors.user && formikUser.touched.user ? 'inputError' : ''}`}
                    id='user'
                    name='user'
                    onBlur={formikUser.handleBlur}
                    onChange={formikUser.handleChange}
                    value={formikUser.values.user}
                >
                    <option value="">Seleccione destinatario</option>
                    <option value="Alex">Alex</option>
                    <option value="Meli">Meli</option>
                    <option value="Mati">Mati</option>
                </select>
                {formikUser.errors.user && formikUser.touched.user && <p className='errorText'>{formikUser.errors.user}</p>}

                <button type="submit" className="btn btn-secondary btn-lg">Seleccionar</button>
            </form>

            <form className='destinyOption' onSubmit={formikCbuAlias.handleSubmit}>
                <label htmlFor='cbuAlias'> O bien ingrese su CBU/Alias </label>
                <input
                    className={`form-control inputStyles ${formikCbuAlias.errors.cbuAlias && formikCbuAlias.touched.cbuAlias ? 'inputError' : ''}`}
                    id='cbuAlias'
                    type="text"
                    name="cbuAlias"
                    onChange={formikCbuAlias.handleChange}
                    onBlur={formikCbuAlias.handleBlur}
                    value={formikCbuAlias.values.cbuAlias}
                    placeholder='Tu CBU/Alias'
                />
                {formikCbuAlias.errors.cbuAlias && formikCbuAlias.touched.cbuAlias && <p className='errorText'>{formikCbuAlias.errors.cbuAlias}</p>}

                <button type="submit" className="btn btn-secondary btn-lg">Seleccionar</button>
            </form>
        </div>
    );
}

export default Destinatario;