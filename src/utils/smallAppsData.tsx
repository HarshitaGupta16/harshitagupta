import { v4 as uuid4 } from "uuid";
import PasswordGenerator from "../components/projects/small-apps/PasswordGenerator";

export const smallAppsData = [
  {
    id: uuid4(),
    title: "Password Generator",
    description:
      "This app randomly generates secure passwords as per user's requirement.\n This is built in ReactJS.",
    component: <PasswordGenerator />,
  },
];
