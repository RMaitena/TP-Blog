import Encabezado from "../Encabezado";
import Navegador from "../Navegador";
import Post from "../Post";

export default function Home(){
    return (
        <div>
            <Navegador />
            <Encabezado />
            <Post titulo='Los gatos... ¿Tiene 7 vidas?' descripcion='La famosa frase, ya popularizada, sobre que "los gatos tienen siete vidas", es otra características tomada por quienes consideran que estos felinos no son solo animales comunes y corrientes, sino que tienen un objetivo en el planeta Tierra y la misión la están cumpliendo... Muchas son las anécdotas que cuentan las personas que poseen gatos o no, pero que alguna vez vieron como un felino pasó por un accidente que terminaría con su vida, pero de todas formas allí está, continúa "vivito y coleando" como si nada hubiese pasado y no existe explicación alguna a lo sucedido. ¿Cómo un gato que cae de un quinto piso puede seguir vivo y sin ningún tipo de lesión? ¿Tan fuerte y resistente son sus patas como su cuerpo para no sentir el impacto? Más allá de las habilidades en todas las razas felinas, existe una especie, Sphynx, que es sin pelo y son los que más se aproximan físicamente a los clásicos alienígenas grises, o al menos eso dicen algunos creyentes de la teoría de que los gatos son alienígenas o seres que conectan con ellos. ¿La gatos serán extraterrestres que viven camuflados entre nosotros?'/>
        </div>
    );
}