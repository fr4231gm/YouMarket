import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

function Navegacion() {
	
  return(
	<div className="perfil-links">
		<Link to="/datos-perfil" className="perfil-link">DATOS DEL PERFIL</Link>
		<p className="separador">|</p>
	   	<Link to="/datos-envio"className="perfil-link">DATOS DE ENVÍO</Link>
	   	<p className="separador">|</p>
	   	<Link to="/pedidos-usuario" className="perfil-link">MIS PEDIDOS</Link>
	   	<p className="separador">|</p>
	   	<Link to="/datos-subscripcion" className="perfil-link">DATOS DE SUBSCRIPCIÓN</Link>
	</div>
 );
}
export default Navegacion;