import { useState, useEffect } from 'react'

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [correo, setCorreo] = useState('');
  const [fechaAlta, setFechaAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()

    if ( [ nombre, propietario, correo, fechaAlta, sintomas].includes('')) {
      console.log('algun campo está vacio')
      setError(true)
      return;
    }
    
    setError(false)
    
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de pacientes
      </h2>
      
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">
          Adminístralos
        </span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" >

          {error && 
            <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded">
              <p>Todos los campos son obligatorio</p>
            </div>
          }
          


        <div className="mb-5">
          <label 
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold">
            Nombre Mascota {nombre}
          </label>

          <input
            id="mascota"
            type = "text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400"
            onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label 
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>

          <input
            id="propietario"
            type = "text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400"
            onChange={e => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label 
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold">
            Correo Electrónico
          </label>

          <input
            id="email"
            type = "email"
            placeholder="Ingrese su email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400"
            onChange={e => setCorreo(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label 
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold">
            Fecha de cita
          </label>

          <input
            id="alta"
            type = "date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400"
            onChange={e => setFechaAlta(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label 
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold">
            Síntomas
          </label>

          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400"
            placeholder="Describe los síntomas"
            onChange={e => setSintomas(e.target.value)}
          />
        </div>

        <input 
          type = "submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer rounded-md transition-colors hover:bg-indigo-700 "
          value="Agregar Paciente"
        />

      </form>
    </div>
  )
}

export default Formulario
