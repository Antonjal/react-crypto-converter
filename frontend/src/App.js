import Converter from "./components/Converter";
import NewsFeed from "./components/NewsFeed";

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <Converter />
        <NewsFeed />
      </div>
    </div>
  );
}

export default App;
