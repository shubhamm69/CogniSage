import React, { useState } from 'react';
import './css/shapes.css'; // Import the CSS file

export default function ShapesLearning() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [shapeInfo, setShapeInfo] = useState({ title: '', description: '' });

  const showPopup = (shape) => {
    setShapeInfo({ title: shape, description: getShapeDescription(shape) });
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  const getShapeDescription = (shape) => {
    switch (shape) {
      case 'Square':
        return 'A square is a shape with four equal sides and four right angles.';
      case 'Triangle':
        return 'A triangle is a polygon with three edges and three vertices. It is one of the basic shapes in geometry.';
      case 'Circle':
        return 'A circle is a simple closed shape. It is the set of all points in a plane that are at a given distance from a given point, the centre.';
      case 'Rectangle':
        return 'A rectangle is a quadrilateral with four right angles.';
      case 'Hexagon':
        return 'A hexagon is a six-sided polygon.';
      case 'Pentagon':
        return 'A pentagon is a five-sided polygon.';
      case 'Star':
        return 'A star is a shape with a number of points projecting from its core. The most common variant in vexillology is a five-pointed star, but many other possibilities exist.';
      case 'Sphere':
        return 'A sphere is a perfectly round geometrical object in three-dimensional space that is the surface of a completely round ball.';
      default:
        return '';
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Let's Learn Shapes!</h1>
        <div className="shape" onClick={() => showPopup('Square')} style={{ backgroundColor: '#FF6347' }}>
          <svg viewBox="0 0 24 24" style={{ width: '100%', height: '100%' }}>
            <rect x="2" y="2" width="20" height="20" fill="none" stroke="#fff" strokeWidth="2" />
          </svg>
          <span className="shape-label">Square</span>
        </div>
        <div className="shape" onClick={() => showPopup('Triangle')} style={{ backgroundColor: '#FFD700' }}>
          <svg viewBox="0 0 24 24" style={{ width: '100%', height: '100%' }}>
            <polygon points="12,2 22,21 2,21" fill="none" stroke="#fff" strokeWidth="2" />
          </svg>
          <span className="shape-label">Triangle</span>
        </div>
        <div className="shape" onClick={() => showPopup('Circle')} style={{ backgroundColor: '#20B2AA' }}>
          <svg viewBox="0 0 24 24" style={{ width: '100%', height: '100%' }}>
            <circle cx="12" cy="12" r="10" fill="none" stroke="#fff" strokeWidth="2" />
          </svg>
          <span className="shape-label">Circle</span>
        </div>
        <div className="shape" onClick={() => showPopup('Rectangle')} style={{ backgroundColor: '#9370DB' }}>
          <svg viewBox="0 0 24 24" style={{ width: '100%', height: '100%' }}>
            <rect x="2" y="4" width="20" height="16" fill="none" stroke="#fff" strokeWidth="2" />
          </svg>
          <span className="shape-label">Rectangle</span>
        </div>
        <div className="shape" onClick={() => showPopup('Hexagon')} style={{ backgroundColor: '#FFA500' }}>
          <svg viewBox="0 0 24 24" style={{ width: '100%', height: '100%' }}>
            <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" fill="none" stroke="#fff" strokeWidth="2" />
          </svg>
          <span className="shape-label">Hexagon</span>
        </div>
        <div className="shape" onClick={() => showPopup('Pentagon')} style={{ backgroundColor: '#FF69B4' }}>
          <svg viewBox="0 0 24 24" style={{ width: '100%', height: '100%' }}>
            <polygon points="12,2 22,8 18,22 6,22 2,8" fill="none" stroke="#fff" strokeWidth="2" />
          </svg>
          <span className="shape-label">Pentagon</span>
        </div>
        <div className="shape" onClick={() => showPopup('Star')} style={{ backgroundColor: '#00FFFF' }}>
          <svg viewBox="0 0 24 24" style={{ width: '100%', height: '100%' }}>
            <polygon points="12,2 14,8 20,8 15,12 17,18 12,14 7,18 9,12 4,8 10,8" fill="none" stroke="#fff" strokeWidth="2" />
          </svg>
          <span className="shape-label">Star</span>
        </div>
        <div className="shape" onClick={() => showPopup('Sphere')} style={{ backgroundColor: '#6495ED' }}>
          <svg viewBox="0 0 24 24" style={{ width: '100%', height: '100%' }}>
            <circle cx="12" cy="12" r="10" fill="url(#sphere-gradient)" stroke="#fff" strokeWidth="2" />
            <defs>
              <radialGradient id="sphere-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#6495ED', stopOpacity: 1 }} />
              </radialGradient>
            </defs>
          </svg>
          <span className="shape-label">Sphere</span>
        </div>
      </div>
      
      {popupVisible && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={hidePopup}>×</span>
            <h2 style={{ color: '#333' }}>{shapeInfo.title}</h2>
            <p style={{ color: '#555' }}>{shapeInfo.description}</p>
            <button onClick={hidePopup} style={{ backgroundColor: '#FF6347', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
