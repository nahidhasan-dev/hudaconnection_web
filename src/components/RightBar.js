import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Input } from "@headlessui/react";

export default function RightBar() {
    return (
        <div className='h-screen sticky top-0 flex flex-col justify-between pt-2 pb-4'>
            <div className="flex flex-col gap-4 items-center border-b-[1px]">
                <div className="m-2 p-2 flex justify-between items-center rounded-full bg-gray-100">
                    <Input className="px-2 flex-1 bg-transparent border-none outline-none" placeholder="search here....." />
                    <FontAwesomeIcon icon={faSearch} width={22} className="text-gray-300 cursor-pointer" />
                </div>

            </div>
        </div>
    );
}

