import React from "react";

import "./gallery.scss"

export default function Gallery() {
    return (
        <section className="gallery">
            <figure className="gallery__item gallery__item--1">
                <img src="../assets/images/test-img.webp" className="gallery__img" alt="Image 1"></img>
            </figure>
            <figure className="gallery__item gallery__item--2">
                <img src="../assets/images/test-img.webp" alt="Gallery image 2" className="gallery__img"></img>
            </figure>
            <figure className="gallery__item gallery__item--3">
                <img src="../assets/images/test-img.webp" alt="Gallery image 3" className="gallery__img"></img>
            </figure>
            <figure className="gallery__item gallery__item--4">
                <img src="../assets/images/test-img.webp" alt="Gallery image 4" className="gallery__img"></img>
            </figure>
        </section>
    )
}