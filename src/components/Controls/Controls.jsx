import { useState } from 'react';
import './Controls.css';

const controlList = [
    {
        name: "server",
        type: "select",
        label: "Server",
        placeholder: ['server1', 'server2']
    },
    {
        name: "topP",
        type: "text",
        label: "Top P",
        placeholder: "Some number between 0-1"
    },
    {
        name: "topK",
        type: "text",
        label: "Top K",
        placeholder: "Some number between 0-1"
    },
    {
        name: "temp",
        type: "text",
        label: "Temp",
        placeholder: "Lorem ipsum dolor sit amit"
    },
    {
        name: "sampleLength",
        type: "text",
        label: "Sample Length",
        placeholder: "Lorem ipsum dolor sit amit"
    },
    {
        name: "stopSequence",
        type: "text",
        label: "Stop Sequence",
        placeholder: "Lorem ipsum dolor sit amit"
    },
]

function Controls() {
    const [isOpen, setIsOpen] = useState(true)
  return (
    <div className="Controls">
        <header className="controlHeader">
            <h2>Controls</h2>
            <p onClick={() => {setIsOpen(!isOpen)}}>v</p>
        </header>
        <div className={isOpen ? "controlList open" : "controlList closed"}>
            {controlList.map(input => {
                return (
                    <label key={input.name}>
                        {input.label}
                        <input key={input.name} type={input.type} placeholder={input.placeholder} />
                    </label>
                )
            })}
        </div>
    </div>
  );
}

export default Controls;
