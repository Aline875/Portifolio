import { FC } from "react";
import  Link from "next/link";
const Header: FC = () =>
{
    return(
        <header className="bg-azul-royal text-branco py-4 ">
            <div className=" containermx-auto flex items-center justify-center">
                <nav className="flex space-x-4">
                    <Link href="/" className="hover:text-azul-claro">Home</Link>
                    <Link href="#" className="hover:text-azul-claro">Sobre mim</Link>
                    <Link href="#" className="hover:text-azul-claro">Portifólio</Link>
                    <Link href="#" className="hover:text-azul-claro">Contato</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header