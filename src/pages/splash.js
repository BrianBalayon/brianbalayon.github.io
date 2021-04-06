import React from "react";
import { makeStyles } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import TopBar from "../components/topbar";
import Hero from "../components/hero";
import Education from "../components/education";
import Emplyment from "../components/employment";

const useStyles = makeStyles((theme) => ({
   root: { xOverflow: "hidden" },
   splashContent: {
      paddingTop: theme.spacing(25),
      paddingBottom: theme.spacing(7.5),
      maxWidth: 700,
      margin: "0 15vw",
   },
   base: {
      paddingTop: theme.spacing(7.5),
      paddingBottom: theme.spacing(7.5),
      background: fade(theme.palette.background.main, 0.5),
   },
   content: {
      maxWidth: 700,
      margin: "5vh auto",
   },
}));

function Splash() {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <TopBar />
         <Hero className={classes.splashContent} />
         <Emplyment
            className={classes.base}
            contentClassName={classes.content}
         />
         <Education
            className={classes.base}
            contentClassName={classes.content}
         />
      </div>
   );
}

export default Splash;
