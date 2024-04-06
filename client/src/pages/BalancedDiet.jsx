import React from 'react';
import balancediet1 from '../assets/balancediet1.png';
import proteins from '../assets/protiens.jpeg';
import carbohydrates from '../assets/carbohydrates.webp';
import fat1 from '../assets/fat1.jpeg';
import vitamins from '../assets/vitamins.jpeg';
import minerals from '../assets/minerals.jpg';
import bg2 from '../assets/bg2.png'
import './css/balanced.css'; // Import the CSS file

export default function BalancedDiet() {
    return (
        <section style={{
          background: `url(${bg2})`
        }}>
            <div className="container">
                <div className="box">
                    <h1><span>BALANCED DIET</span></h1>
                    <p className="click-message"><span>CLICK ANYWHERE ON THE PICTURE!</span></p>
                    <div className="maping_img">
                        <img src={balancediet1} useMap="#image-map" alt="balanced diet" />
                        <map name="image-map">
                            <area alt="" title="" href="#protein"
                                  coords="83,78,74,91,31,156,15,224,29,327,71,321,133,295,187,271,227,252,244,220,245,160,245,69,239,16,227,7,215,1"
                                  shape="poly"/>
                            <area alt="" title="" href="#minerals"
                                  coords="251,8,252,38,253,84,255,148,255,212,257,249,306,280,369,316,431,350,469,322,488,225,469,156,393,59"
                                  shape="poly"/>
                            <area alt="" title="" href="#vitamins"
                                  coords="256,262,303,285,365,320,407,345,442,371,416,411,370,449,312,477,277,481"
                                  shape="poly"/>
                            <area alt="" title="" href="#carbohydrate"
                                  coords="247,266,251,318,263,405,267,478,173,473" shape="poly"/>
                            <area alt="" title="" href="#fats"
                                  coords="39,347,100,318,191,277,231,261,234,278,217,324,200,367,182,416,163,465,87,432,43,363"
                                  shape="poly"/>
                        </map>
                    </div>
                    <div className="containernew">
                        <div className="left-div1" id="protein">
                            <p><h3> PROTIENS</h3>
                            Proteins are crucial macromolecules found in all living organisms, composed of amino acids
                            linked by peptide bonds. They perform diverse functions, including enzymatic catalysis,
                            structural support, transport, signaling, and immune response regulation. Dietary proteins,
                            obtained from various sources, are broken down into amino acids during digestion, which are
                            then utilized for tissue growth, repair, and maintenance. Adequate and balanced protein
                            intake is essential for overall health and bodily functions.</p>
                        </div>
                        <div className="right-div1">
                            <img src={proteins} alt="proteins" />
                        </div>
                    </div>
                    <div className="containernew4">
                        <div className="left-div1" id="carbohydrate">
                            <p><h3> CARBOHYDRATES</h3>
                            Carbohydrates are vital for providing energy in a diet. They come in two types: simple
                            (sugars) and complex (starches and fiber). Opting for complex carbohydrates like whole
                            grains and vegetables over refined sugars promotes stable blood sugar levels and digestive
                            health. However, overconsumption of refined carbohydrates can lead to weight gain and
                            chronic diseases. Moderation and choosing nutrient-dense sources are key to maintaining a
                            balanced diet.</p>
                        </div>
                        <div className="right-div1">
                            <img src={carbohydrates} alt="carbohydrates" />
                        </div>
                    </div>
                    <div className="containernew3">
                        <div className="left-div1" id="fats">
                            <p><h3> FATS</h3>
                            Dietary fats are essential for overall health, providing energy, aiding in vitamin
                            absorption, and supporting various bodily functions. While saturated and trans fats can have
                            negative health effects when consumed excessively, unsaturated fats from sources like nuts,
                            seeds, and fatty fish offer numerous benefits, including improved heart health. A balanced
                            diet includes moderate amounts of healthy fats while minimizing intake of unhealthy fats,
                            emphasizing quality and quantity for optimal well-being.</p>
                        </div>
                        <div className="right-div1">
                            <img src={fat1} alt="fats" />
                        </div>
                    </div>
                    <div className="containernew2">
                        <div className="left-div1" id="vitamins">
                            <p><h3> VITAMIN</h3>
                            Proteins are crucial macromolecules found in all living organisms, composed of amino acids
                            linked by peptide bonds. They perform diverse functions, including enzymatic catalysis,
                            structural support, transport, signaling, and immune response regulation. Dietary proteins,
                            obtained from various sources, are broken down into amino acids during digestion, which are
                            then utilized for tissue growth, repair, and maintenance. Adequate and balanced protein
                            intake is essential for overall health and bodily functions.</p>
                        </div>
                        <div className="right-div1">
                            <img src={vitamins} alt="vitamins" />
                        </div>
                    </div>
                    <div className="containernew1">
                        <div className="left-div1" id="minerals">
                            <p><h3> MINERALS</h3>
                            Minerals are vital for a balanced diet, supporting functions like bone health, muscle
                            function, and immune system strength. Key minerals include calcium for bones, iron for
                            oxygen transport, and potassium for fluid balance. Eating a variety of foods rich in
                            minerals, such as fruits, vegetables, whole grains, and lean proteins, ensures overall
                            well-being. Consulting a healthcare professional helps tailor mineral intake to individual
                            needs, promoting optimal health and vitality.</p>
                        </div>
                        <div className="right-div1">
                            <img src={minerals} alt="minerals" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
