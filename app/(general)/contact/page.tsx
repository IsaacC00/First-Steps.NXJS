import { Metadata } from "next";

export const metadata:Metadata = {
 title: 'Pagina de contacto de Isaac',
 description: 'Pagina para contactar a Isaac',
 keywords:['Contacto','Llamada','Email']
};

export default function AboutPage() {

    return(
        <>  
            <span className="text-5xl">Contact Page</span>
        </>
    )
}