import React from "react";
import clsx from "clsx";
import {
   makeStyles,
   Typography,
   Accordion,
   AccordionSummary,
   AccordionDetails,
   Link,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { MdLaunch } from "react-icons/md";
import { EMPLOYMENT } from "../info/employment.js";

const useStyles = makeStyles((theme) => ({
   root: {},
   expanded: {
      margin: 0,
      "&$expanded": {
         margin: "0",
      },
   },
   icon: {
      fill: theme.palette.text.primary,
   },
   summary: {
      display: "block",
   },
   launch: {
      width: theme.typography.subtitle1.fontSize,
   },
   details: {
      display: "block",
   },
}));

const Emplyment = ({ className, contentClassName }) => {
   const classes = useStyles();

   return (
      <div className={clsx(className, classes.root)}>
         <div className={contentClassName}>
            {EMPLOYMENT.map((entry, i) => {
               return (
                  <Accordion
                     key={i}
                     className={classes.expanded}
                     defaultExpanded={i === 0}>
                     <AccordionSummary
                        expandIcon={
                           <ExpandMoreIcon className={classes.icon} />
                        }>
                        <div className={classes.summary}>
                           <Typography variant={"h3"}>{entry.title}</Typography>
                           <Typography
                              color={"textPrimary"}
                              variant={"subtitle1"}>
                              {entry.web ? (
                                 <>
                                    <Link
                                       href={entry.web}
                                       target={"_blank"}
                                       rel={"noreferrer"}
                                       color={"inherit"}>
                                       {entry.organization}{" "}
                                       <MdLaunch className={classes.launch} />
                                    </Link>
                                 </>
                              ) : (
                                 <>{entry.organization}</>
                              )}
                           </Typography>
                        </div>
                     </AccordionSummary>
                     <AccordionDetails className={classes.details}>
                        <Typography variant={"body1"}>{entry.date}</Typography>
                        <Typography variant={"body1"}>
                           {entry.location}
                        </Typography>
                        <ul>
                           {entry.details.map((point, i) => {
                              return (
                                 <li key={i}>
                                    <Typography variant={"body1"}>
                                       {point}
                                    </Typography>
                                 </li>
                              );
                           })}
                        </ul>

                        <Typography variant={"body1"}>
                           Skills: {entry.skills}
                        </Typography>
                     </AccordionDetails>
                  </Accordion>
               );
            })}
         </div>
      </div>
   );
};

export default Emplyment;
