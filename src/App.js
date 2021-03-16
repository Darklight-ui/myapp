import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Item from './components/Item';
import food from './images/food.jpg';
import food2 from './images/food2.jpg';
import food3 from './images/food3.jpg';
import food4 from './images/food4.jpg';
import food5 from './images/food5.jpg';
import food6 from './images/food6.jpg';
import food7 from './images/food7.jpg';
import food8 from './images/food8.jpg';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import ForthPage from './pages/ForthPage';
import FifthPage from './pages/FifthPage';
import SixthPage from './pages/SixthPage';
import About from './pages/About';
import ContactPage from './pages/ContactPage';




function App() {
  return (
    
    <div className="App">
      <Router>
      <Switch>
      <Route path="/contact">
        <ContactPage />
      </Route>
        <Route path="/firstPage">
          <Header />
          <FirstPage />
        </Route>
        <Route path="/secondPage">
          <Header />
          <SecondPage />
        </Route>
        <Route path="/thirdPage">
          <Header />
          <ThirdPage  />
        </Route>
        <Route path="/forthPage">
          <Header />
          <ForthPage  />
        </Route>
        <Route path="/fifthPage">
          <Header />
          <FifthPage />
        </Route>
        <Route path="/sixthPage">
        <Header /><SixthPage />
          </Route>
        <Route path="/about">
        <Header /><About />
          </Route>
        <Route path="/">
        <Header />
      <Item 
      foodName = 'Lorem ipsum'
      ingredient = 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      bestTimeServed = 'Lorem ipsum Lorem ipsum'
      price = 'Lorem ipsum'
      backgroundImage = {food}
      leftbtnlink = 'mailto:example@mail.com'
      leftbtntext = 'Lorem ipsum'
      rightbtnlink = 'tel:123-456-789'
      rightbtntext = 'Lorem ipsum'
      twoButtons = 'true'
      />
      <Item 
      foodName = 'Lorem ipsum'
      ingredient = 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      bestTimeServed = 'Lorem ipsum Lorem ipsum'
      price = 'Lorem ipsum'
      backgroundImage = {food2}
      leftbtnlink = 'mailto:example@mail.com'
      leftbtntext = 'Lorem ipsum'
      rightbtnlink = 'tel:123-456-789'
      rightbtntext = 'Lorem ipsum'
      twoButtons = 'true'
      />
      <Item 
      foodName = 'Lorem ipsum'
      ingredient = 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      bestTimeServed = 'Lorem ipsum Lorem ipsum'
      price = 'Lorem ipsum'
      backgroundImage = {food3}
      leftbtnlink = 'mailto:example@mail.com'
      leftbtntext = 'Lorem ipsum'
      rightbtnlink = 'tel:123-456-789'
      rightbtntext = 'Lorem ipsum'
      twoButtons = 'true'
      />
      <Item 
      foodName = 'Lorem ipsum'
      ingredient = 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      bestTimeServed = 'Lorem ipsum Lorem ipsum'
      price = 'Lorem ipsum'
      backgroundImage = {food4}
      leftbtnlink = 'mailto:example@mail.com'
      leftbtntext = 'Lorem ipsum'
      rightbtnlink = 'tel:123-456-789'
      rightbtntext = 'Lorem ipsum'
      twoButtons = 'true'
      />
      <Item 
      foodName = 'Lorem ipsum'
      ingredient = 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      bestTimeServed = 'Lorem ipsum Lorem ipsum'
      price = 'Lorem ipsum'
      backgroundImage = {food5}
      leftbtnlink = 'mailto:example@mail.com'
      leftbtntext = 'Lorem ipsum'
      rightbtnlink = 'tel:123-456-789'
      rightbtntext = 'Lorem ipsum'
      twoButtons = 'true'
      />
      <Item 
      foodName = 'Lorem ipsum'
      ingredient = 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      bestTimeServed = 'Lorem ipsum Lorem ipsum'
      price = 'Lorem ipsum'
      backgroundImage = {food6}
      leftbtnlink = 'mailto:example@mail.com'
      leftbtntext = 'Lorem ipsum'
      rightbtnlink = 'tel:123-456-789'
      rightbtntext = 'Lorem ipsum'
      twoButtons = 'true'
      />
      <Item 
      foodName = 'Lorem ipsum'
      ingredient = 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      bestTimeServed = 'Lorem ipsum Lorem ipsum'
      price = 'Lorem ipsum'
      backgroundImage = {food7}
      leftbtnlink = 'mailto:example@mail.com'
      leftbtntext = 'Lorem ipsum'
      rightbtnlink = 'tel:123-456-789'
      rightbtntext = 'Lorem ipsum'
      twoButtons = 'true'
      />
      <Item 
      foodName = 'Lorem ipsum'
      ingredient = 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      bestTimeServed = 'Lorem ipsum Lorem ipsum'
      price = 'Lorem ipsum'
      backgroundImage = {food8}
      leftbtnlink = 'mailto:example@mail.com'
      leftbtntext = 'Lorem ipsum'
      rightbtnlink = 'tel:123-456-789'
      rightbtntext = 'Lorem ipsum'
      twoButtons = 'true'
      />
      <Footer />
      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
