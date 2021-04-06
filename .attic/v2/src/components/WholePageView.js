import React, {Component} from "react";
import EducationComponent from "./EducationComponent";
import IntroComponent from "./IntroComponent";
import SkillsComponent from "./SkillsComponent";
import NavBar from "./NavBar";
import ExperienceComponent from "./ExperienceComponent";
import ProjectComponent from "./ProjectComponent";

export default class WholePageView extends Component {

    render() {
        return (
            <React.Fragment>
                <NavBar />
                    <div className="WholePage">
                            <IntroComponent id={"home"}/>
                            <ExperienceComponent id="work"/>
                            <EducationComponent id="education"/>
                            <SkillsComponent id={"skills"}/>
                            <ProjectComponent id={"projects"} />
                    </div>
            </React.Fragment>
    );
    }
    }
