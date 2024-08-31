"use client";

import {FC, useEffect, useState} from 'react';
import Link from 'next/link';
import RootLayout from '../layout';
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
        <div className="container mx-auto py-8 bg-azul-claro rounded-lg ">
            <h1 className='text-roxo-escuro font-bold mb-8 text-4xl'>Meus projetos</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 m-4'>
                {projetos.map((projeto) =>(
                    <div key={projeto.id} className='bg-cinza-claro p-6 rounded-lg shadow-lg'>
                        <h2 className='text-2xl text azul-royal font-semibold mb-4'>{projeto.name}</h2>
                        <p className='text-lg text-toxo-escuro mb-6'>
                            {projeto.description || "Este projeto não contem descrição."}
                        </p>
                    <div className='flex space-x-4'>
                        <Link href={projeto.html_url}
                            target='_blank'
                            rel='noopener norefeer'
                            className='bg-azul-royal text-branco py-2  px-4 rounded hover:bg-azul-claro'>
                            GitHub
                        </Link>
                       {projeto.homepage && (
                         <Link href={projeto.homepage}
                            target='_blank'
                            rel='noopener norefeer'
                            className='bg-azul-royal text-branco py-2  px-4 rounded hover:bg-azul-claro'>
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