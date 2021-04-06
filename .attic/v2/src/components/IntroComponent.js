import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Fade from 'react-reveal/Fade';
import {AiOutlineMail} from "react-icons/ai";

const IntroComponent = ({
                            id
                        }) => {
    return(
        <div id={id} className={"WholeModule IntroComponent"}>
            <div className={"filler"} />
            <Row>
                <Col xs={{span: 12, order: 12}} md={{span: 8, order: 1}}>
                    <p> Hello there! I'm  </p>
                    <h1> Brian Anthony M. Balayon, </h1>
                    <h2> a computer science major looking to become a software engineer. </h2>
                </Col>
                <Col xs={{span: 12, order: 0}} md={{span: 4, order: 12}}>
                    <Fade right>
                        <Image src={require("../info/BrianBalayon.png")} roundedCircle fluid/>
                    </Fade>
                </Col>
            </Row>
            <p> Some technologies I've been using lately for class, projects, etc:
                <ul>
                    <li> Javascript / React </li>
                    <li> Python </li>
                    <li> Hadoop </li>
                    <li> git </li>
                </ul>
            </p>
            <Button className={"ContactButton"}
                    href={"mailto:brianbalayon@gmail.com"}>
                <AiOutlineMail/> Get in Touch
            </Button>
        </div>
    );
};

export default IntroComponent;