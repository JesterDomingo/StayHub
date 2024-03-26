import React from 'react'
import auth from './../auth/auth-helper'
import { Link, withRouter } from 'react-router-dom'

import './menu.scss';

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
const Menu = withRouter(({ history }) => (
  <header className='header'>
    <div className='container'>
      <nav className='header__navigation'>
        <Link to="/" className="header__link-home">
          <img className='header__logo' width="48" height="48" src={'assets/icons/logo.png'}></img>
        </Link>
        <div className='header__center'>

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
              {auth.isAuthenticated().user.seller && (<Link to="/seller/shops">My Posts</Link>)}
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
  // <AppBar position="static">
  //   <Toolbar>
  //     <Typography variant="h6" color="inherit">
  //       MERN Marketplace
  //     </Typography>
  //     <div>
  //       <Link to="/">
  //         <IconButton aria-label="Home" style={isActive(history, "/")}>
  //           <HomeIcon/>
  //         </IconButton>
  //       </Link>
  //       <Link to="/shops/all">
  //         <Button style={isActive(history, "/shops/all")}>All Shops</Button>
  //       </Link>
  //       <Link to="/cart">
  //         <Button style={isActive(history, "/cart")}>
  //           Cart
  //           <Badge color="secondary" invisible={false} badgeContent={cart.itemTotal()} style={{'marginLeft': '7px'}}>
  //             <CartIcon />
  //           </Badge>
  //         </Button>
  //       </Link>      
  //     </div>
  //     <div style={{'position':'absolute', 'right': '10px'}}><span style={{'float': 'right'}}>
  //     {
  //       !auth.isAuthenticated() && (<span>
  //         <Link to="/signup">
  //           <Button style={isActive(history, "/signup")}>Sign up
  //           </Button>
  //         </Link>
  //         <Link to="/signin">
  //           <Button style={isActive(history, "/signin")}>Sign In
  //           </Button>
  //         </Link>
  //       </span>)
  //     }
  //     {
  //       auth.isAuthenticated() && (<span>
  //         {auth.isAuthenticated().user.seller && (<Link to="/seller/shops"><Button style={isPartActive(history, "/seller/")}>My Shops</Button></Link>)}
  //         <Link to={"/user/" + auth.isAuthenticated().user._id}>
  //           <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
  //         </Link>
  //         <Button color="inherit" onClick={() => {
  //             auth.clearJWT(() => history.push('/'))
  //           }}>Sign out</Button>
  //       </span>)
  //     }
  //     </span></div>
  //   </Toolbar>
  // </AppBar>
))

export default Menu
