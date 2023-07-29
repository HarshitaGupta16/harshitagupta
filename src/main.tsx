import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./components/projects/Projects.tsx";
import SmallApps from "./components/projects/small-apps/smallApps/SmallApps.tsx";
import AppLink from "./components/projects/small-apps/smallApps/AppLink.tsx";
import BackButton from "./components/common/BackButton.tsx";
import Frontendeval from "./components/projects/frontendeval/Frontendeval.tsx";
import FrontendLink from "./components/projects/frontendeval/FrontendLink.tsx";
import Home from "./components/Home/Home";
import Blogs from "./components/blogs/Blogs.tsx";
import BigProjects from "./components/projects/big-projects/BigProjects.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/small-apps",
        element: (
          <>
            <BackButton />
            <SmallApps />
          </>
        ),
      },
      {
        path: "/projects/small-apps/:appId",
        element: (
          <>
            <BackButton />
            <AppLink />
          </>
        ),
      },
      {
        path: "/projects/frontendeval",
        element: (
          <>
            <BackButton />
            <Frontendeval />
          </>
        ),
      },
      {
        path: "/projects/frontendeval/:fId",
        element: (
          <>
            <BackButton />
            <FrontendLink />
          </>
        ),
      },
      {
        path: "/projects/big-projects",
        element: (
          <>
            <BackButton />
            <BigProjects />
          </>
        ),
      },
      {
        path: "blogs/",
        element: <Blogs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
