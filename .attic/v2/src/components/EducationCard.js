import {Card} from "react-bootstrap";
import React from "react";


const EducationCard = ({
                            experience,
                            details
                        }) => {
    return(
            <Card className={"experienceCard"}>
                <Card.Header>
                    <Card.Title>
                    <h3>
                    {experience.title}
                    <br/> @
                    <a rel="noopener noreferrer" href={experience.web} target="_blank">
                        {experience.organization}
                    </a>
                    </h3>
                    </Card.Title>
                    <Card.Subtitle>
                        {experience.date}
                    </Card.Subtitle>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
            </Card>
    );
};

export default EducationCard;