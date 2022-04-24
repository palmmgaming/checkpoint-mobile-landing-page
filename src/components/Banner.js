import React from "react";
import "./Banner.css";
import RealPhone from "./images/Realistic_Smartphone.jpg";
import BetterSleep from "./images/Better Sleep.jpg";
import FocusMore from "./images/More Productive.jpg";
import EffectiveRelax from "./images/Powerful Relax.jpg";
import Ambience_icon from "./images/Ambience_icon.svg";
import Ambience from "./images/ambience.jpg";
import { AiFillHeart } from "react-icons/ai";
import { IoIosMusicalNotes } from "react-icons/io";
import VirtualSpace from "./images/VirtualSpace.svg";
import Mood from "./images/mood.jpg";
import EnvironmentIcon from "./images/Environment_icon.svg";
import RelaxingMusicIcon from "./images/RelaxingMusic_icon.svg";
import MusicImg from "./images/Music.jpg";
import Usecase from "./images/Usecase.jpg";
import CheckpointIcon from "./images/checkpoint-icon.svg";
import FeedbackImg from "./images/Community Review For Mobile.png";
import PremiumCard from "./images/Premium Card.png";
import MobileMockup from "./images/Mobile Mockup.png";
import CheckpointApp from "./images/180px logo Checkpoint.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import checkpoint_logo_white from './images/Checkpoint logo white.svg'
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

let bannerData = {
  title_1: "Design",
  title_2: "Your Relaxing",
  title_3: "Virtual Space",
  desc: "Your Best Ambient Music Website for Relax",
};

let contentData = {
  title: "Ambience Sound",
  desc_2: "to enhance your relaxing experience.",
};

