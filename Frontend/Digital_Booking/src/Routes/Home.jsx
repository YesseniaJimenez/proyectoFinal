import React from 'react'
import Card from '../Components/Card'

const Home = () => {
	return (
		<main className='main-home'>
			<div className='search-div'>
				<h1>Desarrollá tu pasión sin gastar de más</h1>
				<form action="">
					<input type="text" name="buscar" id="buscar" placeholder='¿Qué instrumento buscás?' className='search-input text'/>
					<input type="date" name="calendar" id="calendar" className='search-input calendar'/>
					<button type="submit" className='search-button'>Buscar</button>
				</form>
			</div>

			<div className='search-category'>
				<h2>Buscar por Categoría</h2>
				<div className="category-cards">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			
			<div className="recomendations">
				<h2>Recomendaciones</h2>
				<div className="recomendation-cards">
					<Card />
					<Card />
				</div>
			</div>
		</main>
	)
}

export default Home