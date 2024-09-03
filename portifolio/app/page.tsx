"use client";

import { FC, useEffect, useState } from "react";
import Perfil from "./components-1/Perfil";
import { Card, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import Link from "next/link";
const Home: FC = () => {
  

  interface Projeto 
  {
      id: number;
      name: string;
      description: string;
      html_url: string;
      homepage: string;
  }

  
  const [projetos, setProjetos] = useState<Projeto[]>([]);

  useEffect(()=>
  {
      fetch("https://api.github.com/users/aline875/repos")
      .then((response)=> response.json())
      .then((data)=>{
          setProjetos(data.slice(0,3));
      })
      .catch((error)=> console.error("Erro ao buscar os repositórios:", error));
  }, 
  []
  );
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-500 p-8">
            {/* Seção do Perfil */}
            <Card className="w-full max-w-4xl mb-8 p-8 shadow-lg rounded-lg">
                <div className="flex items-center space-x-4">
                    <Perfil />
                    <div>
                        <h1 className="text-roxo-escuro text-4xl font-bold mb-2">
                            Olá, sejam bem-vindos à minha página de portfólio
                        </h1>
                        <p className="text-roxo-escuro text-lg">
                            Sou uma desenvolvedora FullStack focada em criar experiências digitais incríveis.
                        </p>
                    </div>
                </div>
            </Card>

            <Card className="w-full max-w-4xl p-8 shadow-lg rounded-lg bg-white">
                <CardTitle className='text-roxo-escuro font-bold mb-8 text-4xl'>Meus projetos</CardTitle>
                <CardContent className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {projetos.map((projeto) => (
                        <Card key={projeto.id} className='bg-cinza-claro p-6 rounded-lg shadow-lg'>
                            <CardTitle className='text-2xl text-azul-royal font-semibold mb-4'>{projeto.name}</CardTitle>
                            <CardDescription className='text-lg text-toxo-escuro mb-6'>
                                {projeto.description || "Este projeto não contém descrição."}
                            </CardDescription>
                            <CardDescription className='flex space-x-4'>
                                <Link href={projeto.html_url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='bg-azul-royal text-branco py-2 px-4 rounded hover:bg-azul-claro'>
                                    GitHub
                                </Link>
                                {projeto.homepage && (
                                    <Link href={projeto.homepage}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='bg-azul-royal text-branco py-2 px-4 rounded hover:bg-azul-claro'>
                                        Vercel
                                    </Link>
                                )}
                            </CardDescription>
                        </Card>
                          ))}
                        </CardContent>
                      </Card>
                            
            {/* Seção Adicional */}
            <Card className="w-full max-w-4xl p-8 shadow-lg rounded-lg">
                <h2 className="text-roxo-escuro text-3xl font-bold mb-4">Outra Seção</h2>
                <p className="text-roxo-escuro text-lg">
                    Aqui você pode adicionar outra seção com informações relevantes sobre você ou seus projetos.
                </p>
            </Card>
        </div>
    );
};

export default Home;
