'use client'
import { useState, useEffect } from "react"
import Toolbar from "@/app/components/Toolbar"

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const hour = today.getHours() % 12 ? today.getHours()%12 : 12; 
    const ampm = today.getHours() >= 12 ? 'PM' : 'AM';
    const min = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()
   
    return (`${month}/${date}/${year} at ${hour}:${min} ${ampm}`)
}

export default function Editor() {
    const [text, setText] = useState('Enter an interesting though')
    const [textParts, setTextParts] = useState([])
    const [lastUpdated, setLastUpdated] = useState(getDate())
    const [suggestor, setSuggestor] = useState(null)
    const [isHovered, setIsHovered] = useState(false)

    useEffect( () => {
        <div>
            <span onMouseEnter={() => setIsHovered(true)}></span>
        </div>
        
    })

    const changeSuggestor = (option) => {
        console.log('option', option)
        setSuggestor(option);
        setIsHovered(false)
    }


    return (
        <div className="w-full space-y-5">
            <Toolbar onSelect={changeSuggestor}/>
            <p className="flex justify-center text-slate-300">{lastUpdated}</p>
            <div className="w-full border-[2px] border-slate-300 rounded-md text-slate-50 font-mono px-2 py-2">
                <div contentEditable='true' className="w-full h-80 outline-none" data-text={text}>
                    
                    {/* {textParts.length > 1 ? textParts.map((part, i) => <div key={i}>{part}</div> ): text} */}
                </div>
                
            </div>
        </div>

    )
}