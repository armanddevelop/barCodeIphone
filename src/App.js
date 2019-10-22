import React,{useState} from 'react';
import Formulario from './components/Formulario';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CodigoDeBarras from './components/CodigoDeBarras';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  const[datosCliente,setDatosCliente] = useState({});
  
  
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/"
          render ={()=>(
            <Formulario setDatosCliente = {setDatosCliente}></Formulario>
          )} 
        ></Route>
        <Route exact path="/codigoDeBarras"
          render = {() =>(
            <CodigoDeBarras datosCliente = {datosCliente}></CodigoDeBarras>
          )} 
        ></Route>
      </Switch>
      <Footer></Footer>
    </Router>
    
    
  );
}

export default App;
