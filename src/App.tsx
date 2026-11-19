import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section
      className="counter-page"
      onClick={() => setCount((current) => current + 1)}
    >
      <main className="counter-shell">
        <div className="counter-header">
          <p className="counter-eyebrow">Tap Counter</p>
          <button
            type="button"
            className="reset-button"
            onClick={(event) => {
              event.stopPropagation();
              setCount(0);
            }}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 11a8 8 0 1 1-2.34-5.66M20 4v7h-7" />
            </svg>
            Reset
          </button>
        </div>

        <div className="counter-card" aria-live="polite" aria-atomic="true">
          <div className="counter-glow" />
          <p className="counter-label">Jumlah tap</p>
          <strong className="counter-value">{count}</strong>
          <p className="counter-hint">Tap dimana saja untuk menambah</p>
        </div>
      </main>
    </section>
  );
}

export default App;
