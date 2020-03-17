import React, { useCallback, useState, useEffect } from 'react';
import './styles.css';
import Dieta from '../Dieta';
import Header from '../Header';

function Dietas() {
	
	
	const [dietas, setDietas] = useState([]);
	
	
	const fetchDietas = useCallback(() => {
	    return fetch('http://localhost:8081/dieta/list', {
	    	mode: 'no-cors'
	    	})
	      .then(res => res.json())
	      .then(dietas => {
	        setDietas(dietas.results);
	        console.log(dietas);
	      });
	  }, []);
	
	useEffect(() => {
	    fetchDietas();
	  }, [fetchDietas]);
		
	return(
	  <div>
	  	  <Header/>
		 <div className="dietas-container">
		  	<div className="grid">
			  	<Dieta tipo="Vegetariana" imagen="https://i.blogs.es/120994/brocoli/450_1000.jpg"/>
			  	<Dieta tipo="Mediterránea" imagen="https://cdn.aarp.net/content/dam/aarp/health/healthy-living/2016/09/1140-medit-diet-esp.imgcache.revd53e4a281b35d80e0dbbdbab012c6186.jpg"/>
			  	<Dieta tipo="Hiperproteica" imagen="https://www.prensalibre.com/wp-content/uploads/2019/08/Prote%C3%ADnas-2.jpg?quality=82&w=760&h=430&crop=1"/>
		  	</div>
			<div>
			 {dietas.map(dieta => ( <p> {dieta.tipo} </p> ))}
			</div>
		    <div>
		      {dietas.map(dieta => (
		        <div key={dieta.tipo}>
		          <Dieta name={dieta.tipo} />
		        </div>
		      ))}
		    </div>
		 </div>
	 </div>
 );
}
export default Dietas;