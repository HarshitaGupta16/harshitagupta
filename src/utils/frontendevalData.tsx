import FAQComponent from "../components/projects/frontendeval/FAQComponent/FAQComponent";
import ImageCarousel from "../components/projects/frontendeval/imageCarousel/ImageCarousel";
import ModalOverlay from "../components/projects/frontendeval/modalOverlay/ModalOverlay";
import MyMap from "../components/projects/frontendeval/Array.prototype.map/Array.prototype.map";
import MortgageCalculator from "../components/projects/frontendeval/mortgageCalculator/MortgageCalculator";

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
  {
    id: "4",
    title: "myMap Function",
    description: "This is a dismissible modal overlay built in ReactJS.",
    component: <MyMap />,
    date: "2 Aug 2023",
    // solved in 5:41 - 6:00 that is 19 mins-> code logic completed for map function
    // connecting with UI 1 hour more then in next 15mins fix UI and not showing result if result length is 0, total time: 1 hour 34 mins
  },
  {
    id: "5",
    title: "Mortgage Calculator",
    description:
      "This is a compound interest calculator built in ReactJS. This accepts Principal, Interest rate\n and Length of loan and calculates mortage amount to be paid monthly.",
    component: <MortgageCalculator />,
    date: "3 Aug 2023",
    // solved in 10:40 - 11:17 and some UI fixes 11:19pm that is 37mins - 39mins and till 11:32-final, 11:37-final, 11:43pm did final changes
    // 1hour 3mins total , at 11:48-11:49 did heading font-size change
  },
];
