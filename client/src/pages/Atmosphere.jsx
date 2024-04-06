import React from 'react';
import rocket from '../assets/space.png';
import satellite from '../assets/satellite.png';
import northernlights from '../assets/northern-lights.png'
import rocket2 from '../assets/rocket.png';
import meteor from '../assets/meteor.png';
import ozone from '../assets/ozone-layer.png'
import airplane from '../assets/airplane.png'
import balloon from '../assets/hot-air-balloon.png'
import clouds from '../assets/clouds.png'
import './css/atmosphere.css'; // Import the CSS file

export default function Atmosphere() {
  return (
    <div className="body">
    <div className="container">
      <div className="panel first">
        <h1>THE LAYERS OF ATMOSPHERE</h1>
      </div>

      <div className="panel second">
        <input type="radio" name="tab" id="tab-1" />
        <label htmlFor="tab-1">
          <p> 1200°C</p>
          <img src={rocket} alt="spaceship" height="10%" width="10%" className="all" />
          <h1> EXOSPHERE</h1>
          <img src={satellite} alt="spaceship" height="10%" width="10%" className="all" />
          <p> 800 to 3000 km</p>
        </label>
        <div className="content">
          <p>The Exosphere, the outermost layer of our atmosphere. Here, the air is so thin that it gradually fades away into the
            vacuum of space. Satellites and space stations orbit the Earth in this layer, exploring the mysteries of the cosmos. The
            exosphere marks the boundary between Earth and space, reminding us of the vastness and beauty of the universe beyond our
            planet's protective embrace.</p>
        </div>
      </div>

      <div className="panel third">
        <input type="radio" name="tab" id="tab-2" />
        <label htmlFor="tab-2">
          <p> -86.5°C to 1200°C </p>
          <img src={northernlights} alt="spaceship" height="10%" width="10%" className="all" />
          <h1> THERMOSPHERE</h1>
          <img src={northernlights} alt="spaceship" height="10%" width="10%" className="all" />
          <p> 80-90 to 1000 km</p>
        </label>
        <div className="content">
          <p>The Thermosphere is the layer where temperatures soar even though the air is incredibly thin. This is where the Northern and
            Southern Lights shimmer and dance, painting the sky with vibrant colors. Satellites orbit the Earth in this layer,
            helping us communicate and explore space. The thermosphere is like a gateway to the wonders of the universe, inviting us
            to learn more about the cosmos beyond.</p>
        </div>
      </div>

      <div className="panel fourth">
        <input type="radio" name="tab" id="tab-3" />
        <label htmlFor="tab-3">
          <p> -2.5°C to -86.5°C </p>
          <img src={meteor} alt="spaceship" height="10%" width="10%" className="all" />
          <h1>MESOSPHERE</h1>
          <img src={rocket2} alt="spaceship" height="10%" width="10%" className="all" />
          <p> 40-50 to 80-90 km</p>
        </label>
        <div className="content">
          <p>The Mesosphere is the middle layer of our atmosphere. Here, shooting stars streak across the night sky and meteors burn up
            as they enter Earth's atmosphere. The mesosphere is like Earth's own defense system, protecting us from space debris and
            keeping us safe as we go about our lives on the surface below.</p>
        </div>
      </div>

      <div className="panel fifth">
        <input type="radio" name="tab" id="tab-4" />
        <label htmlFor="tab-4">
          <p> -56.5°C to -2.5°C </p>
          <img src={ozone} alt="spaceship" height="10%" width="10%" className="all" />
          <h1>STRATOSPHERE</h1>
          <img src={airplane} alt="spaceship" height="10%" width="10%" className="all" />
          <p> 11 to 50 km</p>
        </label>
        <div className="content">
          <p>The Stratosphere is the layer known for its protective shield—the ozone layer. This layer shields us from the Sun's harmful
            rays, like a giant umbrella keeping us safe. It's where airplanes cruise at high altitudes, and you might spot a jet
            leaving behind a long white trail across the sky. The stratosphere is like a guardian, watching over us from above.</p>
        </div>
      </div>

      <div className="panel sixth">
        <input type="radio" name="tab" id="tab-5" />
        <label htmlFor="tab-5">
          <p> 15°C to -56.5°C </p>
          <img src={balloon} alt="spaceship" height="10%" width="10%" className="all" />
          <h1>TROPOSPHERE</h1>
          <img src={clouds} alt="spaceship" height="10%" width="10%" className="all" />
          <p> 0 to 12-18 km</p>
        </label>
        <div className="content">
          <p>The Troposphere is where all the action happens! It's like a bustling marketplace where clouds form, rain falls, and
            winds blow. Birds fly, and airplanes soar through this layer, making it feel alive with activity. When you look out your
            window and see fluffy clouds or feel the warmth of the sun on your face, you're experiencing the wonders of the
            troposphere!</p>
        </div>
      </div>

      {/* Add panels for other planets */}
      
    </div>
    </div>
  );
}
