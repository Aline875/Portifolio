import { FC } from "react";
import  Link from "next/link";
const Header: FC = () =>
{
    return(
        <header className="bg-roxo-escuro text-branco py-4 ">
            <div className=" container mx-auto flex items-center justify-center">
                <nav className="flex space-x-4">
                    <Link href="/" className="hover:text-azul-claro">Home</Link>
                    <Link href="../SobreMim" className="hover:text-azul-claro">Sobre mim</Link>
                    <Link href="../Projetos" className="hover:text-azul-claro">Projetos</Link>
                    <Link href="../Contato" className="hover:text-azul-claro">Contato</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header