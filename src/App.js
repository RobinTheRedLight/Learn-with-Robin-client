import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
