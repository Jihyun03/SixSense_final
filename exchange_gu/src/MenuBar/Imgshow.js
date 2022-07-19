import React from "react";
import style from "styled-components";
import Fade from "react-reveal/Fade";
import { flexbox } from "@mui/system";
import "./Imgshow_style.css"
import Horizontal from "./Horizontal";

const IntroBlock = style.div`
    @media (max-width: 768px) {
        
      }
      h1 {
        margin-top: 20vh;
        margin-left: 3vw;
        font-weight: 900;
        font-size: 4vw;
        font-family: "Montserrat", sans-serif;
        @media (max-width: 768px) {
          font-size: 30px;
        }
      }
      h3 {
        font-weight: 200;
        font-size: 15px;
      }
      
    `;

export default function Imgshow() {

    return(
        <div>
            <div className="Titlecut">
                <Fade bottom>
                    <IntroBlock>
                        <img className="titleImage2" src="img/2x9hd_3.png"/> 
                    </IntroBlock>
                </Fade>
            </div>
            <div className="Fadeout">
                <Fade bottom>
                    <IntroBlock>
                        <img className="titleImage" src="img/2x9hd_1.jpg"/> 
                    </IntroBlock>
                </Fade>
                <div>
                    <Fade right>
                        <IntroBlock>
                            <h1 className="TitText">2x9HD만의 감성</h1>
                        </IntroBlock>
                    </Fade>
                    <Fade left>
                        <IntroBlock>
                            <img className="Underline" src="img/underline.png"/>
                        </IntroBlock>
                    </Fade>
                </div>
            </div>
            <div className="centered">
                <Horizontal text="Youtube"/> 
            </div>
        </div>
        
    );
}