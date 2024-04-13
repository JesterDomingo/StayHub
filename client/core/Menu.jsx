import React from 'react'
import auth from './../auth/auth-helper'
import { Link, withRouter } from 'react-router-dom'
import DatePickerCustom from '../src/components/DatePicker/DatePickerCustom';

import './menu.scss';
import Accordion from '../src/components/Accordion/Accordion';
import ListOfTheCities from '../src/components/ListOfCities/ListOfCities';
import PeopleNb from '../src/components/PeopleNb/PeopleNb';
import { useState } from 'react';
import logo2 from "../assets/icons/logo2.png";

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return { color: '#bef67a' }
  else
    return { color: '#ffffff' }
}
const isPartActive = (history, path) => {
  if (history.location.pathname.includes(path))
    return { color: '#bef67a' }
  else
    return { color: '#ffffff' }
}


const Menu = withRouter(({ history }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [location, setLocation] = useState('Where are you going?');
  const [people, setPeople] = useState('How many people?');


  const handleAccordionClick = (e) => {
    setLocation(e.currentTarget.textContent)
    setIsOpened(!isOpened);
  }

  const handleAccordionClickSec = (e) => {
    setPeople(e.currentTarget.textContent)
    setIsOpened(!isOpened);
  }

  return (
    <header className='header'>
      <div className='container'>
        <nav className='header__navigation'>
          <Link to="/" className="header__link-home">
            <img className='header__logo' width="200" height="48" src={logo2}></img>
          </Link>
          <div className='header__center'>
            <Accordion
              isOpen={isOpened}
              heading={location}
              content=
              {<ListOfTheCities
                onCityChosen={handleAccordionClick}
              />}
            />
            <DatePickerCustom modificator="date-picker--no-border"/>
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
          <div className='header__login'>
            {
              !auth.isAuthenticated() && (<span>
                <Link className="header__button" to="/signup">
                  Sign up
                </Link>
                <Link className="header__button" to="/signin">
                  Sign In
                </Link>
              </span>)
            }
            {
              auth.isAuthenticated() && (<span>
                <Link className="header__button" to={"/user/" + auth.isAuthenticated().user._id}>
                  My Page
                </Link>
                <button className="header__button" type="button" color="inherit" onClick={() => {
                  auth.clearJWT(() => history.push('/'))
                }}>Sign out</button>
              </span>)
            }
          </div>
        </nav>
      </div>
    </header>
    
  )
})

export default Menu
