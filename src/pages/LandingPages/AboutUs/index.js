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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import exampleGif from "assets/images/yes.gif";
import exgif from "assets/images/yes2.gif";

function AboutUs() {
  return (
    <>
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${exampleGif})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Wait What! Is it a dream?
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
            you know how in Bollywood movies, the hero always has that moment where he looks into the heroine's eyes and says something that changes everything? Well, I think I'm having that moment right now. So here goes: 'Kabhi kabhi, mere dil mein khayal aata hai ki jaise tu mujh par nazar rakhti hai, jaise tu mere liye bani hai.'
            </MKTypography>
            <img src={exgif} alt="Example GIF" style={{ maxWidth: '20%' }} />
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default AboutUs;
