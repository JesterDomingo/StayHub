import React from "react";

import "./listOfCities.scss"

export default function ListOfTheCities(props) {
    const temporaryCitiesList = [
        "Toronto",
        "Montreal",
        "Vancouver",
        "Calgary",
        "Edmonton",
        "Ottawa",
        "Winnipeg",
        "Quebec City",
        "Hamilton",
        "Kitchener",
        "London",
        "Victoria",
        "Halifax",
        "Oshawa",
        "Windsor",
        "Saskatoon",
        "Regina",
        "St. John's",
        "Barrie",
        "Sherbrooke"
      ];

      return (
        <ul className="cities-list">
            {temporaryCitiesList.map(item => {
                return (
                    <li key={item} className="cities-list__item">
                        <button type="button" className="cities-list__button" onClick={props.onCityChosen}>{item}</button>
                    </li>
                )
            })}
        </ul>
      )
}