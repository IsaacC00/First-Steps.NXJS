//? por lo genera tratamos de que todo sea un server componenet
//? pero solo en caso de querer renderizar algo en el lado del cliente  utulizamos:
//? prefix: 
'use client';

import React from 'react'   
import Link from 'next/link';
import styles from './ActiveLink.module.css';
import { usePathname } from 'next/navigation';

interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
    
    const pathName = usePathname()

    return (
        <Link
            className={ `${styles.link} ${(pathName === path) && styles['active-link']}` }
            href={path}>
            {text}
        </Link>
    )
}
