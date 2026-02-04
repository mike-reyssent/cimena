import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from "./components/Intro"
import "./style/landingPage.css"
import Trending from "./components/Trending"

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro section */}

      {/* trending section */}
      <div className="trending">
        <Trending />
      </div>
      {/* end of trending section */}
    </div>
  );
}

export default App;
