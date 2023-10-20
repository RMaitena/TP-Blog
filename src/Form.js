import React, { useState } from 'react';

export default function Form() {
  const [nombre, setNombre] = useState('');
  const [titulo, setTitulo] = useState('');
  const [post, setPost] = useState('');

   const handleSubmit = (event) => {
     event.preventDefault();
   };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Usuario:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <br />
      <label>
        Titulo:
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      </label>
      <br />
      <label>
        Post:
        <textarea value={post} onChange={(e) => setPost(e.target.value)} />
      </label>
      <br />
      <button className="envioNP" type="submit">Subir</button>
    </form>
  );
}