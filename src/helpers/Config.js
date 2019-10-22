//import React from 'react';

const Config = () => {
    let inputsName = {
        nombre: 'Nombre(s) completo del cliente*',
        tel: 'Numero Telefonico del Cliente*',
        imei: 'IMEI del equipo dañado*',
        email: 'Correo Electronico*',
        domicilio:'Domicilio*',
        estado: 'Estado',
        colonia: 'Colonia',
        municipio:'Municipio',
        cp:'Codigo Postal*',
        folio:'Folio Sertec*',
        sap:'Numero de Factura SAP*',
        stock:'IMEI de Seedstock*',
        boton: 'Enviar',
        
    }
    let title = 'Introduce los datos de cliente';
    let urlPersonal = 'https://www.linkedin.com/in/armando-salamanca-44973a80/';
    return {
        inputsName,
        title, 
        urlPersonal
    };
}
 
export default Config;