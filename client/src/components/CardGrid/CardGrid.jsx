import React from "react";
import Card from "../Card/Card";

import "./cardGrid.scss"

export default function CardGrid() {

    const testArray = [
        {
            id: 1,
            title: "Canada1",
            place: "Ontario Lake",
            date: "March 10 - 20",
            price: 100,
            rating: '4.5',
        },
        {
            id: 2,
            title: "Canada2",
            place: "Ontario Lake",
            date: "March 12 - 21",
            price: 200,
            rating: '5.0',
        },
        {
            id: 3,
            title: "Canada3",
            place: "Ontario Lake",
            date: "March 11 - 19",
            price: 150,
            rating: '3.0',
        },
        {
            id: 4,
            title: "Canada4",
            place: "Erie Lake",
            date: "March 9 - 24",
            price: 130,
            rating: '5.0',
        },
        {
            id: 5,
            title: "Canada5",
            place: "Scugog Lake",
            date: "April 1 - 11",
            price: 210,
            rating: '3.0',
        },
        {
            id: 6,
            title: "Canada6",
            place: "Lowbanks Lake",
            date: "April 1 - 11",
            price: 310,
            rating: '5.0',
        },
        {
            id: 7,
            title: "Canada7",
            place: "Simcoe Lake",
            date: "April 1 - 11",
            price: 200,
            rating: '5.0',
        },
        {
            id: 8,
            title: "Canada8",
            place: "Ontario Lake",
            date: "April 2 - 12",
            price: 250,
            rating: '3.0'
        },
        {
            id: 9,
            title: "Canada9",
            place: "Ontario Lake",
            date: "April 2 - 12",
            price: 250,
            rating: '4.0',
        },
        {
            id: 10,
            title: "Canada10",
            place: "Ontario Lake",
            date: "April 2 - 12",
            price: 450,
            rating: '5.0',
        },
    ]

    return (
        <section className="card-grid">
            {testArray.map(item => {
                return (
                    <Card
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        place={item.place}
                        date={item.date}
                        price={item.price}
                        rating={item.rating}
                    />
                )
            })}
        </section>
    )
}