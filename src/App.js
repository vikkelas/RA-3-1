import './App.css';
import Stars from "./Stars";

function App() {
  return (
   <Stars/>
  );
}
Stars.defaultProps = {
  count: 1,
}
export default App;
