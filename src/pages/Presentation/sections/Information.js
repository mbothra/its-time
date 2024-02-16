/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useState } from 'react';

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import mapGif from "assets/map.gif";

function JumpscarePopup({ onClose }) {
  return (
    <div className="jumpscare-popup">
      {/* Jumpscare content here */}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

function handleCardBackClick() {
  setShowJumpscare(true);
}

function Information() {
  const [showJumpscare, setShowJumpscare] = useState(false);

  const handleClosePopup = () => {
    setShowJumpscare(false);
    // Redirect to the new route
    window.location.href = '/pages/landing-pages/contact-us';
  };

  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Chapter 1:
                    <br />
                    Dragon&apos;s Den
                  </>
                }
                description="This is where the adventure begins. 2 years ago, A Teletubby found a map "
              />
              <RotatingCardBack
                image={bgBack}
                title="Enter the Dragon's Den"
                description="The Map pointed to a treasure but in the hearts of the Dragon's den. Do you dare to enter?"
                gif={mapGif}
                action={{
                  type: "internal",
                  route: "/pages/landing-pages/contact-us",
                  label: "Enter",
                }}
                onClick={handleCardBackClick}
              />
            </RotatingCard>
            
          </Grid>
        </Grid>
        {showJumpscare && <JumpscarePopup onClose={handleClosePopup} />}
      </Container>
    </MKBox>
  );
}

export default Information;
