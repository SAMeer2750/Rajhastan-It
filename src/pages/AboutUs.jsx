import React from "react";
import "./AboutUs.css";
import ImageCard from "../components/ImageCard";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <div className="about__us">
        <div className="left_content">
          <img className="bg_img" alt="" src={require("./cropped2.png")} />
        </div>
        <div className="right_content">
          <h1>About Us</h1>
          <p className="about_us_para">
            ``Welcome to med-X Hospital, a decentralized healthcare facility dedicated to providing high-quality to our community. Our mission is to improve the health and well-being of the individuals and families we serve by providing compassionate, innovative, and evidence-based care.``
          </p>
          <Link to="/doctors"><button>Book An Appointment Now</button></Link>
          <h2>Our Team</h2>
          <div className="team_images">
            <ImageCard name="Sameer Madhav D" image="/profile_images/sameer.jfif"/>
            <ImageCard name="Aneerban Saha" image="/profile_images/aneerban.jfif"/>
            <ImageCard name="Vaidik Mandloi" image="/profile_images/Vaidik.jpg"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
