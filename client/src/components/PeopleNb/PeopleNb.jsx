import React from "react";

import "./peopleNb.scss"


export default function PeopleNb(props) {
    const temporaryNbPeopleList = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <ul className="people-list">
            {temporaryNbPeopleList.map(item => {
                return (
                    <li key={item} className="people-list__item">
                        <button type="button" className="people-list__button" onClick={props.onPeopleChosen}>{item}</button>
                    </li>
                )
            })}
        </ul>
    )
}