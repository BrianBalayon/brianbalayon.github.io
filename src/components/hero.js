import React from "react";
import {
   makeStyles,
   Typography,
   Grid,
   Button,
   Hidden,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import Particles from "./particles.js";
import { fade } from "@material-ui/core/styles/colorManipulator";

const useStyles = makeStyles((theme) => ({
   root: {
      position: "relative",
      top: 0,
      left: 0,
      right: 0,
   },
   particles: {
      height: "100vh",
      width: "100vw",
   },
   bg: {
      height: "100vh",
      marginTop: "-100vh",
      position: "relative",
      background: fade(theme.palette.background.main, 0.5),
      alignContent: "center",
   },
   bold: {
      fontWeight: "bold",
   },
   light: {
      fontWeight: 100,
   },
   hSpace: {
      margin: theme.spacing(1.5),
   },
   vSpace: {
      marginTop: theme.spacing(3),
   },
   img: {
      height: "24vw",
      borderRadius: "50%",
      margin: "auto",
   },
}));

const Hero = ({ className }) => {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <Particles className={classes.particles} />
         <div className={classes.bg}>
            <Grid
               className={className}
               alignItems="center"
               container
               direction="row"
               justify="space-around">
               <Hidden lgUp>
                  <Grid item xs={12}>
                     <img
                        className={classes.img}
                        alt={"Portrait of Brian"}
                        src={require("../info/BrianBalayon.png")}
                     />
                  </Grid>
               </Hidden>
               <Grid item md={7} xs={12}>
                  <Typography
                     className={classes.light}
                     color={"textPrimary"}
                     variant={"h3"}>
                     Hello! I'm
                  </Typography>
                  <Typography
                     className={classes.bold}
                     color={"textPrimary"}
                     variant={"h1"}>
                     {" "}
                     Brian Anthony M. Balayon{" "}
                  </Typography>
                  <Typography
                     className={classes.light}
                     color={"textPrimary"}
                     variant={"h3"}>
                     Software Engineer
                  </Typography>
                  <Button
                     className={classes.vSpace}
                     color={"secondary"}
                     startIcon={<MailIcon />}
                     href={"mailto:brianbalayon@gmail.com"}
                     variant={"contained"}>
                     Get in Touch
                  </Button>
               </Grid>
               <Hidden mdDown>
                  <Grid item md={5}>
                     <img
                        className={classes.img}
                        alt={"Portrait of Brian"}
                        src={require("../info/BrianBalayon.png")}
                     />
                  </Grid>
               </Hidden>
            </Grid>
         </div>
      </div>
   );
};

export default Hero;
