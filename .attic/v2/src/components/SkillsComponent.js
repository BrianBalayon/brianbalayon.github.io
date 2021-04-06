import React, {Component} from "react";
import CardDeck from "react-bootstrap/CardDeck";
import {frameworks, languages, software} from "../info/skills";
import Card from "react-bootstrap/Card";
import Fade from "react-reveal/Fade";

export default class SkillsComponent extends Component {

    makeCards(info, title) {
        let list = [];
        for(let i=0; i<info.length; i+=1) {
            list.push(
                <li>
                    {info[i]}
                </li>
            )
        }
        return(
            <Card>
                <Card.Header as={"h3"}>{title}</Card.Header>
                <Card.Body>
                <Card.Text>
                        {list}
                </Card.Text>
                </Card.Body>
            </Card>
        );
    }

    render() {
        let langs = this.makeCards(languages, "Languages");
        let soft = this.makeCards(software, "Software");
        let frame = this.makeCards(frameworks, "Frameworks");
        return(
            <div id={this.props.id} className={"WholeModule SkillsComponent"}>
                <h2> Skills </h2>
                <Fade left cascade>
                <CardDeck>
                    {langs}
                    {soft}
                    {frame}
                </CardDeck>
                </Fade>
            </div>
        );
    }
}