"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from './ActiveLink.module.css';

interface Props {
    title: string,
    path: string,
    icon: JSX.Element
}

export const ActiveLink = ({ title, path, icon }: Props) => {
    const pathName = usePathname();

    return (
        <Link href={path} title={title}>
            <div className={`${style['link']} middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white ${(pathName === path ) && style['active-link']} w-full flex items-center gap-4 px-4 capitalize`}>
                {icon}
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">{title}</p>
            </div>
        </Link>    
    )
};