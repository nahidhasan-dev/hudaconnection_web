"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faSearch, faHouse, faCirclePlay, faImages, faBriefcase, faMessage } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import Link from "next/link";
import ImageComponents from './Image';

const menulink = [
    { id: "1", name: "Home", link: "/", icon: faHouse, width: 21 },
    { id: "2", name: "Video", link: "/videos", icon: faCirclePlay, width: 20 },
    { id: "3", name: "Photo", link: "/photos", icon: faImages, width: 22 },
    { id: "4", name: "Jobs", link: "/jobs", icon: faBriefcase, width: 20 },
    { id: "5", name: "Chat", link: "/chat", icon: faMessage, width: 20 },
];

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className={`border-[1px] rounded-lg border-gray-200 sticky top-0 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-white/30" : "bg-white"
            }`}>
            <div className="xsm:flex sm:flex lg:hidden xlg:hidden xxl:hidden 2xl:hidden p-1 items-center justify-between">
                <FontAwesomeIcon icon={faBarsStaggered} className="pl-2 text-iconColor cursor-pointer" />
                <Link href="/" className="flex items-center gap-2 p-2 rounded-full hover:bg-background">
                    <ImageComponents path="/icons/huda_connection_logo_tranparent.png" alt="huda connection logo" w={50} h={50} />
                    <span className="text-iconColor font-bold">Huda Connection</span>
                </Link>
                <div className="m-2 p-2 w-10 h-10 flex justify-center items-center rounded-full bg-gray-100">
                    <FontAwesomeIcon icon={faSearch} width={22} className="text-gray-400 cursor-pointer " />
                </div>
            </div>
            <div className="p-1 flex justify-between">
                {menulink.map(item => (
                    <Link
                        key={item.id}
                        href={item.link}
                        className={"flex flex-col items-center p-2 text-gray-500 rounded-md hover:bg-background focus:bg-background hover:text-iconColor focus:text-iconColor"}>
                        <FontAwesomeIcon icon={item.icon} width={item.width} className="" />
                        <span className="">{item.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

