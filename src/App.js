import Header from "./components/Header";
import "./App.css";
import Questions from "./components/Questions";
import data from "./helper/data";


function App() {
  // console.log(data)
  return (
    <div className="App">
      <Header />
      <Questions data={data} />     
    </div>
  );
}

export default App;
