import React,{Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import useForm from '../helpers/useForm';
import Config from '../helpers/Config';


const Formulario = ({history, setDatosCliente}) => {
    
    const {handleChange,datos,handleSubmit,datosCompletos} = useForm();
    const {inputsName, title} = Config();
    if(datosCompletos){
        history.push('/codigoDeBarras');
        setDatosCliente(datos);
    }
    
    return (
        <Fragment>
            <h2 className="text-center">{title}</h2>
            <div className="container">
                <form id="main-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <div>
                                <label >{inputsName.nombre}</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="nombre"
                                        onChange = {handleChange}
                                        datos = {datos.nombre}
                                    />
                            </div>
                        </div>
                        <div className="form-group col-md-4">
                                <div>
                                    <label>{inputsName.tel}</label>
                                    <input 
                                        type="number"
                                        className="form-control" 
                                        name="telefono"
                                        onChange = {handleChange}
                                        datos = {datos.telefono}
                                    />
                                </div>
                        </div>
                            <div className="form-group col-md-4">
                                <div>
                                    <label>{inputsName.imei}</label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        name="imei"
                                        onChange = {handleChange}
                                        datos = {datos.imei}
                                    />
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                                <div>
                                    <label >{inputsName.email}</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="exampleInputEmail1"
                                        name = "email"
                                        onChange = {handleChange}
                                        datos = {datos.email} 
                                    />
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                                <div>
                                    <label>{inputsName.domicilio}</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="domicilio"
                                        onChange = {handleChange}
                                        datos = {datos.domicilio}
                                    />
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                               <div>
                                <label>{inputsName.estado}</label>
                                    <select className="form-control" id="exampleSelect1"
                                        name = "estado"
                                        onChange = {handleChange}
                                        datos = {datos.value}
                                    >
                                        <option>---Elige un estado---</option>
                                        <option value = "aguascalientes">Aguascalientes</option>
                                        <option value = "baja california norte">Baja California Norte</option>
                                        <option value = "baja california sur">Baja California Sur</option>
                                        <option value = "chiapas">Chiapas</option>
                                        <option value = "chihuahua">Chihuahua</option>
                                        <option value = "coahuila">Coahuila</option>
                                        <option value = "ciudad de mexico">Ciudad de Mexico</option>
                                        <option value = "durango">Durango</option>
                                        <option value = "guanajuato">Guanajuato</option>
                                        <option value = "guerrero">Guerrero</option>
                                        <option value = "hidalgo">Hidalgo</option>
                                        <option value = "jalisco">Jalisco</option>
                                        <option value = "mexico">México</option>
                                        <option value = "michoacan">Michoacán</option>
                                        <option value = "morelos">Morelos</option>
                                        <option value = "nayarit">Nayarit</option>
                                        <option value = "nuevo leon">Nuevo León</option>
                                        <option value = "oaxaca">Oaxaca</option>
                                        <option value = "puebla">Puebla</option>
                                        <option value = "quintana roo">Quintana Roo</option>
                                        <option value = "san luis potosi">San Luis Potosí</option>
                                        <option value = "sinaloa">Sinaloa</option>
                                        <option value = "sonora">Sonora</option>
                                        <option value = "tabasco">Tabasco</option>
                                        <option value = "tamaulipas">Tamaulipas</option>
                                        <option value = "tlaxcala">Tlaxcala</option>
                                        <option value = "yucantan">Yucatán</option>
                                        <option value = "zacatecas">Zacatecas</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <div>
                                <label>{inputsName.colonia}</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="colonia"
                                        onChange = {handleChange}
                                        datos = {datos.colonia}
                                        />
                                    </div>
                            </div>
                            <div className="form-group col-md-4">
                                    <label>{inputsName.municipio}</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="municipio"
                                        onChange = {handleChange}
                                        datos = {datos.municipio}
                                    />
                                </div>
                                <div className="form-group col-md-4">
                                    <label>{inputsName.cp}</label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        name="cp"
                                        onChange = {handleChange}
                                        datos = {datos.cp}
                                    />
                                </div>
                                <div className="form-group col-md-4">
                                    <label>{inputsName.folio}</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="folio"
                                        onChange = {handleChange}
                                        datos = {datos.folio}
                                    />
                                </div>
                                <div className="form-group col-md-4">
                                    <label>{inputsName.sap}</label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        name="sap"
                                        onChange = {handleChange}
                                        datos = {datos.sap}
                                    />
                                </div>
                                <div className="form-group col-md-4">
                                    <label>{inputsName.stock}</label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        name="stock"
                                        onChange = {handleChange}
                                        datos = {datos.stock}
                                    />
                                </div>
                        </div>
                        <input type="submit" id="boton-submit"
                            className="font-weight-bold text-uppercase mb-3 btn btn-primary btn-block py-3 col-md-5" 
                            value={inputsName.boton} 
                        />    
                </form>
            </div> 
        </Fragment>
     );
}
 
export default withRouter(Formulario);