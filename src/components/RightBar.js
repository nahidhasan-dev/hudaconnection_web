import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Input } from "@headlessui/react";

export default function RightBar() {
    return (
        <div className='h-screen sticky top-0 flex flex-col items-center pt-2 pb-4'>
            <div className="flex flex-col gap-4 items-center border-b-[1px]">
                <div className="m-2 p-2 flex justify-between items-center rounded-full bg-gray-100">
                    <Input className="px-2 flex-1 bg-transparent border-none outline-none" placeholder="search here....." />
                    <FontAwesomeIcon icon={faSearch} width={22} className="text-gray-300 cursor-pointer" />
                </div>
            </div>

            <div className='w-full items-center mt-2'>
                <div className='bg-background w-full h-[160px] rounded-lg'></div>
                <div className='bg-iconColor rounded-full w-[130px] h-[130px] mt-[-75px] mx-auto'></div>
            </div>

            <div className='font-bold text-gray-500 mt-2 text-lg'>Md. Nahid Hasan</div>
            <div className='text-gray-400 text-base'>@nahid-hasan</div>

            <div className='text-gray-500 text-base'>Share the light of islam</div>

        </div>
    );
}

