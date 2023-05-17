import React from 'react'

const AddProduct = () => {
	return (
		<div className='container-addProduct'>
			<form action="" className='form-addProduct'>
				<label htmlFor="">Nombre</label>
				<input type="text" name="nombre" id="nombre" />
				<label htmlFor="">Descripcion</label>
				<input type="text" name="descripcion" id="descripcion" />
				<label htmlFor="">URL de la imagen del instrumento</label>
				<input type="url" src="" alt="url de la imagen del instrumento" />
				<button type="submit">Enviar</button>
			</form>
		</div>
	)
}

export default AddProduct