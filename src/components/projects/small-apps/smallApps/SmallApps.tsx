import { smallAppsData } from "../../../../utils/smallAppsData";
import Accordian from "../../../common/Accordian";

const SmallApps = () => {
  return (
    <div>
      <ul>
        {smallAppsData.map((app) => (
          <Accordian
            key={app.id}
            title={app.title}
            description={app.description}
            id={app.id}
            category="small-apps"
          />
        ))}
      </ul>
    </div>
  );
};

export default SmallApps;
