import React, { useState, useEffect } from 'react';

export default function FormAdmin() {
  const [usuario, setUsuario] = useState('');
  const [contra, setContra] = useState('');
  const [enviado, setEnviado] = useState(false);

   useEffect(() => {
    if (enviado) {
      localStorage.setItem('usuario', usuario);
      localStorage.setItem('contra', contra);
    }
  }, [enviado, usuario,contra]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEnviado(true)
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
        <input type="password" value={contra} onChange={(e) => setContra(e.target.value)} />
      </label>
      <br />
      <button className="envioNP" type="submit">Subir</button>
    </form>
  );
}