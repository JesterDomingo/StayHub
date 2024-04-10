import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useLocation } from "react-router-dom";
import SliderGallery from "../../components/SliderGallery/SliderGallery";

import "./propertyListingPage.scss"
import Gallery from "../../components/Gallery/Gallery";

export default function PropertyListingPage() {

    const [place, setPlace] = useState([]);
    const {placeId} = useParams();

    console.log(placeId);


    const getPlace = async () => {
        try {
            const { data } = await axios.get(`/api/places/${placeId}`);
            if (!data) return;
            setPlace(data);
        }
        catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getPlace();
    }, []);
    
    useEffect(() => {
        console.log(place)
    }, [place]);

    // const place = state?.listingDetails?.place ?? "We will change it when connect an API"

    return (
        <div className="container">

            <section className="property">
                <h1 className="property__heading">{place.title}</h1>
                {/* <SliderGallery></SliderGallery> */}
            </section>
            <section className="property__images">
                <Gallery
                    photos={place.photos}
                />
            </section>
            <section className="property__common-info">
                <div className="property__left-side">
                    <h3 className="property__short-heading">Entire vacation home in {place.address}</h3>
                    <p className="property__short-subheading">2 guests - 1 bedroom - 1 bed - 1 bath</p>
                    <p className="property__description">{place.description}</p>
                </div>
                <div className="property__right-side">
                    here will be boocking block
                </div>
            </section>
        </div>
    );
}
