import React from "react";
import { useState, useEffect } from "react";
import Accordion from "../Accordion/Accordion";
import DatePickerCustom from "../DatePicker/DatePickerCustom";
import PeopleNb from "../PeopleNb/PeopleNb";
import axios from 'axios'; 

import "./preBooking.scss"

export default function PreBooking(props) {

    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [numberOfGuests, setNumberOfGuests] = useState("");

    let numberOfNights = 1;

    const [userData, setUserData] = useState({});
    useEffect(() => {
        setUserData(JSON.parse(sessionStorage.getItem("jwt")));
    }, [])

    const booking = {
        user: userData?.user,
        place: props.place._id,
        checkIn, checkOut, numberOfGuests,
        price: props.place.price
    }

    const [isOpened, setIsOpened] = useState(false);
    const [location, setLocation] = useState('Where are you going?');
    const [people, setPeople] = useState('How many people?');


    const bookingHandler = async () => {
        await axios.post("/api/addBooking", booking);
    }

    const handleAccordionClickSec = (e) => {
        setPeople(e.currentTarget.textContent);
        setNumberOfGuests(e.currentTarget.textContent);
        setIsOpened(!isOpened);
    }
    const handleStartDate = (startDate) => {
        setCheckIn(new Date(startDate.startDate))
        setCheckOut(new Date(startDate.endDate))
    }   

    return (
        <div className="booking-block">
            <h2 className="booking-block__heading">{props.place.price} CAD <span>night</span></h2>
            <div className="booking-block__accordions">
                <Accordion
                    isOpen={isOpened}
                    heading={people}
                    rightBorder={true}
                    content=
                    {<PeopleNb
                        onPeopleChosen={handleAccordionClickSec}
                    />}
                />
            </div>
            <div className="booking-block__datepicker">
                <DatePickerCustom onDatesChanged={handleStartDate} />
            </div>
            <button className="booking-block__button" type="button" onClick={bookingHandler}>Book</button>
        </div>
    )
}