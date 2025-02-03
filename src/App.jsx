import "./App.css";
import StBtn from "./components/StBtn";
function App() {
  return (
    <>
      <div>
        <StBtn primary={true}>머임?</StBtn>
        <StBtn>Default StBtn</StBtn>
      </div>
    </>
  );
}

export default App;
