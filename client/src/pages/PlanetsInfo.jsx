import React from 'react';
import './css/planetInfo.css'
import sun from '../assets/sun.png';
import title from '../assets/solarsystem.png';
import earth from '../assets/earth.png';
import jupiter from '../assets/jupiter.png';
import mars from '../assets/mars.png';
import mercury from '../assets/mercury.png';
import neptune from '../assets/neptune.png';
import saturn from '../assets/saturn.png';
import background from '../assets/solar7.jpg';
import uranus from '../assets/uranus.png';
import venus from '../assets/venus.png';

export default function PlanetsInfo() {
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <img src={title} alt="Title Image" style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 999 }} className="heading" />

      <div className="content-container-2">
        {/* Sun */}
        <div className="content-container">
          <div className="content sun" id="sun">
            <h1>The Sun</h1>
            <p>"The sun is like a big, hot ball in the sky. It's very, very far away, but it gives us light and warmth every day. The sun is so big that it helps plants grow and gives us light to see during the day. It's like a giant star that shines brightly in the sky. We need the sun to live because it helps keep our planet warm and helps plants make food through a process called photosynthesis. So, the sun is like a big, glowing friend up in the sky!"</p>
          </div>
          <div className="rectangle-card first rectangle-card">
            <div className="flaticon">
              <img src={sun} alt="Sun" height="120%" width="120%" />
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
        </div>

        {/* Mercury */}
        <div className="content-container">
          <div className="rectangle-card second rectangle-card">
            <div className="flaticon">
              <img src={mercury} alt="Mercury" height="120%" width="120%" />
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
          <div className="content mercury" id="mercury">
            <h1>Mercury</h1>
            <p>"Mercury is like a small, rocky ball in space. It's the closest planet to the sun, so it's very, very hot during the day and very, very cold at night. It's so hot that if you were there, you could melt like an ice cream cone in the sun! Mercury doesn't have any air to breathe like we do on Earth, and it's covered with craters and rocks. It's the smallest planet in our solar system, but it's still really interesting to learn about! Scientists study Mercury to understand more about the planets and space."</p>
          </div>
        </div>

        {/* Venus */}
        <div className="content-container">
          <div className="content venus" id="venus">
            <h1>Venus</h1>
            <p>"Venus is like Earth's sister planet because it's about the same size. It's covered in thick clouds that trap heat, making it the hottest planet in our solar system. Venus is sometimes called the "morning star" or the "evening star" because it's often the brightest object in the sky besides the moon. It doesn't have any moons of its own."</p>
          </div>
          <div className="rectangle-card first rectangle-card">
            <div className="flaticon">
              <img src={venus} alt="Venus" height="120%" width="120%" />
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
        </div>

        {/* Earth */}
        <div className="content-container">
          <div className="rectangle-card second rectangle-card">
            <div className="flaticon">
              <img src={earth} alt="Earth" height="120%" width="120%" />
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
          <div className="content earth" id="earth">
            <h1>Earth</h1>
            <p>"Earth is our home! It's the only planet we know where people, animals, and plants live. It has oceans, mountains, forests, and deserts. We have air to breathe, water to drink, and food to eat because of Earth. It's just the right distance from the sun, so it's not too hot or too cold. Earth is very special!"</p>
          </div>
        </div>

        {/* Mars */}
        <div className="content-container">
          <div className="content mars" id="mars">
            <h1>Mars</h1>
            <p>"Mars is often called the "Red Planet" because it looks reddish in the sky. It has deserts, mountains, and valleys. Scientists think there might have been water on Mars long ago, which makes them wonder if there could have been life there too. Mars has two tiny moons named Phobos and Deimos."</p>
          </div>
          <div className="rectangle-card first rectangle-card">
            <div className="flaticon">
              <img src={mars} alt="Mars" height="120%" width="120%" />
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
        </div>

        {/* Jupiter */}
        <div className="content-container">
          <div className="rectangle-card second rectangle-card">
            <div className="flaticon">
              <img src={jupiter} alt="Jupiter" height="120%" width="120%" />
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
          <div className="content jupiter" id="jupiter">
            <h1>Jupiter</h1>
            <p>"Jupiter is the largest planet in our solar system. It's like a giant ball made of gas with colorful stripes and a big red spot. Jupiter has many moons, but the biggest ones are named Io, Europa, Ganymede, and Callisto. Sometimes you can see Jupiter in the night sky without a telescope because it's so big!"</p>
          </div>
        </div>

        {/* Saturn */}
        <div className="content-container">
          <div className="content saturn" id="saturn">
            <h1>Saturn</h1>
            <p>"Saturn is famous for its beautiful rings made of rocks and ice. It's the second-largest planet in our solar system. Saturn also has many moons, but its largest moon is named Titan. Saturn is like a giant spinning top in space!"</p>
          </div>
          <div className="rectangle-card first rectangle-card">
            <div className="flaticon">
              <img src={saturn} alt="Saturn" height="120%" width="120%" />
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
        </div>

        {/* Uranus */}
        <div className="content-container">
          <div className="rectangle-card second rectangle-card">
            <div className="flaticon">
              <img src={uranus} alt="Uranus" height="120%" width="120%" />
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
          <div className="content uranus" id="uranus">
            <h1>Uranus</h1>
            <p>"Uranus is a big ball of gas with a bluish color. It spins on its side, unlike other planets that spin upright. Uranus has rings like Saturn, but they are very faint. It also has lots of moons. Uranus is very far away, so it's hard to see without a telescope"</p>
          </div>
        </div>

        {/* Neptune */}
        <div className="content-container">
          <div className="content neptune" id="neptune">
            <h1>Neptune</h1>
            <p>"Neptune is the farthest planet from the sun. It's a deep blue color and is very cold. Neptune has strong winds and big storms, kind of like Jupiter's Great Red Spot. It has many moons, but the largest one is named Triton. Neptune is a mysterious planet!"</p>
          </div>
          <div className="rectangle-card first rectangle-card">
            <div className="flaticon">
              <img src={neptune} alt="Neptune" height="120%" width="120%" />
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
