import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faEllipsisVertical, faMoneyCheckDollar, faSackDollar, faRectangleAd, faStore, faMoon, faBell, faGear, faCircleQuestion, faUserShield, faFileContract, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const menulink = [
    {
        id: "1",
        name: "Deen",
        link: "/deen",
        icon: faMoon,
    },
    {
        id: "2",
        name: "Marketplace",
        link: "/marketplace",
        icon: faStore,
    },
    {
        id: "3",
        name: "Ads",
        link: "/ads",
        icon: faRectangleAd,
    },
    {
        id: "4",
        name: "Monetization",
        link: "/monetization",
        icon: faSackDollar,
    },
    {
        id: "5",
        name: "Payments",
        link: "/payments",
        icon: faMoneyCheckDollar,
    },
    {
        id: "6",
        name: "Notifications",
        link: "/notifications",
        icon: faBell,
    },
    {
        id: "7",
        name: "Settings",
        link: "/settings",
        icon: faGear,
    },
    {
        id: "8",
        name: "Help & Feedback",
        link: "/help-feedback",
        icon: faCircleQuestion,
    },
    {
        id: "9",
        name: "Privacy Policy",
        link: "/privacy-policy",
        icon: faUserShield,
    },
    {
        id: "10",
        name: "Terms & Conditions",
        link: "/terms-conditions",
        icon: faFileContract,
    },
    {
        id: "11",
        name: "Log Out",
        link: "/",
        icon: faRightFromBracket,
    },
];

export default function LeftBar({ closeSidebar }) {
    return (
        <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-4 ">
            <div className="flex flex-col gap-4 text-base items-center xl:items-start">

                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 p-2 rounded-full hover:bg-background">
                        <Image src="/icons/huda_connection_logo_tranparent.png" alt="huda connection logo" width={50} height={50} />
                        <span className="hidden xsm:inline sm:inline md:inline xl:inline text-iconColor font-bold">Huda Connection</span>
                    </Link>
                    <FontAwesomeIcon icon={faXmark} className="hidden xsm:inline sm:inline md:inline text-gray-600 cursor-pointer" onClick={closeSidebar} width={22} height={22} />
                </div>
                <div className="flex flex-col gap-3">
                    {menulink.map(item => (
                        <Link href={item.link} className="flex items-center gap-4 p-2 rounded-full hover:bg-background focus:bg-background active:bg-background" key={item.id}>
                            <FontAwesomeIcon icon={item.icon} width={20} className="text-iconColor" />
                            <span className="hidden xsm:inline sm:inline md:inline xl:inline">{item.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-background rounded-full relative overflow-hidden">
                        <Image src="/icons/huda_connection_logo_tranparent.png" alt="Nahid Hasan" fill />
                    </div>
                    <div className="hidden xl:flex flex-col">
                        <span className="font-bold text-sm">Huda Connection</span>
                        <span className="text-sm text-gray-400">@huda_connection</span>
                    </div>
                </div>

                <FontAwesomeIcon icon={faEllipsisVertical} width={4} className=" hidden xl:block font-bold cursor-pointer text-iconColor" />
            </div>
        </div>
    );
}
