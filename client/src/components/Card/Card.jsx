import React from "react";

import "./card.scss"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Card(props) {
    return (
        <Link to="#" className="card">
            <div className="card__img-wrap">
                <img className="card__img" width="240" height="235" src="assets/images/test-img.webp"></img>
            </div>
            <section className="card__info-section">
                <div className="card__heading-wrap">
                    <h2 className="card__title">{props.title}</h2>
                    <p className="card__rating"><span className="material-symbols-outlined card__icon">star</span><span>{props.rating}</span></p>
                </div>
                <div className="card__info">
                    <p className="card__info--low-height">{props.place}</p>
                    <p className="card__info--low-height">{props.date}</p>
                </div>
                <p className="card__price">
                    <strong className="card__price--bold">${props.price} CAD</strong> night
                </p>
            </section>
        </Link>
    )
  }