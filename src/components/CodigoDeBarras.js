import React from 'react';
import Barcode from 'react-barcode';

const CodigoDeBarras = ({datosCliente}) => {
    var{nombre, 
        telefono, 
        email, 
        domicilio, 
        estado, 
        folio, 
        imei,
        municipio,
        sap,
        stock,
        colonia
      } = datosCliente;
      console.log(datosCliente);
      
      const styles = {
          fontSize: 15,
          width: 1
      }
    
    return (
        <div id="barcode" className="container-fluid">
            <div className="row">
                <div className="col-sm">
                    <Barcode value ={nombre} width = {styles.width} fontSize= {styles.fontSize}>
                    </Barcode>
                </div>
                <div className="col-sm">
                    <Barcode value ={telefono}></Barcode>
                </div>
                <div className="col-sm">
                    <Barcode value ={email} width = {styles.width} fontSize= {styles.fontSize}>
                    </Barcode>
                </div>
                <div className="col-sm">
                    <Barcode value ={domicilio} width = {styles.width} fontSize= {styles.fontSize}>
                    </Barcode>
                </div>
                {!estado ? null : 
                    <div className="col-sm">
                        <Barcode value ={estado}>
                        </Barcode>
                    </div>}
                
                {!municipio ? null : 
                    <div className="col-sm">
                        <Barcode value ={municipio}>
                        </Barcode>
                    </div>}
                {!colonia ? null : 
                    <div className="col-sm">
                        <Barcode value ={colonia}>
                        </Barcode>
                    </div>}
                <div className="col-sm">
                    <Barcode value ={folio}></Barcode>
                </div>
                <div className="col-sm">
                    <Barcode value ={imei}></Barcode>
                </div>
                <div className="col-sm">
                    <Barcode value ={sap}></Barcode>
                </div>
                <div className="col-sm">
                    <Barcode value ={stock}></Barcode>
                </div>
            </div>
        </div> 
    );
}
 
export default CodigoDeBarras;