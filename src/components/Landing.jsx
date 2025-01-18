import React,{useEffect,useRef} from 'react';
import "../Landing_assets/Landing.css";
import videoSource from '../Landing_assets/Landing_media/EnduroSat-Home-Header-Video.mp4';
import videosource2 from "../Landing_assets/Landing_media/Platforms_mobile.mp4";
import videosource3 from "../Landing_assets/Landing_media/DeskSat_scrub.mp4";
import videosource4 from "../Landing_assets/Landing_media/Modules_scrub.mp4";

const Landingm = () => {

   
  return (
    
    <>
    {/* <div ref={rootRef} className="landing-container"></div> */}
      <header className="header">
        <div className="container header-content">
          <a href="/" className="logo">
            <img src="../Landing_assets/Landing_media/SAST.png" alt="Logo" width="60" height="60" />
          </a>
          <nav className="main-nav">
            <ul>
              <li><a href="#space-service">SAST Services</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#careers">Events</a></li>
            </ul>
          </nav>
          <a
            href="https://www.linkedin.com/company/society-for-astrophysics-and-space-technology/posts/?feedView=all"
            className="contact-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <p className="subtitle pclass">Pioneering Space <br /> and Beyond</p>
            <h1 className="main-heading">
              INSPIRING<br />
              NEXT GENERATION<br />
              OF SPACE EXPLORERS...
            </h1>
          </div>
        </section>

        <section className="video-section">
          <div className="video">
            <video id="myVideo" loop autoPlay muted playsInline>
            <source src={videoSource} type="video/mp4" />

              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className="text-section" id="scrollText">
          <p className="space-text">
            Space exploration and technology have traditionally
            been exclusive to Governments, large organizations and elite institutions,
            but SAST is dedicated to breaking these barriers and making the cosmos accessible to all..
          </p>
        </section>

        <section className="image-section">
          <div className="image-wrapper">
            <div className="image-rectangle">
            <img
            src="../Landing_assets/Landing_media/All-possible-through-our-state-of-the-art-space-service-2160x2170-4-2160x1660.webp"
            alt="Space Service"
            className="scroll-image"
            />

              <img
                src="../Landing_assets/Landing_media/frequent_lines.webp"
                alt="Rotating Lines"
                className="rotate"
              />
            </div>
          </div>
        </section>

        <section className="stats-container">
          <div className="stats-wrapper">
            <div className="stats-header">
              <h2 className="stats-title">
                INNOVATIONS FEATURED IN ISRO STATE OF THE ART REPORT
              </h2>
            </div>
            <div className="stats-grid">
              <div className="stat-item">
                <p className="stat-number">
                  0<sup>+</sup>
                </p>
                <p className="stat-label">MODULES IN ORBIT</p>
              </div>
              <div className="stat-item">
                <p className="stat-number">
                  0<sup>+</sup>
                </p>
                <p className="stat-label">DELIVERED SATELLITES</p>
              </div>
              <div className="stat-item">
                <p className="stat-number">
                  0<sup>+</sup>
                </p>
                <p className="stat-label">TB DATA DOWNLINKED</p>
              </div>
            </div>
          </div>
        </section>

        <section className="hero-section">
          <div className="video-container">
            <video autoPlay muted loop playsInline id="bgVideo">
              <source src={videosource2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="content">
            <p className="subtitle">The FlatSat Redefined</p>
            <h1 className="title">CUBESAT</h1>
            <a
              href="../Cubesat Frontend/Cubesat.html"
              className="cta-button"
              id="discoverBtn"
            >
              DISCOVER CUBESAT
              <span className="arrow">→</span>
            </a>
          </div>
        </section>

        <section className="hero-section">
          <div className="video-container">
            <video autoPlay muted loop playsInline id="bgVideo">
              <source src={videosource3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="content">
            <p className="subtitle">The FlatSat Redefined</p>
            <h1 className="title">DESKSAT</h1>
            <a href="index.html" className="cta-button" id="discoverBtn">
              COMING SOON ...
              <span className="arrow">→</span>
            </a>
          </div>
        </section>

        <section className="hero-section">
          <div className="video-container">
            <video autoPlay muted loop playsInline id="bgVideo">
              <source src={videosource4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="content">
            <p className="subtitle">Cutting-edge avionics</p>
            <h1 className="title">SATELLITES</h1>
            <a href="index.html" className="cta-button" id="discoverBtn">
              COMING SOON...
              <span className="arrow">→</span>
            </a>
          </div>
        </section>

        <div className="fixed"></div>

        <section className="space-section">
          <h1 className="space-heading">
            <span>SPACE IS CLOSER</span>
            <br />
            THAN YOU THINK
          </h1>
          <a
            href="https://www.linkedin.com/company/society-for-astrophysics-and-space-technology/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Get in touch
          </a>
        </section>
      </main>
    </>
  );
};

export default Landingm;
