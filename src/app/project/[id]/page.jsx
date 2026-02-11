import BreadCumb from "../../Components/Common/BreadCumb";
import Cta1 from "../../Components/Cta/Cta1";
import MarqueeText from "../../Components/MarqueeText/MarqueeText";
import ProjectDetailsLeft1 from "../../Components/ProjectDetails/ProjectDetailsLeft1";
import Service7 from "../../Components/Services/Service7";

const ProjectDetails = ({ params }) => {
    const { id } = params;
    return (
        <div>
            <BreadCumb Title="Project Details"></BreadCumb>
            <MarqueeText></MarqueeText>
            <ProjectDetailsLeft1 projectId={id}></ProjectDetailsLeft1>
            <Service7></Service7>
            <Cta1></Cta1>
        </div>
    );
};

export default ProjectDetails;