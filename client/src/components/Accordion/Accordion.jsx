import React, { useEffect } from "react";
import { useState } from "react";


import "./accordion.scss"

export default function Accordion(props) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(false)
    }, [props.isOpen]);

    function handleClick() {
        setIsOpen(!isOpen)
    }

    return (
        <div className="accordion">
            <button 
                onClick={handleClick} 
                type="button" 
                className={props.rightBorder ? "accordion__button accordion__button--rb" : "accordion__button"}
            >
                {props.heading}
            </button>
            {isOpen ? 
                <div className="accordion__content">
                    {props.content}
                </div> : null
            }
        </div>
    )
}