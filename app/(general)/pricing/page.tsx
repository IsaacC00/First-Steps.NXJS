import { Metadata } from "next";

//? las metatatag ayuda a que sea SEO FRIENDLY
export const metadata: Metadata = {
 title: 'Pricing pagina de Isaac',
 description: 'Acerca de Isaac',
 keywords:['Isaac','Next','React']
};

export default function AboutPage() {

    return(
        <>
            <span className="text-5xl flex flex-col items-center">Pricing Page</span>
        </>
    )
}