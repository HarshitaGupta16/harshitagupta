import FAQComponent from "../components/projects/frontendeval/FAQComponent/FAQComponent";
import ImageCarousel from "../components/projects/frontendeval/imageCarousel/ImageCarousel";
import ModalOverlay from "../components/projects/frontendeval/modalOverlay/ModalOverlay";

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
      'This is a re-usable "Frequesntly Asked Questions" Component build in React in Accordian style.',
    component: <FAQComponent />,
    date: "31 July 2023",
    // solved in 37 mins and with css 47 mins and searched for font and then added font so total 57 mins
  },
  {
    id: "3",
    title: "Modal Overlay",
    description: "This is a dismissible modal overlay built in ReactJS.",
    component: <ModalOverlay />,
    date: "1 Aug 2023",
    // solved in 1 hour 5 mins with css
  },
];
