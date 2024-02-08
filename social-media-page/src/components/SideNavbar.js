import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideNavbar.scss';

const SideNavbar = () => {
  return (
  
  <nav className="side-navbar">
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
          <img className='profile-img' src={require('../assets/TomCruise.png')} alt="tom">
          </img>
<span>
Tom Cruise
</span>
        </div>
       
      </NavLink>
      <NavLink to="/favorites/niel" activeClassName="active-link">
      <div className='profile-name'>
          <img className='profile-img' src={require('../assets/Leonardo.png')} alt="Logo">
          </img>
<span>
Leonardo DiCarpio
</span>
</div>
     
      </NavLink>
      <NavLink to="/favorites/dady" activeClassName="active-link">
      <div className='profile-name'>
          <img className='profile-img' src={require('../assets/Johny.png')} alt="Logo">
          </img>
<span>
Johny Depp
</span>
</div>
    
      </NavLink>
   
    </nav>
  );
};

export default SideNavbar;
