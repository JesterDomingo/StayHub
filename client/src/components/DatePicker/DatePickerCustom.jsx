import * as React from 'react';
import DatePicker from "react-datepicker";
import { useState } from 'react';

import "react-datepicker/dist/react-datepicker.css";
import "./datePickerCustom.scss"

export default function DatePickerCustom(props) {
    const [startDate, setStartDate] = useState(new Date("2024/02/08"));
    const [endDate, setEndDate] = useState(new Date("2024/02/10"));
    
    function passData(start = startDate, end = endDate) {
        const data = {
            startDate: startDate,
            endDate: endDate
        }
        
        return data;
    }

    return (
        <div className={`date-picker ${props.modificator}`}>
            <span className='date-picker__text'>FROM: </span>
            <DatePicker
                className='date-picker__input'
                selected={startDate}
                onChange={(date) => {
                    setStartDate(date)
                    props.onDatesChanged(passData(startDate, endDate))
                }}
                selectsStart
                startDate={startDate}
                endDate={endDate}
            />
            <span className='date-picker__text date-picker__text--to'>TO: </span>
            <DatePicker
                className='date-picker__input'
                selected={endDate}
                onChange={(date) => {
                    setEndDate(date)
                    props.onDatesChanged(passData(startDate, endDate))
                }    
                }
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
            />
        </div>
    );

}