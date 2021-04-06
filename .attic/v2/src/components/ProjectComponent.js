import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import {projects} from "../info/projects";
import Fade from "react-reveal/Fade";
import CardColumns from "react-bootstrap/CardColumns";
import {AiOutlineGithub} from "react-icons/ai";


export default class ProjectComponent extends Component {

    makeContent(dets) {
        let retVal = [];
        // eslint-disable-next-line array-callback-return
        dets.map((entry) => {
                retVal.push(
                    <Fade left cascade>
                        <Card>
                            <Card.Header>
                                <h3> {entry.title} </h3>
                            </Card.Header>
                            <Card.Body>
                                <p> {entry.tech} </p>
                                <p> {entry.details} </p>
                                <Card.Link href={entry.repo}> <AiOutlineGithub/> <i> Repo Link </i> </Card.Link>
                            </Card.Body>
                        </Card>
                    </Fade>
                )
            }
        );
        return retVal;
    }

    render() {
        let content = this.makeContent(projects);
        return(
            <div id={this.props.id} className={"WholeModule EducationComponent"}>
                <h2> Projects </h2>
                <CardColumns>
                    {content}
                </CardColumns>
            </div>
        );
    }
}