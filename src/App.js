import { useState } from "react";
import Home from "./components/Home";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className={checked ? "appMenu App" : "App"}>
      <Home checked={checked} setChecked={setChecked} />
    </div>
  );
}

export default App;
