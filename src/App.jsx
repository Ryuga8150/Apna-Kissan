import { BrowserRouter, Routes, Route} from "react-router-dom";
import Market from "./Pages/Market";
import Products from "./Pages/Products";


// import Homepage from "./pages/Homepage";
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Login from "./pages/Login";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";

//  Reducing Bundle Size with Lazy loading

// Steps
// 1. Implementing laxy loading with dynamic import
// 2. To handle like a spinner while other files will be loaded in bkg
// for that we will use SUSPENSE to suspend some components

function App() {
  //defining routes in a declarative way

  // in this example order of auth and cities provider doesnot matter
  // but its good to provide auth outside of cities
  // as may be required by cities in future
  return (
        <BrowserRouter>
            <Routes>
              {/*passng element values as a component*/}
              {/* <Route path="/" element={<Homepage />} /> */}
              {/* Can also make path='/' as index path */}
              <Route index element={<Market />} />
              <Route path="/product/:productName" element={<Products/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;