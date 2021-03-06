import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./Description.css";
import bg from '../../assets/artform2(1).png';
//import ScrollAnimation from "react-animate-on-scroll";

const Description = () => {
  return (
    <div className="what-we-do">
      {/* <ScrollAnimation animateIn="fadeIn" delay={500} duration={2}>
        <div className="bgContainer">
          <img src={bg} />
        </div>
      </ScrollAnimation> */}
      <div className="bgContainer"></div>
      <div className="description-box">
        <Typography
          component="div"
          align="center"
          noWrap={false}
          paragraph={true}
        >
          <Box fontFamily="Noto Serif" fontWeight={700} textAlign="center">
            <h1 className="desc-title">What We Do ?</h1>
          </Box>
          <Box textAlign="center" fontFamily="Open Sans">
            <p className="description">
              We organize contests with well-known artists from Instagram, ad
              firms &amp; different social media handles to promote talented
              people like you and guess what ! The winners of each contest will
              be featured alongside the judge, giving ordinary people an
              extraordinary opportunity to showcase their skills
            </p>
            <button className="whatWeDoBtn">Know More</button>
          </Box>
        </Typography>
      </div>
    </div>
  );
};

export default Description;
