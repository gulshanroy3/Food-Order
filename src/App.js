import React from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
// import Student from "./components/studentDashboard";
// import Login from "./components/login";
import "bootstrap/dist/css/bootstrap.min.css";
// import SingleStudentDetail from "./components/singleStudentDetails";
import { BrowserRouter as Router } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
// import ReactSelect from "./components/react-select/react-Select";
// import Chart from "./components/HighCharts/HighCharts";
// import Cookies from "js-cookie";
//import StepperParent from "./components/Stepper";
// import PageLayout from "./components/FullWidthLayout/index";
// import ColorPicker from "./components/ColorPicker/index";
// import ReactSlider from "./components/ReactSlider/index";
import FoodOrder from "./components/foodOrder/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* <ReactSelect selected={selected} dropdown="single" />
            <div></div>
            <ReactSelect selected={selected} dropdown="multiple" /> */}
            {/* <StepperParent stepper={StepperJSon} /> */}
            {/* <ColorPicker defaultColor="" defaultcolorEnabled={true} /> */}
            {/* <Chart /> */}
            <FoodOrder />
          </div>
        </Router>
      </Provider>
    </CookiesProvider>
  );
}

export default App;
