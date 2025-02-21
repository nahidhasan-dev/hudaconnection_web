import ImageComponents from "./Image";
import { faHeart, faComment, faShare, faRepeat, faIdBadge } from '@fortawesome/free-solid-svg-icons';
import ReactionButton from "./ReactionButton";
import Image from "next/image";


export default function Post() {
    return (
        <div className="my-2">
            <div className=" bg-white border-[1px] rounded-lg border-gray-200">
                <div className="px-2 py-2 flex">
                    <ImageComponents path="/icons/huda_connection_logo.png" w={60} h={60} alt={"Profile Image"} />
                    <div className="mx-2 px-1 flex justify-between items-center w-full">
                        <div className=" flex flex-col">
                            <div className="flex items-center gap-1">
                                <p className="font-bold text-gray-600">Md. Nahid Hasan</p>
                                <Image src={"/icons/verified-solid.svg"} width={18} height={18} alt={"verified icon"} />
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <p>@nahid-hasan</p>
                                <div className="bg-gray-400 rounded-full w-1 h-1"></div>
                                <p>1 day ago</p>
                            </div>
                        </div>
                        <p className="font-bold text-gray-400 cursor-pointer">...</p>
                    </div>
                </div>

                <div className="ml-2 mr-2 mb-2">
                    <p>Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
                </div>

                <div className=" ml-2 mr-2 mb-2 bg-background rounded-lg flex items-center justify-center">
                    <ImageComponents path="/icons/huda_connection_logo.png" w={600} h={600} alt={"post Image"} />
                </div>

                <div className="border-b-[1px] border-gray-200 mx-2"></div>
                <div className="px-2 py-3 flex justify-evenly">
                    <ReactionButton initialCount={120} icon={faHeart} />
                    <ReactionButton initialCount={120} icon={faComment} />
                    <ReactionButton initialCount={120} icon={faShare} />
                    <ReactionButton initialCount={120} icon={faRepeat} />
                </div>
            </div>
        </div>
    );
}

