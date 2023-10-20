import React, { useState, useEffect } from 'react';

export default function Form() {
  const [nombre, setNombre] = useState('');
  const [titulo, setTitulo] = useState('');
  const [post, setPost] = useState('');
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    if (enviado) {
      localStorage.setItem('nombre', nombre);
      localStorage.setItem('titulo', titulo);
      localStorage.setItem('post', post);
    }
  }, [enviado, nombre, titulo, post]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEnviado(true);
  };

  return (
    <form onSubmit={handleSubmit} className='formulario'>
      <label className='user'>
        Usuario:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <br />
      <label>
        Titulo:
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      </label>
      <br />
      <label className='pst'>
        Post:
        <textarea value={post} onChange={(e) => setPost(e.target.value)} />
      </label>
      <br />
      <button className="envioNP" type="submit">Subir</button>
      {enviado && (
        <>
          <p>Nombre: {localStorage.getItem('nombre')}</p>
          <p>Titulo: {localStorage.getItem('titulo')}</p>
          <p>Post: {localStorage.getItem('post')}</p>
        </>
      )}
    </form>
  );
}


