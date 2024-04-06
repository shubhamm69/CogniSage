import React from 'react';
import './css/earth.css'; // Import the CSS file
import forest1 from '../assets/forest1.png';
import tree from '../assets/tree.png';
import walking from '../assets/walking.png';
import rocks from '../assets/rocks.png';
import plant from '../assets/plant.png';
import charcoal from '../assets/charcoal.png';
import volcanic from '../assets/volcanic.png';
import smelting from '../assets/smelting.png';
import cartoon from '../assets/cartoon.png';
import pigiron from '../assets/pig-iron.png';
import nickel from '../assets/nickel.png';
import sky3 from '../assets/sky3.jpg'


export default function Earth() {
  return (
    <div className="container">
      <div className="panel first" style={{
              background: `url(${sky3})`
            }}>
        <input type="radio" name="tab" id="tab-0" />
        <label htmlFor="tab-0">
          <h1>THE LAYERS OF EARTH</h1>
        </label>
      </div>

      <div className="panel second">
        <input type="radio" name="tab" id="tab-1" />
        <label htmlFor="tab-1">
          <img src={forest1} alt="forest" height="7%" width="7%" className="all" />
          <img src={tree} alt="tree" height="7%" width="7%" className="all" />
          <h1>LANDSCAPE</h1>
          <img src={walking} alt="walking" height="7%" width="7%" className="all" />
        </label>
      </div>

      <div className="panel green">
        <input type="radio" name="tab" id="tab-0" />
        <label htmlFor="tab-0">
          <h1>GREEN</h1>
        </label>
      </div>

      <div className="panel third">
        <input type="radio" name="tab" id="tab-2" />
        <label htmlFor="tab-2">
          <p> </p>
          <img src={rocks} alt="rocks" height="7%" width="7%" className="all" />
          <h1>CRUST</h1>
          <img src={plant} alt="plant" height="7%" width="7%" className="all" />
          <p> </p>
        </label>
        <div className="content">
          <p>The crust is akin to the Earth's outer skin, where we reside, play, and embark on adventures! It's not just any skin,
            though; it comprises various rocks, reminiscent of the hard, smooth pebbles found at the beach. Picture the crust as a
            colossal puzzle, with land and water pieces fitting together perfectly. Sometimes, gleaming crystals and shiny minerals
            hide within the crust, waiting to be discovered!</p>
        </div>
      </div>

      <div className="panel fourth">
        <input type="radio" name="tab" id="tab-3" />
        <label htmlFor="tab-3">
          <p> </p>
          <img src={charcoal} alt="charcoal" height="7%" width="7%" className="all" />
          <h1>MANTLE</h1>
          <img src={volcanic} alt="volcanic" height="7%" width="7%" className="all" />
          <p> </p>
        </label>
        <div className="content">
          <p>Beneath the crust, lies a mystical realm known as the mantle, akin to a secret underground world! The mantle's intense
            heat causes rocks to melt into gooey magma, akin to the hot lava often seen in movies! Occasionally, the mantle's
            excitement manifests in the creation of magnificent volcanoes and mountains. It's akin to a warm blanket enveloping the
            Earth, providing comfort and warmth</p>
        </div>
      </div>

      <div className="panel fifth">
        <input type="radio" name="tab" id="tab-4" />
        <label htmlFor="tab-4">
          <p> </p>
          <img src={smelting} alt="smelting" height="7%" width="7%" className="all" />
          <h1>OUTER CORE</h1>
          <img src={cartoon} alt="cartoon" height="7%" width="7%" className="all" />
          <p> </p>
        </label>
        <div className="content">
          <p>Deep beneath the mantle resides the outer core, where things take an exhilarating turn! Envision a bubbling pot of hot
            soup, except it's composed of super-hot liquid metal! The outer core's dynamic movements generate magnetic fields that
            aid in guiding birds and ships on their journeys. It's akin to the Earth hosting its very own disco party, with metal
            atoms swaying and swirling in all directions!</p>
        </div>
      </div>

      <div className="panel sixth">
        <input type="radio" name="tab" id="tab-5" />
        <label htmlFor="tab-5">
          <p> </p>
          <img src={pigiron} alt="pig-iron" height="7%" width="7%" className="all" />
          <h1>INNER CORE</h1>
          <img src={nickel} alt="nickel" height="7%" width="7%" className="all" />
          <p> </p>
        </label>
        <div className="content">
          <p>At the very core of our planet lies the inner core, a blazing inferno of solid metal. It's reminiscent of a colossal
            metal ball, gradually heating up over billions of years, emitting a radiant glow. The inner core boasts incredible
            strength and power, much like a superhero safeguarding the Earth from external threats. Its intense heat is capable of
            melting nearly anything, yet it remains solid due to the immense pressure surrounding it.</p>
        </div>
      </div>
    </div>
  );
}
