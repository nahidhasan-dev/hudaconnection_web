"use client"
import { useState } from "react";
import { formatNumber } from './../utils/FormatNumbers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function ReactionButton({ initialCount, icon }) {
    const [count, setCount] = useState(initialCount);
    return (
        <div
            onClick={() => setCount(count + 1)}
            className="px-2 py-1 flex items-center gap-1 text-gray-400 bg-background rounded-full cursor-pointer hover:text-iconColor focus:text-iconColor">
            <FontAwesomeIcon icon={icon} width={20} />
            <span className="">{formatNumber(count)}</span>
        </div >
    );
}
