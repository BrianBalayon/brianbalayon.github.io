import React from "react";
import clsx from "clsx";
import { makeStyles, Typography } from "@material-ui/core";
import {
   Timeline,
   TimelineItem,
   TimelineDot,
   TimelineConnector,
   TimelineSeparator,
   TimelineContent,
   TimelineOppositeContent,
} from "@material-ui/lab";
import { EDUCATION } from "../info/education.js";

const useStyles = makeStyles((theme) => ({
   root: {},
   vSpace: {
      marginTop: theme.spacing(1.5),
   },
   secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
   },
}));

const Education = ({ className, contentClassName }) => {
   const classes = useStyles();

   return (
      <div className={clsx(className, classes.root)}>
         <div className={contentClassName}>
            <Timeline align={"left"}>
               {EDUCATION.map((entry) => {
                  return (
                     <TimelineItem key={entry.title}>
                        <TimelineOppositeContent>
                           <Typography variant={"h3"}>
                              {entry.school}
                           </Typography>
                           <Typography variant={"body1"}>
                              {entry.date}
                           </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                           <TimelineDot color={"secondary"} />
                           <TimelineConnector
                              className={classes.secondaryTail}
                           />
                        </TimelineSeparator>
                        <TimelineContent>
                           <Typography variant={"subtitle1"}>
                              {entry.title}
                           </Typography>
                           <ul className={classes.vSpace}>
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
                        </TimelineContent>
                     </TimelineItem>
                  );
               })}
            </Timeline>
            {/* {EDUCATION.map((entry) => {
               return (
                  <Card className={classes.card} key={entry.title}>
                     <CardContent>
                        <Typography variant={"h3"}>{entry.school}</Typography>
                        <Typography variant={"subtitle1"}>
                           {entry.title}
                        </Typography>
                        <Typography variant={"body1"}>{entry.date}</Typography>

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
                     </CardContent>
                  </Card>
               );
            })} */}
         </div>
      </div>
   );
};

export default Education;
