import Navegador from "../Navegador";
import Form from "../Form";

export default function NewPost(){
    return (
        <div>
        <Navegador />
        <h1 className="titulo">¡Agrega tu post!</h1>
        <Form />
        </div>
    );
}