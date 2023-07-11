import { frontendevalData } from "../../../utils/frontendevalData";
import { useParams } from "react-router-dom";

const FrontendLink = () => {
  const { fId } = useParams();
  const app = frontendevalData.find((project) => project.id === fId);
  return app?.component;
};

export default FrontendLink;
