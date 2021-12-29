import { useState, useEffect } from "react";
import "./App.css";
import BecomeInstructor from "./Component/BecomeInstructor/BecomeInstructor";
import Bussiness from "./Component/Bussiness/Bussiness";
import Courses from "./Component/Courses/Courses";
import CourseTab from "./Component/CourseTab/CourseTab";
import Education from "./Component/Education/Education";
import FeatureTopic from "./Component/FeatureTopic/FeatureTopic";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Sliders from "./Component/Slider/Slider";
import TopCatagory from "./Component/TopCatagory/TopCatagory";
import TrustedCompany from "./Component/TrustedCompany/TrustedCompany";
import courseData from "./Component/courseData/CourseData";
import Cart from "./Component/Cart/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    const data = courseData.map((item) => {
      return item;
    });
    setCourse(data);
  }, []);
  const [cart, setcart] = useState([]);
  const handleProducts = (rabbi) => {
    console.log("added", rabbi);
    const newCart = [...cart, rabbi];
    setcart(newCart);
  };
  console.log(cart);

  return (
    <Router>
      <Header cart={cart}></Header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>

      <Courses courses={course} handleProducts={handleProducts} />
      <CourseTab></CourseTab>
      <Sliders></Sliders>
      <TopCatagory></TopCatagory>
      <FeatureTopic></FeatureTopic>
      <BecomeInstructor></BecomeInstructor>
      <TrustedCompany></TrustedCompany>
      <Bussiness></Bussiness>
      <Education></Education>
      <Footer></Footer>
    </Router>
  );
}

export default App;
