import {FC} from "react"
import Perfil from "./components-1/Perfil"
import { Card } from "@/components/ui/card" 
const Home: FC = () =>
{
  return(

    <Card className="flex items-center justify-center min-h-screen bg-azul-claro rounded-lg">
          <div className="w-1/2 p-4">
            <Perfil/>
          </div>
      <div className="w-1/2 p-8 "> 
      <h1 className="text-roxo-escuro text-4xl font-bold mb-4">Olá sejam bem-vindos a minha página de portifólio</h1>
      <p className="text-roxo-escuro text-lg mb-6">Sou uma desenvolvedora FullStack focada em criar experiências digitais incríveis. Explore meus projetos e entre em contato!</p>
      </div>
    </Card>
    
  )
}

export default Home