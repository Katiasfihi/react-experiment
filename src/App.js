import Myfiles from "./myFile";
import Red from "./useState";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Myfiles name="Carol" city="Bucharest" />
      <Myfiles name="Katia" city="Paris" />
      <Myfiles name="Homer" city="London" />
      <Myfiles name="Sfihi" city="Brighton" />
      <Red />
    </div>
  );
}
