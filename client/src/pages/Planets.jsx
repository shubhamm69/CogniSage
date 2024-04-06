import React from 'react';
import { Link } from 'react-router-dom';
import './css/planets.css';
import sun from '../assets/sun.png';
import earth from '../assets/earth.png';
import jupiter from '../assets/jupiter.png';
import mars from '../assets/mars.png';
import mercury from '../assets/mercury.png'; // Corrected the import path
import neptune from '../assets/neptune.png';
import saturn from '../assets/saturn.png';
import uranus from '../assets/uranus.png';
import venus from '../assets/venus.png';
import background from '../assets/solar7.jpg'
import title from '../assets/solarsystem.png'; // Assuming you want to use this as a title image

export default function Planets() {
  return (
    <div className="body">
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', minHeight: '100vh', minWidth: '100vw', zIndex: 0}}>
      <img src={title} alt="Title Image" style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 999 }} className="heading" />

      <div className="container">
        <div className="box sun">
          <Link to="/planetsinfo#sun">
            <img src={sun} alt="Sun" />
          </Link>
          <p style={{ color: '#e7ef71', fontFamily: 'monospace', fontSize: 'xx-large', fontWeight: 'bold' }}>Sun</p>
        </div>
        <div className="box mercury">
          <Link to="/planetsinfo#mercury">
            <img src={mercury} alt="Mercury" />
          </Link>
          <p style={{ color: '#babab9', fontFamily: 'monospace', fontSize: 'xx-large', fontWeight: 'bold' }}>Mercury</p>
        </div>
        <div className="box venus" >
          <Link to="/planetsinfo#venus">
            <img src={venus} alt="Venus" />
          </Link>
          <p style={{ color: '#f48320', fontFamily: 'monospace', fontSize: 'xx-large', fontWeight: 'bold' }}>Venus</p>
        </div>
        <div className="box earth">
          <Link to="/planetsinfo#earth">
            <img src={earth} alt="Earth" />
          </Link>
          <p style={{ color: 'rgb(78, 221, 78)', fontFamily: 'monospace', fontSize: 'xx-large', fontWeight: 'bold' }}>Earth</p>
        </div>
        <div className="box mars">
          <Link to="/planetsinfo#mars">
            <img src={mars} alt="Mars" />
          </Link>
          <p style={{ color: '#fe9869', fontFamily: 'monospace', fontSize: 'xx-large', fontWeight: 'bold' }}>Mars</p>
        </div>
        <div className="box jupiter">
          <Link to="/planetsinfo#jupiter">
            <img src={jupiter} alt="Jupiter" />
          </Link>
          <p style={{ color: '#f1e912', fontFamily: 'monospace', fontSize: 'xx-large', fontWeight: 'bold' }}>Jupiter</p>
        </div>
        <div className="box saturn">
          <Link to="/planetsinfo#saturn">
            <img src={saturn} alt="Saturn" />
          </Link>
          <p style={{ color: '#f8b57a', fontFamily: 'monospace', fontSize: 'xx-large', fontWeight: 'bold' }}>Saturn</p>
        </div>
        <div className="box uranus">
          <Link to="/planetsinfo#uranus">
            <img src={uranus} alt="Uranus" />
          </Link>
          <p style={{ color: '#26c6f7', fontFamily: 'monospace', fontSize: 'xx-large', fontWeight: 'bold' }}>Uranus</p>
        </div>
        <div className="box neptune">
          <Link to="/planetsinfo#neptune">
            <img src={neptune} alt="Neptune" />
          </Link>
          <p style={{ color: '#d9effd', fontFamily: 'monospace', fontSize: 'xx-large', fontWeight: 'bold' }}>Neptune</p>
        </div>
      </div>
    </div>
    </div>
  );
}
