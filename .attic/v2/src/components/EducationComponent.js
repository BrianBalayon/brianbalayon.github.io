import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { Component } from "react";
import EducationCard from "./EducationCard";
import {education} from "../info/education";
import Fade from "react-reveal/Fade";

export default class EducationComponent extends Component {

    makeContent(dets) {
        let retVal = [];
        let cards = [];
        for (let i = 0; i < dets.length; i += 1) {
            let detsList = [];
            for (let j = 0; j < dets[i].details.length; j += 1) {
                detsList.push(
                    <li>
                        {dets[i].details[j]}
                    </li>
                );
            }
            cards.push(
                <EducationCard
                    experience={dets[i]}
                    details={detsList}
                />
            );
        }
        if (cards.length % 2 === 1) {
            cards.push(<React.Fragment/>);
        }
        while (cards.length > 0) {
            retVal.push(
                <Fade left cascade>
                <Row>
                    <Col xs={12} md={6}>
                        {cards.shift()}
                    </Col>
                    <Col xs={12} md={6}>
                        {cards.shift()}
                    </Col>
                </Row>
                </Fade>
            );
        }
        return retVal;
    }
    render() {
        let rows = this.makeContent(education);
        return(
            <div id={this.props.id} className={"WholeModule Experience"}>
                <h2> Education </h2>
                {rows}
            </div>
        );
    }
}