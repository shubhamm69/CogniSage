import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/Solar System Style.png';
import image2 from '../assets/atmosphere of the earth.png';
import image3 from '../assets/layers of earth.png';
import image4 from '../assets/balanced diet.png';
import image5 from '../assets/sounds of animals.png';
import image6 from '../assets/shapes.png';

export default function Home() {
  return (
    <section className="min-h-screen bg-cover bg-gradient-to-r  from-white to-cyan-500">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 py-20">
        <h2 className="text-2xl font-semibold md:text-3xl text-center text-black mb-4 ">CogniSage</h2>
        <p className="text-center text-black-300 mb-8">Where learning is fun!!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <Link to='/planets'>
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-110">
            <img src={image1} alt="Image 1" className="w-full h-40 object-cover" />
         </div>
         </Link>

         <Link to='/atmosphere'>
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-110">
            <img src={image2} alt="Image 2" className="w-full h-40 object-cover" />
          </div>
          </Link>

          <Link to='/earth'>
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-110">
            <img src={image3} alt="Image 3" className="w-full h-40 object-cover" />
          </div>
          </Link>

            <Link to = '/balanced-diet'>
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-110">
            <img src={image4} alt="Image 4" className="w-full h-40 object-cover" />
          </div>
          </Link>

          <Link to='/animal'>
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-110">
            <img src={image5} alt="Image 5" className="w-full h-40 object-cover" />
          </div>
          </Link>

          <Link to='/shapes'>
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-110">
            <img src={image6} alt="Image 6" className="w-full h-40 object-cover" />
          </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
