import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Landing_assets/Landing.css";
import imge1 from "../Landing_assets/Landing_media/bharatmp.jpeg";
import imge2 from "../Landing_assets/Landing_media/DamruExhibit.jpeg";
import imge3 from "../Landing_assets/Landing_media/offlaunch.jpeg";
import imge4 from "../Landing_assets/Landing_media/Onboarding.jpeg";
import imge5 from "../Landing_assets/Landing_media/rajkumarv.jpeg";
import imge6 from "../Landing_assets/Landing_media/Tsuchinshan.jpeg";
import logo from "../Landing_assets/Landing_media/SAST.png";
import video1 from "../Landing_assets/Landing_media/bharatmpvid.mp4"
import video2 from "../Landing_assets/Landing_media/Comentvid.mp4"
import video3 from "../Landing_assets/Landing_media/launchvid.mp4"
import video4 from "../Landing_assets/Landing_media/newmaoinsast.mp4"
import video5 from "../Landing_assets/Landing_media/onboardentry.mp4"
import video6 from "../Landing_assets/Landing_media/satellitevid.mp4"
import video7 from "../Landing_assets/Landing_media/spacerealastro.mov"





const Events = () => {
    
  return (
    <>
    <div className="eventsbg">
        <video autoPlay loop muted>
            <source src={video6}/>
        </video>
    </div>

    <header className="header">
        <div className="container header-content">
            <a href="/" className="logo">
                <img src={logo} alt="Logo" width="60" height="60"/>
            </a>
            <nav className="main-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#space-service">SAST Services</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </nav>
            <a href="https://www.linkedin.com/company/society-for-astrophysics-and-space-technology/posts/?feedView=all" className="contact-button" target="_blank">Contact</a>
        </div>
    </header>

    <section className="eventssec">
        <div className="events">
            <div className="card">
                <div className="card-content">
                    <div className="alignerevent">
                    <img src={imge1} alt="BharatMP" className="card-img"/>
                    </div>

                    <video className="card-video" autoPlay loop muted>
                        <source src={video1} type="video/mp4"/>
                    </video>
                    <div className="card-info">
                        <h2>Cubesat Showcase</h2>
                        <p>Experience our latest CubeSat technology demonstration.</p>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-content">
                    <div className="alignerevent">
                        <img src={imge2} alt="Damru Exhibit" className="card-img"/>
                    </div>
                    <video className="card-video" autoPlay loop muted>
                        <source src="assets/damru.mp4" type="video/mp4"/>
                    </video>
                    <div className="card-info">
                        <h2>SAST Damru Exhibit</h2>
                        <p>A unique exhibit showcasing the scientific wonders.</p>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-content">
                    <div className="alignerevent">
                        <img src={imge4} alt="Onboarding" className="card-img"/>
                    </div>
                    <video className="card-video" autoPlay loop muted>
                        <source src={video5} type="video/mp4"/>
                    </video>
                    <div className="card-info">
                        <h2>Club Onboarding</h2>
                        <p>Welcoming passionate space enthusiasts to join the SAST Club and embark on a journey of research and innovation.</p>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-content">

                    <div className="alignerevent">
                        <img src={imge5} alt="RajkumarV" className="card-img"/>
                    </div>

                    <video className="card-video" autoPlay loop muted>
                        <source src="assets/tsuchinshan.mp4" type="video/mp4"/>
                    </video>
                    <div className="card-info">
                        <h2>Guest Lecture - Dr. Rajkumar Vedam</h2>
                        <p>An insightful session with Dr. Rajkumar Vedam on the scientific advancements shaping the future of space technology.</p>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-content">
                    <div className="alignerevent">
                        <img src={imge6} alt="Tsuchinshan" className="card-img"/>
                    </div>

                    <video className="card-video" autoPlay loop muted>
                        <source src={video2} type="video/mp4"/>
                    </video>
                    <div className="card-info">
                        <h2>Tsuchinshan Comet Spotting</h2>
                        <p>Witness the wonders of the universe with this celestial event.</p>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-content">
                    <div className="alignerevent">
                        <img src={imge3} alt="Launch" className="card-img"/>
                    </div>

                    <video className="card-video" autoPlay loop muted>
                        <source src={video3} type="video/mp4"/>
                    </video>
                    <div className="card-info">
                        <h2>SAST Official Launch</h2>
                        <p>Marking the beginning of our journey, the official launch event introduced SAST's vision, mission, and upcoming projects.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
    
  )
}

export default Events;