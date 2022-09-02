import "./about-us.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "../../assets/expandmore.svg";
import { aboutUsData } from "../../temp_data/data";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <AboutUsBody />
      <Footer />
    </div>
  );
};

const ExpandMoreIconComp = () => {
  return <img src={ExpandMoreIcon} />;
};

const AboutUsBody = () => {
  return (
    <div className="about-us-accordions-container">
      <h1>About us</h1>
      <div className="about-us-accordions">
        <SimpleAccordion />
      </div>
    </div>
  );
};

function SimpleAccordion() {
  return (
    <div className="about-simple-accordion">
      {aboutUsData.map((item) => (
        <Accordion key={item.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIconComp />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.bodyText}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default AboutUs;
