import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "../active-link/ActiveLink";


const navItems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
]

export const NavBar = () => {
  //? todos los componentes por defecto son server components 
  //? solo se ejecutara el siguiente codigo una vez el servidor lo monte y no mas
  console.log('Navbar creado');

  //? siempre se procura que todo sea un server componene para que en el 
  //? lado del cliente no se cargue tanto js

  //? Link hace una peticione apenas ek usuario pase el raton sobre el tag
  //? para que no tenga que esoerar a que cargue el conteniod (prefetching)
  return (
    <nav className="flex bg-blue-800/30 bg p-2 m-2 rounded">
      <Link className="flex items-center" href={'/'}>
        <HomeIcon className="mr-2"/>
        Home
      </Link>
      <div className="flex flex-1"></div>
      {
        //? o tambien ...navItem para deestrucutrar todo
        navItems.map((navItem) => (<ActiveLink key={navItem.path} path={navItem.path} text={navItem.text}  />))
      }
      {/* <Link className="mr-2" href="/about">About</Link>
      <Link className="mr-2" href="/contact">Contact</Link>
      <Link className="mr-2" href="/pricing">Pricing</Link> */}
    </nav>
  )
}
