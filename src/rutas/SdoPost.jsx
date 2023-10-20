import Navegador from "../Navegador";
export default function UnPost(props){
    return (
    <div className='texto'>
    <Navegador/>
    <h3>{props.titulo}</h3>
    <p>{props.descripcion}</p>
    <h6 className='ver'>Ver comentarios</h6>
    </div> 
    );
}
