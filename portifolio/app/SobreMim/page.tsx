import { FC } from "react";

const SobreMim: FC=()=>
{
    return(
        <div className="bg-azul-claro rounded-lg flex items-center justify-center min-h-screen">
            <div className="w-1/2 p-8">
                <h1 className="text-roxo-escuro text-4xl font-bold mb-4">Sobre mim</h1>
                <p className="text-roxo-escuro text-lg mb-6">Sou uma desenvolvedora FullStack em busca de oportunidades que me permitam aplicar os conhecimentos adquiridos no âmbito acadêmico. Hoje, sou graduanda em Sistemas de Informação, mais especificamente no 6ª Período. Nesse contexto, tenho experiência em liderança de diversos projetos acadêmicos, fato que demonstra minha capacidade racional de resolução de problemas, além do desenvolvimento das minhas soft skills, como empatia e comunicação.
                Boticário.
                </p>
            </div>
        </div>
    )
}

export default SobreMim