function Banner() {
  return (
    <div className="banner-bg">
      <div className="container">
        <div className="banner-con">
          <div className="banner-text">
            <h1>{bannerData.title_1} </h1>
            <h1>{bannerData.title_2} </h1>
            <h1>{bannerData.title_3} </h1>
            <p>{bannerData.desc}</p>
            <img src={RealPhone}></img>

            <div className="sub-banner">
              <div className="sub-banner-container">
                <img src={BetterSleep}></img>
                <p>Better Sleep</p>
              </div>

              <div className="sub-banner-container">
                <img src={FocusMore}></img>
                <p>Focus More</p>
              </div>

              <div className="sub-banner-container">
                <img src={EffectiveRelax}></img>
                <p>Effective Relaxation</p>
              </div>
            </div>

            <div className="content">
              <section>
                <div className="center-icon">
                  <img src={Ambience_icon} width="50" height="50"></img>
                </div>
                <div className="text-center">
                  <h1>Ambient Sound</h1>
                  <p>
                    <strong> Add, Remove, </strong>and <strong>Adjust</strong>{" "}
                    the ambience volume
                  </p>
                  <p>{contentData.desc_2}</p>
                  <div className="icon-desc">
                    <p>
                      {" "}
                      <AiFillHeart color="#F580EB" /> for more focus
                    </p>
                  </div>
                </div>
                <img src={Ambience}></img>
              </section>
            </div>

            <div className="content">
              <section>
                <div className="center-icon">
                  <img src={VirtualSpace} width="50" height="50"></img>
                </div>
                <div className="text-center">
                  <h1>Virtual Space</h1>
                  <p>
                    Change Your Screen to <strong> Peaceful Animated Background </strong>
                  </p>
                  <div className="icon-desc">
                    <p>
                      {" "}
                      <AiFillHeart color="#F580EB" /> to feel like you are in
                      that place
                    </p>
                  </div>
                </div>
                <div className="mobile-showcase-image">
                  <img src={MobileMockup}></img>
                </div>
              </section>
            </div>

            <div className="content">
              <section>
                <div className="center-icon">
                  <img src={EnvironmentIcon} width="250" height="50"></img>
                </div>
                <div className="text-center">
                  <h1>Design Your Virtual Space</h1>
                  <p>
                    Night or Rain,<strong> You Decide </strong>
                  </p>
                  <div className="icon-desc">
                    <p>
                      {" "}
                      <AiFillHeart color="#F580EB" /> to match your mood
                    </p>
                  </div>
                </div>
                <div className="mobile-showcase-image">
                  <img src={Mood}></img>
                </div>
              </section>
            </div>

            <div className="content">
              <section>
                <div className="center-icon">
                  <img src={RelaxingMusicIcon} width="250" height="50"></img>
                </div>
                <div className="text-center">
                  <h1>Enjoy With Relaxing Music</h1>
                  <p>Charge Your Energy</p>
                  <div className="icon-desc">
                    <p>
                      {" "}
                      <IoIosMusicalNotes color="#F580EB" /> for better sleep
                    </p>
                  </div>
                </div>
                <div className="mobile-showcase-image">
                  <img src={MusicImg}></img>
                </div>
              </section>
            </div>

            <div className="content">
              <section>
                <div className="center-icon"> </div>
                <div className="text-center">
                  <h1>Relax while working</h1>
                  <p>Available on Desktop</p>
                  <div className="icon-desc">
                    <p>
                      {" "}
                      <img src={CheckpointIcon}></img> checkpoint.tokyo
                    </p>
                  </div>
                </div>
                <div className="mobile-showcase-image">
                  <br />
                  <img src={Usecase}></img>
                </div>
              </section>
            </div>

            <div className="content">
              <section>
                <div className="center-icon"> </div>
                <div className="text-center">
                  <div className="get-premium-header">
                    <p>Get Premium</p>
                  </div>
                  <h2>50% Discount</h2>
                  <p>to support us and unlock more perks</p>
                </div>
                <div className="mobile-showcase-image">
                  <br />
                  <img src={PremiumCard}></img>
                </div>

                <div className="text-center">
                  <div className="promotion-tag">
                    <br></br>
                    <p>
                      Get Coupon Code in <strong>Buy Me a Coffee</strong> to
                    </p>
                    <p>activate Premium in Checkpoint.tokyo</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="content">
              <section>
                <div className="center-icon"> </div>

                <div className="mobile-showcase-image">
                  <div className="center-mobile-showcase-image">
                    <img src={FeedbackImg}></img>
                  </div>
                  <br />
                </div>
              </section>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>

            <div className="banner-text">
              <h1>{bannerData.title_1} </h1>
              <h1>{bannerData.title_2} </h1>
              <h1>{bannerData.title_3} </h1>
              <p>{bannerData.desc}</p>
              <img src={RealPhone}></img>
            </div>
          </div>

          <div className="content">
              <section>
                <div className="center-mobile-app-section"> </div>

                <div className="mobile-showcase-image-footer">
                  <div className="download-now">
                    <p>Coming Soon!</p>
                  </div>
                  <div className="center-mobile-showcase-image">
                    <div className="checkpoint-app">
                    <img src={CheckpointApp}></img>
                    <div className="checkpoint-app-desc">
                      <p>Checkpoint.tokyo</p>
                    </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </section>
            </div>
        </div>
      </div>
      <div className="content">
              <section className="footer">
                <div className="center-mobile-app-section"> </div>

                <div className="mobile-showcase-image-footer">
                  <div className="footer-desc">
                    <br/>
                    <p href="https://www.checkpoint.tokyo/about">About Us</p>
                    <p href="https://www.checkpoint.tokyo/policy">Policy</p>
                    <br/>
                  </div>
                  <div className="center-social-icon">
                    <div className="social.icon">
                    <a href="https://twitter.com/CheckpointTokyo" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="1x" />
                  </a>
                  <a href="https://www.facebook.com/Checkpoint.tokyo"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebookSquare} size="1x" />
                  </a>
                  <a href="https://www.instagram.com/checkpoint.tokyo/"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="1x" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCyBC6LyIUwznEpO6pRt9pEg/featured"
                    className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="1x" />
                  </a>
                    </div>
                  </div>
                  <div className="checkpoint-footer-logo-container">
                    <div className="checkpoint-footer-logo">
                      <br/>
                    <img src={checkpoint_logo_white}></img>
                  </div>
                  <div className="all-right-reserved">
                    <p>© 2022 Checkpoint.tokyo. All Rights Reserved</p>
                    </div>
                  </div>
                  
                  </div>
              </section>
            </div>
        </div>
  );
}

export default Banner;
