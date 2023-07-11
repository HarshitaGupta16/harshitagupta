import { v4 as uuid4 } from "uuid";
import ImageCarousel from "../components/projects/frontendeval/imageCarousel/ImageCarousel";

export const frontendevalData = [
  {
    id: uuid4(),
    title: "Image Carousel",
    description:
      "This is an image carousel build in react where image updates in every 3 seconds. \n Image can be done next and previous with 2 buttons.",
    component: <ImageCarousel />,
  },
];
