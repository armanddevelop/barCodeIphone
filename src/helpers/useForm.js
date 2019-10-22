import { useState } from 'react';
import Swal from 'sweetalert2';

const useForm = (callback) => {
    const [datos, setDatos] = useState({});
    const[datosCompletos, setDatosCompletos] = useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(Object.keys(datos).length === 0){
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Todos los campos con * son obligatorios',
            });
            return false;
        }
        if((datos.nombre === undefined || datos.nombre === '') || (datos.telefono === undefined || datos.telefono === '') || (datos.imei === undefined || datos.imei === '') || 
            (datos.domicilio === undefined || datos.domicilio === '') || (datos.email === undefined || datos.email === '') || (datos.cp === undefined || datos.cp === '') || 
            (datos.folio === undefined || datos.folio === '') || (datos.sap === undefined || datos.sap === '') || (datos.stock === undefined || datos.stock === '')){
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Revisa los datos del formulario',
                });
                return false;
        }
        Swal.fire(
            'Datos Cargados',
            '',
            'success'
        );
        setDatosCompletos(true);
        return true;
    }
    const handleChange = (e) =>{
        e.persist();
        setDatos(datos =>({
            ...datos,
            [e.target.name] : e.target.value
        }));
    };
    return {
        handleChange,
        datos,
        handleSubmit,
        datosCompletos
    }
}
 
export default useForm;