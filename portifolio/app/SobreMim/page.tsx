import { FC } from "react";
import Perfil from "../components-1/Perfil";
const SobreMim: FC=()=>
{
    return(
        <div className="bg-white rounded-lg flex items-center justify-center  bg-opacity-25">
            <div className="w-1/2 p-4">
                <Perfil/>
            </div>
            <div className="w-1/2 p-8 bg-white rounded-lg bg-opacity-70 mr-4 ">
                <h1 className="text-black text-4xl font-bold ">Sobre mim</h1>
                <p className="text-black text-lg ">Sou uma desenvolvedora FullStack em busca de oportunidades que me permitam aplicar os conhecimentos adquiridos no âmbito acadêmico. Hoje, sou graduanda em Sistemas de Informação, mais especificamente no 6ª Período. Nesse contexto, tenho experiência em liderança de diversos projetos acadêmicos, fato que demonstra minha capacidade racional de resolução de problemas, além do desenvolvimento das minhas soft skills, como empatia e comunicação.
                </p>
            </div>
        </div>
    )
}

export default SobreMim