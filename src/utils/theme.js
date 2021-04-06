import { createMuiTheme } from "@material-ui/core/styles";

const typography = {
   body1: {
      fontSize: 15,
      fontWeight: 400,
   },
   body2: {
      fontSize: 15,
      fontWeight: 525,
   },
   h1: {
      fontWeight: 500,
      fontSize: 35,
      letterSpacing: "-0.24px",
   },
   h2: {
      fontWeight: 500,
      fontSize: 29,
      letterSpacing: "-0.24px",
   },
   h3: {
      fontWeight: 500,
      fontSize: 24,
      letterSpacing: "-0.06px",
   },
   h4: {
      fontWeight: 500,
      fontSize: 20,
      letterSpacing: "-0.06px",
   },
   h5: {
      fontWeight: 500,
      fontSize: 16,
      letterSpacing: "-0.05px",
   },
   h6: {
      fontWeight: 500,
      fontSize: 14,
      letterSpacing: "-0.05px",
   },
   overline: {
      fontWeight: 500,
   },
   subtitle1: {
      fontStyle: "italic",
   },
};

const baseConfig = {
   direction: "ltr",
   typography,
   overrides: {
      MuiLinearProgress: {
         root: {
            borderRadius: 3,
            overflow: "hidden",
         },
      },
      MuiListItemIcon: {
         root: {
            minWidth: 32,
         },
      },
      MuiChip: {
         root: {
            backgroundColor: "rgba(0,0,0,0.075)",
         },
      },
   },
};

export const AppTheme = createMuiTheme({
   baseConfig,
   typography,
   palette: {
      type: "light",
      primary: {
         main: "#5F4B8B",
         // main: // The color picked from the sample images
         // light: will be calculated from palette.primary.main,
         // dark: will be calculated from palette.primary.main,
         // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
         main: "#96ACB7",
      },
      background: {
         main: "#282C34",
         dark: "#1c2025",
         paper: "#282C34",
         // main: "#ffffff",
      },
      text: {
         primary: "#ffffff",
         // primary: "#000000",
         secondary: "#595959",
         onBlue: "#ffffff",
      },
   },
});
