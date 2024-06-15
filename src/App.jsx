import Navbar from "./components/navbar/Navbar";
import Top from "./components/top/Top";
import Profile from "./components/profile/Profile";
import History from "./components/history/History";
import Skill from "./components/skill/Skill";
import Job from "./components/job/Job";
import Production from "./components/product/Product";
import SlidingText from "./components/slidingText/SlidingText";
import "./app.scss"

const App = () => {
  return <div className="app">
    {/* <section>
      <Navbar/>
    </section> */}
    {/* <div className="parallax"></div> */}
    <section id="Top" className="page">
      <Navbar/>
      <Top/>
    </section>
    <section id="Profile" className="page">
      <SlidingText text="Profile"/>
    </section>
    <section className="page">
      <Profile/>
    </section>
    <section id="History" className="page">
      <SlidingText text="History"/>
    </section>
    <section className="page">
      <History/>
    </section>
    <section id="Skill" className="page">
      <SlidingText text="Skill"/>
    </section>
    <section className="page">
      <Skill/>
    </section>
    <section id="Job" className="page">
      <SlidingText text="Job"/>
    </section>
    <section className="page">
      <Job/>
    </section>
    {/* <section id="Product" className="page">
      <SlidingText text="Product"/>
    </section>
    <section className="page">
      <Production/>
    </section> */}
  </div>;
};

export default App;