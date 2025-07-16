//? utilizamos (general) los () para no tener que poner en la direccion url general/about
//? generel/princing. etc utilizamos el appraoute 
//? los server components son cuando el servidor envia js ala cliente
//? para que el frontend no tenga que cargar nada de js solo cuand oes necesario

import { NavBar } from "@/components";


export default function AboutLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar/>
      
      <div className="flex flex-col items-center p-24">
        <h1>Hello Root Layout About</h1>
        {children}
        {/* //? esto es un server component */}
        {Date()}
      </div>
    </>
  );
}