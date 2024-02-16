import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import bgImage from "assets/images/illustrations/illustration-reset.jpg";

function ContactUs() {
  const [noClickCount, setNoClickCount] = useState(0);

  const handleNoClick = () => {
    setNoClickCount(noClickCount + 1);
  };

  const yesButtonStyle = {
    transform: `scale(${1 + noClickCount*0.5})`, // Scale button size
    transition: "transform 0.3s ease", // Smooth transition for scaling effect
    marginRight: `${8 + noClickCount*15}px`, // Start with 8px margin and increase
  };

  // Change the "No" button text based on noClickCount
  const noButtonTexts = ["No", "Really?", "Are you sure?", "Think again!", "Are you really really sure!", "You might regret this!", "Change of heart?", "Dont be so cold", "I'm the boss and click YES", "Breaking my heart?", "This could be a mistake"];
  const noButtonText = noClickCount < noButtonTexts.length ? noButtonTexts[noClickCount] : noButtonTexts[noButtonTexts.length - 1];

  return (
    <>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={7} lg={6} xl={4} ml={{ xs: "auto", lg: 6 }} mr={{ xs: "auto", lg: 6 }}>
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox variant="gradient" bgColor="info" coloredShadow="info" borderRadius="lg" p={2} mx={2} mt={-3}>
              <MKTypography variant="h3" color="white">
                Chapter 2: Two Doors!!
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                You reach the castle and there are two doors. 
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={3}>
                Here is the clue leading to the right door. 
                Like every SRK movie ever, I want to ask you, 'Kya tum mere saath date par chalogi?' I promise, our date will be more epic than any Karan Johar movie climax – with less drama and more fun, of course. And who knows, maybe we'll find our 'DDLJ' moment, minus running for the train part. What do you say? Ready to be the Simran to my Raj, or the Anjali to my Rahul?"
              </MKTypography>

              <MKBox width="100%" component="form" method="post" autoComplete="off">
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                <MKButton type="submit" variant="gradient" color="success" sx={yesButtonStyle}>
                    Yes
                  </MKButton>
                  <MKButton onClick={handleNoClick} variant="gradient" color="error">
                    {noButtonText}
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
