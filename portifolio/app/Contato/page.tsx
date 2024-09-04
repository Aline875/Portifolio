import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import {FC} from 'react';
import Link from 'next/link';

const Contato: FC = () =>
{
    return(
        <Card className='w-full max-w-4xl p-8 shadow-lg rounded-lg bg-white bg-opacity-70'>
            <CardTitle className='text-roxo-escuro font-bold mb-8 text-4xl flex justify-center'>Para saber mais entre em contato comigo via</CardTitle>
            <CardDescription className='flex space-x-4 justify-center' > 
                <Link href="mailto:alinebeatriz875@gmail.com" 
                 className='bg-roxo-escuro text-branco py-2 px-4 rounded hover:bg-azul-claro'>Email</Link>
                <Link href= "https://github.com/Aline875"
                 className='bg-roxo-escuro text-branco py-2 px-4 rounded hover:bg-azul-claro'>GitHub</Link>
                <Link href= "https://www.linkedin.com/in/aline-beatriz-/"
                 className='bg-roxo-escuro text-branco py-2 px-4 rounded hover:bg-azul-claro'>Linkedin</Link>
            </CardDescription>
        </Card>
    )
}

export default Contato
