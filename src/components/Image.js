"use client"

import Image from "next/image";


export default function ImageComponents({ path, w, h, alt, className }) {
    return (
        <Image src={path} width={w} height={h} alt={alt} className={className} />
    );
}
