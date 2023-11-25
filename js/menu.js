

const cargarPeliculas = async() => {
	
	const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ca97720fee8eda16332bc72626c9c0d9&language=es-ES&`);
	
	const datos = await respuesta.json();
			
		let peliculas = '';
			datos.results.forEach(pelicula => {
			peliculas += `
					<div class="pelicula">
						
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
						<a class="btn btn-primary" type="button" href="./compra.html">MIRAR </a>	

					</div>
				`;
			});

			document.getElementById('contenedor').innerHTML = peliculas;
	

	

}

cargarPeliculas();