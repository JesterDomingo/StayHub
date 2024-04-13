import React from "react";
import Card from "../Card/Card";
import axios from "axios";
import { useState, useEffect } from "react";


import "./cardGrid.scss"

export default function CardGrid() {

    const [places, setPlaces] = useState([]);

    const loadPlaces = async () => {
        try {
            const { data } = await axios.get('/api/getPlaces/');
            if (!data) return;
            setPlaces(data);
        }
        catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        loadPlaces();
    }, []);
    
    useEffect(() => {
        console.log(places)
    }, [places]);

    return (
        <section className="card-grid">
            {places.map(item => {
                return (
                    <Card
                        key={item._id}
                        id={item._id}
                        title={item.title}
                        place={item.address}
                        date={item?.date ?? "April 2 - 12"}
                        price={item.price}
                        rating={item?.rating ?? 5}
                        mainPhoto={item.photos[0]}
                        photos={item.photos}
                    />
                )
            })}
        </section>
    )
}