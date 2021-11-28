import React from "react";
import { HangmanImage } from "./ui/HangmanImage";

function App() {
  const [pos, setPos] = React.useState(0);
  return (
    <div className="App">
      <HangmanImage position={pos} onClick={() => setPos(pos + 1)} />
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
