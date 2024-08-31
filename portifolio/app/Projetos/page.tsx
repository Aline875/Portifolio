"use client"
import {FC, useEffect, useState} from 'react';
import Link from 'next/link';
const Projetos: FC =()=>
{

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
            setProjetos(data);
        })
        .catch((error)=> console.error("Erro ao buscar os repositórios:", error));
    }, 
    []
    );
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-azul-claro rounded-lg">
            <h1 className='text-roxo-escuro'>Meus projetos</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {projetos.map((projeto) =>(
                    <div key={projeto.id} className='bg-cinza-claro p-6 rounded-lg shadow-lg'>
                        <h2 className=''>{projeto.name}</h2>
                        <p>{projeto.description || "Este projeto não contem descrição."}
                        </p>
                    <div className='flex space-x-4'>
                        <Link href={projeto.html_url}
                            target='_blank'
                            rel='noopener norefeer'
                            className='bg-azul-royal'>
                            GitHub
                        </Link>
                       {projeto.homepage && (
                         <Link href={projeto.homepage}
                            target='_blank'
                            rel='noopener norefeer'
                            className='bg-azul-royal'>
                            Vercel
                        </Link>
                        )}
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Projetos;