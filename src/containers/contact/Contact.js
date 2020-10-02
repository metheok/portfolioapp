import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import { Fade } from "react-reveal";

export default function Contact() {
    return (
        <Fade bottom duration={1000} distance="20px">
        <div className="main contact-margin-top" id="contact">
            <div className="contact-div-main">
                <div className="contact-header">
                    <h1 className="heading contact-title">{contactInfo.title}</h1>
                    <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>

                    <div className="contact-text-div">
                    
                    <br></br>
                    <p className="contact-detail"> Telegram:
                        <a className="contact-detail-email"
                           href= {contactInfo.telegram}>{contactInfo.telegram}</a>
                        </p>
                        <br></br>
                        <p className="contact-detail"> Mail me:
                        <a className="contact-detail-email"
                           href={"mailto:" + contactInfo.email_address}>{contactInfo.email_address}</a>
                        </p>
                        
                        <br/><br/>
                        <SocialMedia/>
                    </div>
                </div>
                {/* <div className="contact-image-div">
                    <img alt="omar pic" src={require("../../assets/images/iamomariqbal.jpg")}></img>
                </div> */}
            </div>
        </div>
        </Fade>
    );
}
