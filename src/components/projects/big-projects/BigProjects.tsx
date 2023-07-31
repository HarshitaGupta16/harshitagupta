import { BigProjectsData } from "../../../utils/bigProjectsData";
import Accordian from "../../common/Accordian";

const BigProjects = () => {
  return (
    <ul>
      {BigProjectsData.map((project) => {
        return (
          <Accordian
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            category="big-projects"
            mainCategory="projects"
            date={project.date}
          />
        );
      })}
    </ul>
  );
};

export default BigProjects;
