'use client'
import { useState } from "react";

const options = [
    {
        title: 'B',
        subtitle: 'Bold',
        description: 'Emphasize the highlighted portion with a deterministic tone.'
    },
    {
        title: 'I',
        subtitle: 'Italic',
        description: ''
    },
    {
        title: 'U',
        subtitle: 'Underline',
        description: ''
    },
    {
        title: 'S',
        subtitle: 'Strikethrough',
        description: ''
    }
]

export default function Toolbar({onSelect}) {
    const [isActive, setActive] = useState(null);

    const handleClick = (option) => {
        onSelect(option);
        setActive(option);
    }


    return (
        <div className="flex justify-center space-x-3 text-yellow-400 rounded-md">
            {options.map((option, i) => (
                // <div key={i} onClick={handleClick(option)}>
                    <button type="button" key={i} onClick={() => handleClick(option)} autofocus={option === isActive} className="border-[2px] rounded-md border-slate-300 h-10 w-10">{option.title}</button>
                // </div>
        ))}
        </div>
    )
}