import React from 'react';
import logo from "../img/imgLogo.jpg";
import lyricsLogo from "../img/lyricsLogo.jpg";

const Logotype = () => {
    return (
        <div className='logo'>
            <img className='lyrics-logo' src={lyricsLogo} alt="lyricsLogo" />
            <img className='img-logo' src={logo} alt="logo" />
        </div>
    );
}

export default Logotype;


