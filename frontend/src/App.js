import Converter from "./components/Converter";
import NewsFeed from "./components/NewsFeed";
import Explain from "./components/Explain";

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <Converter />
        <NewsFeed />
      </div>
      <Explain />
    </div>
  );
}

export default App;
