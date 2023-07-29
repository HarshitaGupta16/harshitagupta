import { frontendevalData } from "../../../utils/frontendevalData";
import Accordian from "../../common/Accordian";

const Frontendeval = () => {
  return (
    <ul>
      {frontendevalData.map((project) => {
        return (
          <Accordian
            key={project.id}
            title={project.title}
            description={project.description}
            id={project.id}
            category="frontendeval"
            mainCategory="projects"
          ></Accordian>
        );
      })}
    </ul>
  );
};

export default Frontendeval;
