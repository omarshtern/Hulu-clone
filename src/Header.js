import React from 'react'
import './Header.css'
import image from './images/download.jpg'
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const Header = () => {
    return (
        <div className='header'>
            <div className="header_icons">
                <div className="header_icon active">
                <HomeIcon />
                <p>Home</p>
                </div>
                <div className="header_icon ">
                <FlashOnIcon />
                <p>TRENDINO</p>
                </div>
                <div className="header_icon">
                <LiveTvIcon />
                <p>VERIFIED</p>
                </div>
                <div className="header_icon">
                <VideoLibraryIcon />
                <p>Collections</p>
                </div>
                <div className="header_icon">
                <SearchIcon />
                <p>search</p>
                </div>
                <div className="header_icon">
                <PersonOutlineIcon />
                <p>account</p>
                </div>
               
            </div>
            <img src={image} alt="hey" />
        </div>
    )
}

export default Header
