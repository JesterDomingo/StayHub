import React from "react";
import { useLocation } from "react-router-dom";
import SliderGallery from "../../components/SliderGallery/SliderGallery";

import "./propertyListingPage.scss"
import Gallery from "../../components/Gallery/Gallery";

export default function PropertyListingPage() {
    const { state } = useLocation();

    const place = state?.listingDetails?.place ?? "We will change it when connect an API"

    return (
        <div className="container">

            <section className="property">
                <h1 className="property__heading">{place}</h1>
                {/* <SliderGallery></SliderGallery> */}
            </section>
            <section className="property__images">
                <Gallery></Gallery>
            </section>
            <section className="property__common-info">
                <div className="property__left-side">
                    <h3 className="property__short-heading">Entire vacation home in Burlington, Canada</h3>
                    <p className="property__short-subheading">2 guests - 1 bedroom - 1 bed - 1 bath</p>
                    <p className="property__description">Experience the charm of the 1938 Burlington Boathouse with a stunning lake view, just a short walk from downtown. Enjoy the cozy atmosphere, Sonos speakers in every room, and a comfortable bed with luxurious linens. Please note that this apartment may not be suitable for guests taller than 6'3" due to some ductwork. Unfortunately, the fireplace is currently not operable, and we've adjusted the price accordingly to offer you great value during your stay.
                    The space
                    Enjoy total privacy in this apartment, no shared space. Benefit from high-speed Bell Fibe internet, Netflix, Prime, and 2 Smart HD TVs. Immerse yourself in the Sonos sound system. Conveniently located, just a 15-min walk to downtown.
                    Guest access
                    This is a triplex and each apartment is completely separate with individual keypad access for each apartment.
                    Apartment comes with two parking spots both located at the North side of the parking lot.
                    Come down the North path to the main door, enter with keypad, once in the lobby, you'll see two black doors, yours is the one on the right also with a keypad for access.
                    Private outside deck with BBQ, table and chairs.
                    Other things to note
                    There is some duct work that lowers the height of the ceiling in parts of the kitchen and bedroom making the apartment not suitable for anyone 6'3" or taller.
                    There is no temp control in your apartment, the AC is set to 71 F in summer and the heat is set to 71F during the day and 68F at night for sleeping and can be adjusted by request.</p>
                </div>
                <div className="property__right-side">
                    here will be boocking block
                </div>
            </section>
        </div>
    );
}
