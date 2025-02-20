import ImageComponents from "./Image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faCirclePlay, faBriefcase, faNewspaper } from '@fortawesome/free-solid-svg-icons';



export default function PostShare() {
    return (
        <div className="my-2">
            <div className=" bg-white border-[1px] rounded-lg border-gray-200">
                <div className="px-2 py-3 flex justify-between">
                    <ImageComponents path="/icons/huda_connection_logo.png" w={60} h={60} alt={"Profile Image"} />
                    <div className="mx-2 px-2 flex flex-1 items-center justify-center rounded-full h-12 bg-gray-100 cursor-pointer">
                        <p className="text-gray-500 select-none">Write your post</p>
                    </div>
                </div>
                <div className="px-2 py-3 flex justify-evenly">
                    <div className="px-2 py-1 flex items-center gap-1 text-iconColor bg-background rounded-full cursor-pointer">
                        <FontAwesomeIcon icon={faImage} width={20} />
                        <span className="">Photo</span>
                    </div >
                    <div className="px-2 py-1 flex items-center gap-1 text-iconColor bg-background rounded-full cursor-pointer">
                        <FontAwesomeIcon icon={faCirclePlay} width={20} />
                        <span>Video</span>
                    </div>
                    <div className="px-2 py-1 flex items-center gap-1 text-iconColor bg-background rounded-full cursor-pointer">
                        <FontAwesomeIcon icon={faNewspaper} width={20} />
                        <span>Article</span>
                    </div>
                    <div className="px-2 py-1 flex items-center gap-1 text-iconColor bg-background rounded-full cursor-pointer">
                        <FontAwesomeIcon icon={faBriefcase} width={20} />
                        <span>Job</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

