import React, { useCallback, useState, useEffect} from 'react';
import './styles.css';
import Header from '../Header';
import { useParams } from "react-router-dom";
import plus from '../assets/plus.svg'
import less from '../assets/less.svg'

function ProductoDetalle() {

	const [ producto, setProducto] = useState();
	const { id } = useParams();
	
	const fetchProducto = useCallback(() => {
	    return fetch(`../../../producto/${id}`)
	      .then(res => res.json())
	      .then(producto => {
	        setProducto(producto)
	        console.log(producto);
	      });
	  	}, []);

    useEffect(() => {
	    fetchProducto(producto);
	  }, []);	
	
    if (!producto){
    	return null;
	}	
	
	const renderDescription = () => {
		if	(producto.descripcion != null){
			return <div className="producto-detalle-field">{producto.descripcion}</div>
		}
	}

	var idContador = "contador-"+id
	var idMenos = "menos-"+id
	var cantidad = 0

	function lessProduct(){
	   if(cantidad > 0){
		   cantidad = cantidad - 1
		   document.getElementById(idContador).textContent = cantidad
	   }
	}
	
	function plusProduct() {
	   cantidad = cantidad + 1
	   document.getElementById(idContador).textContent = cantidad
	}

	return(
	  <div>
	  	  <Header/>
	  	  <div>
					
					<div className="producto-detalle-container container clearfix">

						<img className="producto-detalle-imagen" src={producto.urlImagen} alt={producto.nombre}/>

						<div className="producto-detalle-info">
							<div>
								<h2 className="producto-detalle-nombre"> {producto.nombre} </h2>
							</div>
							
							{renderDescription}

							<div className="producto-detalle-field">
								<b> Precio: </b> {producto.precio} {producto.unidad}
							</div>
							<div className="producto-detalle-field">
								<b> Precio con IVA: </b> {producto.precioIva} {producto.unidad}
							</div>
							<div className="producto-detalle-field">
								<b> Marca: </b>{producto.marca.nombre}
							</div>
							<div className="producto-detalle-field">
								<b> Supermercado: </b> {producto.supermercado.nombre}
							</div>

							<div className="producto-add-contenedor">
								<div className="producto-editar-cantidad clearfix">
									<img id={idMenos} className="menos" src={less} onClick={lessProduct}/>
									<p id={idContador} className="contador no-link">{cantidad}</p>
									<img className="mas" src={plus} onClick={plusProduct}/>
								</div>
								<button className="producto-detalle-add">Añadir al carro</button>
							</div>
						</div>
				</div>
	  	  	</div>
	 </div>
	);
	
	
}

export default ProductoDetalle;