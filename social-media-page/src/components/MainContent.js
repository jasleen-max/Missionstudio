import React, { useState } from 'react';
import './MainContent.scss';
import SmallScreenSideBar from './SmallScreenSideBar';

const MainContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const width = window.innerWidth;
  const [scale, setScale] = useState(1); // Initial scale

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleZoomIn = () => {
    setScale(scale + 0.1); // Increase the scale by 0.1
  };

  const handleZoomOut = () => {
    setScale(scale - 0.1); // Decrease the scale by 0.1
  };
 
  return (
    <div className="main-content" style={{ transform: `scale(${scale})` }}>
      {isSidebarOpen ?<SmallScreenSideBar toggleSidebar={toggleSidebar}/>:<></>}
      <div className="top-content">
   
        
        <div className="search-bar">
        <div className="toggle-sidebar-button" onClick={toggleSidebar}>
          <img src={require('../assets/hamburger.png')} alt="Menu" />
        </div>
        <input type="text" placeholder="Search Movies and Shows.." />
        </div>
        <div className="notification-head-pic">
        <img classname="search" src={require('../assets/search.png')} alt="bell" />
        <img src={require('../assets/notification.png')} alt="bell" />
        <img src={require('../assets/apphead.png')} alt="Profile" />
        <img src={require('../assets/face.png')} alt="Profile" />
        </div>
      </div>
      <div className="main-picture">
       {width<601? <img src={require('../assets/mob-main-pic.png')} alt="Profile" />
       :width<1025?<img src={require('../assets/tab-main-pic.png')} alt="Profile" />
       :<img src={require('../assets/MainPic.png')} alt="Profile" />}
      </div>
      <div className="profile-container" style={scale < 0.5 ? { marginTop: "5%" } : {}}>
        <div className="profile-details">
          <div className='name-option-bar'>
            <div className="profile-name-tag">
          <div className="profile-picture">
            <img style={{width:"auto"}} src={require('../assets/profile.png')}  alt="Profile" />
          </div>
          
          <div className='name-tag'>
            <text className='name'>Tom Cruise</text>
            <text>No dream is ever just a dream</text>
          </div>
          </div>
          <img className='option-bar' src={require('../assets/optionbar.png')} alt="Profile" />
       
          </div>
          <div className="navigation-bar">
            <div>
            <a className='menu-first' href="#awards">
              Awards
            </a>
            <a className='menu' href="#events">Events</a>
            <a className='menu' href="#shows">Shows</a>
            <a className='menu' style={{fontWeight:'bold'}}href="#movies">Movies</a>
            </div>
            <div className='movies-show'>
              <text>54 movies- 1 show</text>
            </div>
          </div>
        
        </div>
      </div>
      <div className="movie-details" style={scale < 0.5 ? { marginTop: "5%" } : {}}>
        <div className="movie-info">
          <div className="movie-description">
            <img className="movie-pic"src={require('../assets/jackreacher.png')} alt="Movie Poster" />
            <div className="movie-detail">
            <text className='movie-detail-header'>
            Jack Reacher: Never Go Back
            </text>
            <text className='movie-detail-text' >
            Jack Reacher must uncover the truth behind a major government conspiracy.
              </text>
              <button className='movie-detail-button'>
                Subscribe To Watch
              </button>
              </div>
          </div>
        </div>
        </div>
        <div className="movie-plot-cast-running">
          <div className="movie-plot-cast">
          <text className='movie-detail-header'>
            Plot
            </text>
           
            <text className='plot-text' >
            
            After helping the 110th US Army CID Military Police (MP) arrest corrupt Oklahoma Sheriff Raymond Wood, his local deputy and bust a human trafficking ring, drifter and ex-US Army Military Police investigator and major, Jack Reacher, returns to his old military headquarters in Washington, D.C., to meet Major Susan Turner, with whom he has been working by phone during his travels.
<br/>
<br/>
Evidence shows that Turner is involved in the murders of two US Army MP soldiers in Afghanistan, but Reacher believes she is being framed. He meets with Turner's lawyer, Army J.A.G. Colonel Moorcroft to find out what the charges are against her. Moorcroft informs him that an old acquaintance of his, Candice Dutton, has filed a paternity suit against him, claiming he is the biological father of her 15-year-old daughter, Samantha. Reacher tries to reach out to her, but she rebuffs him.
              </text>
          
              
              <text className='movie-detail-header'>
            Cast
            </text>
            <div style={{padding:"1%"}}>
            <img  src={require('../assets/vector.png')} style={{marginRight:"2%"}} />
            <text className='plot-text' >
            Tom Cruise as Jack Reacher, a former U.S. Army Military  
            </text>
            <br/>
            <text style={{padding:"5%"}}>
            Police Officer
              </text>
              </div>
              <div style={{padding:"1%"}}>
            <img  src={require('../assets/vector.png')} style={{marginRight:"2%"}} />
              <text className='plot-text' >
              Cobie Smulders as Major Susan Turner
              </text>
              </div>
              <div style={{padding:"1%"}}>
            <img  src={require('../assets/vector.png')} style={{marginRight:"2%"}} />
              <text className='plot-text' >
              Aldis Hodge as Captain Espin
              </text>
              </div>
              <div style={{padding:"1%"}}>
            <img  src={require('../assets/vector.png')} style={{marginRight:"2%"}} />
              <text className='plot-text' >
              Danika Yarosh as Samantha, Jack Reacher's assumed biological daughter
              </text>
              </div>
              <div style={{padding:"1%"}}>
            <img  src={require('../assets/vector.png')} style={{marginRight:"2%"}} />
              <text className='plot-text' >
              Jessica Stroup as Lieutenant Sullivan
              </text>
             </div>
           
          </div>
          {width<601? <img src={require('../assets/mob-running.png')} alt="Profile" />
       :width<1025?<img src={require('../assets/tab-running.png')} alt="Profile" />
       :<img src={require('../assets/running.png')} alt="Profile" />}
          
        </div>
        <div className="zoom-controls">
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
      </div>
    
    </div>
  );
};

export default MainContent;
