import { useParams } from "react-router-dom";
import { smallAppsData } from "../../../../utils/smallAppsData";

const AppLink = () => {
  const { appId } = useParams();
  console.log(typeof appId);
  const app = smallAppsData.find((app) => app.id === appId);
  return app?.component;
};

export default AppLink;
