import Navegador from "../Navegador";
import FormAdmin from "../FormAdmin";

export default function Admin(){
    return (
        <div>
            <Navegador />
            <h1 className="titulo">Coloca los datos para acceder a modo admin</h1>
            <FormAdmin />
        </div>
    );
}