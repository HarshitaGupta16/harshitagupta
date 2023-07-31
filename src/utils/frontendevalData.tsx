import FAQComponent from "../components/projects/frontendeval/FAQComponent/FAQComponent";
import ImageCarousel from "../components/projects/frontendeval/imageCarousel/ImageCarousel";

export const frontendevalData = [
  {
    id: "1",
    title: "Image Carousel",
    description:
      "This is an image carousel build in react where image updates in every 3 seconds. \n Image can be done next and previous with 2 buttons.",
    component: <ImageCarousel />,
  },
  {
    id: "2",
    title: "FAQ Component",
    description:
      'This is a re-usable "Frequesntly Asked Questions" Component build in react in Accordian style.',
    component: <FAQComponent />,
  },
];
