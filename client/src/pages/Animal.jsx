import React, { useState } from 'react';
import './css/animals.css'; // Import the CSS file
import dogInfo from '../assets/dog-info.png'; // Import images
import donkeyInfo from '../assets/donkey-info.png';
import horseInfo from '../assets/horse-info.png';
import sheepInfo from '../assets/sheep-info.png';
import monkeyInfo from '../assets/monkey-info.png';
import duckInfo from '../assets/duck-info.png';

export default function Animal() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cardContent, setCardContent] = useState('');

  const getContent = (index) => {
    switch (index) {
      case 0:
        return (
          <div style={{ textAlign: 'center' }}>
            <img src={dogInfo} alt="Dog Icon" height="15%" width="15%" />
            <br />
            - Baby dogs are called puppies.<br />
            - Dogs have four legs, a tail, a nose, and ears.<br />
            - The sounds dogs make are called barks.<br />
            - Dogs enjoy eating dog food, bones, biscuits, and chew toys.
          </div>
        );
      case 1:
        return (
          <div style={{ textAlign: 'center' }}>
            <img src={donkeyInfo} alt="Donkey Icon" height="15%" width="15%" />
            <br />
            - Babies are called foals. <br />
            - They have four legs, long ears, and a tail. <br />
            - They make braying sounds. <br />
            - Donkeys eat hay, grass, and grains.
          </div>
        );
      case 2:
        return (
          <div style={{ textAlign: 'center' }}>
            <img src={horseInfo} alt="Horse Icon" height="15%" width="15%" />
            <br />
            - Babies are called foals. <br />
            - They have four legs, a mane, and a tail. <br />
            - They neigh. <br />
            - Horses eat hay, grass, grains, and apples.
          </div>
        );
      case 3:
        return (
          <div style={{ textAlign: 'center' }}>
            <img src={sheepInfo} alt="Sheep Icon" height="15%" width="15%" />
            <br />
            - Babies are called lambs. <br />
            - They have four legs, woolly fur, and a tail. <br />
            - They bleat. <br />
            - Sheep eat grass, hay, and grains.
          </div>
        );
      case 4:
        return (
          <div style={{ textAlign: 'center' }}>
            <img src={monkeyInfo} alt="Monkey Icon" height="15%" width="15%" />
            <br />
            - Babies are called infants. <br />
            - They have four legs and a long tail. <br />
            - They chatter. <br />
            - Monkeys eat fruits, nuts, and leaves.
          </div>
        );
      case 5:
        return (
          <div style={{ textAlign: 'center' }}>
            <img src={duckInfo} alt="Duck Icon" height="15%" width="15%" />
            <br />
            - Babies are called ducklings. <br />
            - They have webbed feet, a bill, and feathers. <br />
            - They quack. <br />
            - Ducks eat insects, plants, and small fish.
          </div>
        );
      default:
        return 'Default content';
    }
  };

  const showCard = (content) => {
    setCardContent(content);
    setIsCardOpen(true);
  };

  const closeCard = () => {
    setIsCardOpen(false);
  };

  const handleButtonClick = (index) => {
    const content = getContent(index);
    showCard(content);
  };

  return (
    <div>
      <div className="curvy-background">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#A4CE95" fill-opacity="1" d="M0,192L48,181.3C96,171,192,149,288,149.3C384,149,480,171,576,197.3C672,224,768,256,864,245.3C960,235,1056,181,1152,160C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className="heading">
        <h1> ANIMALS</h1>
      </div>
      <div id="container" className="container">
        <div className="icon-container">
          <div className="icon-row">
            <div className="icon-column">
              <div className="icon">
                <img src={dogInfo} alt="Dog Icon" height="175em" width="175em" />
              </div>
              <div className="button-container">
                <button className="button" onClick={() => handleButtonClick(0)}>sound  <i className="fa fa-volume-up" aria-hidden="true"></i></button>
                <button className="button" onClick={() => handleButtonClick(0)}>trivia  <i className="fa fa-book" aria-hidden="true"></i></button>
              </div>
            </div>
            <div className="icon-column">
              <div className="icon">
                <img src={donkeyInfo} alt="Donkey Icon" height="175em" width="175em" />
              </div>
              <div className="button-container">
                <button className="button" onClick={() => handleButtonClick(1)}>sound  <i className="fa fa-volume-up" aria-hidden="true"></i></button>
                <button className="button" onClick={() => handleButtonClick(1)}>trivia  <i className="fa fa-book" aria-hidden="true"></i></button>
              </div>
            </div>
          </div>
          <div className="icon-row">
            <div className="icon-column">
              <div className="icon">
                <img src={horseInfo} alt="Horse Icon" height="175em" width="175em" />
              </div>
              <div className="button-container">
                <button className="button" onClick={() => handleButtonClick(2)}>sound  <i className="fa fa-volume-up" aria-hidden="true"></i></button>
                <button className="button" onClick={() => handleButtonClick(2)}>trivia  <i className="fa fa-book" aria-hidden="true"></i></button>
              </div>
            </div>
            <div className="icon-column">
              <div className="icon">
                <img src={sheepInfo} alt="Sheep Icon" height="175em" width="175em" />
              </div>
              <div className="button-container">
                <button className="button" onClick={() => handleButtonClick(3)}>sound  <i className="fa fa-volume-up" aria-hidden="true"></i></button>
                <button className="button" onClick={() => handleButtonClick(3)}>trivia  <i className="fa fa-book" aria-hidden="true"></i></button>
              </div>
            </div>
          </div>
          <div className="icon-row">
            <div className="icon-column">
              <div className="icon">
                <img src={monkeyInfo} alt="Monkey Icon" height="175em" width="175em" />
              </div>
              <div className="button-container">
                <button className="button" onClick={() => handleButtonClick(4)}>sound  <i className="fa fa-volume-up" aria-hidden="true"></i></button>
                <button className="button" onClick={() => handleButtonClick(4)}>trivia  <i className="fa fa-book" aria-hidden="true"></i></button>
              </div>
            </div>
            <div className="icon-column">
              <div className="icon">
                <img src={duckInfo} alt="Duck Icon" height="175em" width="175em" />
              </div>
              <div className="button-container">
                <button className="button" onClick={() => handleButtonClick(5)}>sound  <i className="fa fa-volume-up" aria-hidden="true"></i></button>
                <button className="button" onClick={() => handleButtonClick(5)}>trivia  <i className="fa fa-book" aria-hidden="true"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isCardOpen && (
        <div className="card" id="card">
          <div className="card-content">
            {cardContent}
          </div>
          <button className="card-close-button" onClick={closeCard}><i className="fa fa-times" aria-hidden="true"></i></button>
        </div>
      )}
    </div>
  );
}

