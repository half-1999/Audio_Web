import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Import Font Awesome CSS
import "@fortawesome/fontawesome-free/css/all.css";
import AllProducts from "./components/AllProducts";
import SingleProductPage from "./components/SingleProductPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route
            path="/singleProductPage/:productName"
            element={<SingleProductPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
