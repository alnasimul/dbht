import React from 'react';
import logo from './../../logo.png';
import sampleImg from './../../sampleimg.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <header>
                <div className="headerArea">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div>
                        <img className="sampleImg"src={sampleImg} alt=""/>
                    </div>
                </div>
                <h3>About us</h3>
            </header>
        </div>
    );
};

export default Header;