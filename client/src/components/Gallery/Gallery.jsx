import React from "react";
import { Modal } from "@material-ui/core";
import SliderGallery from "../SliderGallery/SliderGallery";

import { useState } from "react";

import "./gallery.scss"

export default function Gallery(props) {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleModal = () => setIsOpen(!isOpen);

    return (
        <section className="gallery">
            {props.photos ? <>
            <button onClick={handleModal} type="button" className="gallery__item gallery__item--1">
                <img src={`../${props.photos[0]}`} className="gallery__img" alt="Image 1"></img>
            </button>
            <button onClick={handleModal} type="button" className="gallery__item gallery__item--2">
                <img src={`../${props.photos[1]}`} alt="Gallery image 2" className="gallery__img"></img>
            </button>
            <button onClick={handleModal} type="button" className="gallery__item gallery__item--3">
                <img src={`../${props.photos[2]}`} alt="Gallery image 3" className="gallery__img"></img>
            </button>
            <button onClick={handleModal} type="button" className="gallery__item gallery__item--4">
                <img src={`../${props.photos[3]}`} alt="Gallery image 4" className="gallery__img"></img>
            </button>
            </> : null
            }

            <Modal
                open={isOpen}
                onClose={handleModal}
            >
                <div className="gallery__modal-wrap">
                    <SliderGallery
                        photos = {props.photos}
                    />
                    <button onClick={handleModal} type="button" className="gallery__modal-close">
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    </button>
                </div>
            </Modal>
        </section>
    )
}