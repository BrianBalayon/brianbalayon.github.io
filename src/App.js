import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core";
import { AppTheme } from "./utils/theme";
import Splash from "./pages/splash";

const useStyles = makeStyles((theme) => ({
   root: { xOverflow: "hidden" }, 
}));

function App() {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <ThemeProvider theme={AppTheme}>
            <Splash />
         </ThemeProvider>
      </div>
   );
}

export default App;
