import React, { useState, useEffect } from 'react';

export default function Form() {
  const [nombre, setNombre] = useState('');
  const [titulo, setTitulo] = useState('');
  const [post, setPost] = useState('');
  const [publis, setPublis] = useState([]);

  useEffect(() => {
    const publiGuardadas = JSON.parse(localStorage.getItem('publis'));
    if (publiGuardadas) {
      setPublis(publiGuardadas);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('publis', JSON.stringify(publis));
  }, [publis]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevaPublicacion = { nombre, titulo, post };
    setPublis([...publis, nuevaPublicacion]);
    setNombre('');
    setTitulo('');
    setPost('');
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
      {publis.map((publis, index) => (
        <div className='elform' key={index}>
          <h3 className='title'>{publis.titulo}</h3>
          <p className='elpost'>{publis.post}</p>
          <p className='elusr'>Por: {publis.nombre}</p>
        </div>
      ))}
    </form>
  );
}
