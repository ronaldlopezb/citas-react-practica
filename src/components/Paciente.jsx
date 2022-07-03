import React from 'react'

const Paciente = () => {
   return (
   <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
         Nombre: {''}
         <span className="font-normal normal-case">
            Zarkas
         </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
      Propietario: {''}
      <span className="font-normal normal-case">
         Ronald López
      </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
      Correo electrónico: {''}
      <span className="font-normal normal-case">
         Ronaldlopez@ronaldlopezb.com
      </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
      Fecha de cita: {''}
      <span className="font-normal normal-case">
         12 de diciembre de 2022
      </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
      síntomas: {''}
      <span className="font-normal normal-case">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ad, deleniti nisi assumenda incidunt eos, laboriosam saepe nam sint amet itaque facere nemo dignissimos fugit! Nulla reiciendis repellendus magnam doloremque.
      </span>
      </p>
   </div>
   )
}

export default Paciente