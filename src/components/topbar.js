import React from "react";
import clsx from "clsx";
import {
   makeStyles,
   AppBar,
   Toolbar,
   Typography,
   Link,
} from "@material-ui/core";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
   root: {},
   title: {
      flexGrow: 1,
      fontWeight: "bold",
      // fontVariant: "small-caps"
   },
   hSpace: {
      margin: theme.spacing(1.5),
   },
}));

const TopBar = ({ className }) => {
   const classes = useStyles();

   return (
      <AppBar className={clsx(className, classes.root)} position="sticky">
         <Toolbar>
            <Typography className={classes.title} variant="h4">
               Balayon
            </Typography>
            <Link
               className={classes.hSpace}
               color={"inherit"}
               href="https://www.linkedin.com/in/babalayon/"
               rel="noopener noreferrer"
               target="_blank">
               LinkedIn <AiFillLinkedin />
            </Link>
            <Link
               className={classes.hSpace}
               color={"inherit"}
               href="https://github.com/BrianBalayon"
               rel="noopener noreferrer"
               target="_blank">
               GitHub <AiOutlineGithub />
            </Link>
         </Toolbar>
      </AppBar>
   );
};

export default TopBar;
