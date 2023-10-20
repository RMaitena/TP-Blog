import React from 'react';

import { Link } from "react-router-dom";

export default function Post (props) {
return (
<div className='texto'>
<h3>{props.titulo}</h3>
<p>{props.descripcion}</p>
<Link to={props.link}>
<h6 className='ver'>Ver comentarios</h6>
</Link>
</div>
);
}