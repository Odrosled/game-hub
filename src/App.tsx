import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GamePage from "./components/GamePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:gameid",
    element: <GamePage />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <div className="watermark">
        <p>Made with ❤️ by Lorenzo Del Sordo</p>
      </div>
    </>
  );
};

export default App;
