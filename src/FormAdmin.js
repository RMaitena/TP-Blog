import React, { useState } from 'react';

export default function FormAdmin() {
  const [usuario, setUsuario] = useState('');
  const [contra, setContra] = useState('');

   const handleSubmit = (event) => {
     event.preventDefault();
   };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Usuario:
        <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      </label>
      <br />
      <label>
        Contraseña:
        <input type="text" value={contra} onChange={(e) => setContra(e.target.value)} />
      </label>
      <br />
      <button className="envioNP" type="submit">Subir</button>
    </form>
  );
}