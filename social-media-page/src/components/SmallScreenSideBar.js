import React from 'react';
import { NavLink } from 'react-router-dom';
import './SmallScreenSideBar.scss';

const SmallScreenSideBar = (props) => {
  return (
    <div className="ss-sidebar-container">
      <nav className="ss-side-navbar">
        <div className="logo">
          <img src={require('../assets/Logo.png')} alt="Logo" />
        </div>
        <div className="section-title">Your Feed</div>
        <NavLink to="/movies" activeClassName="active-link">
          Movies
        </NavLink>
        <div className="section-sub-title">Favorites</div>
        <NavLink to="/favorites/jack" activeClassName="active-link">
          <div className='profile-name'>
            <img className='profile-img' src={require('../assets/TomCruise.png')} alt="tom" />
            <span>Tom Cruise</span>
          </div>
        </NavLink>
        <NavLink to="/favorites/niel" activeClassName="active-link">
          <div className='profile-name'>
            <img className='profile-img' src={require('../assets/TomCruise.png')} alt="Logo" />
            <span>Leonardo DiCaprio</span>
          </div>
        </NavLink>
        <NavLink to="/favorites/dady" activeClassName="active-link">
          <div className='profile-name'>
            <img className='profile-img' src={require('../assets/TomCruise.png')} alt="Logo" />
            <span>Johnny Depp</span>
          </div>
        </NavLink>
      </nav>
      <div>
      <button style={{marginTop:"20%",width:"25px",height:"25px",display:"flex",justifyContent:"center",alignItems:"center"}} onClick={props.toggleSidebar}>
      <img src={require('../assets/cross.png')} style={{width:"20px",height:"20px"}}alt="Menu" />
      </button>
      </div>
  
    </div>
  );
};

export default SmallScreenSideBar;
