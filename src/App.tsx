import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(100);
  const [targetInput, setTargetInput] = useState("100");
  const [showCompleted, setShowCompleted] = useState(false);
  const [completionShown, setCompletionShown] = useState(false);

  useEffect(() => {
    if (target > 0 && count >= target && !completionShown) {
      setShowCompleted(true);
      setCompletionShown(true);
    }
  }, [count, target, completionShown]);

  const applyTarget = () => {
    const nextTarget = Number(targetInput);

    if (!Number.isFinite(nextTarget) || nextTarget < 1) {
      setTargetInput(String(target));
      return;
    }

    const normalizedTarget = Math.floor(nextTarget);
    setTarget(normalizedTarget);
    setTargetInput(String(normalizedTarget));
    setShowCompleted(false);
    setCompletionShown(false);
  };

  return (
    <section
      className="counter-page"
      onClick={() => setCount((current) => current + 1)}
    >
      <main className="counter-shell">
        <div className="counter-header">
          <div>
            <p className="counter-eyebrow">Tap Counter</p>
            <div
              className="target-control"
              onClick={(event) => event.stopPropagation()}
            >
              <label htmlFor="target">Target</label>
              <input
                id="target"
                type="number"
                min="1"
                inputMode="numeric"
                value={targetInput}
                onChange={(event) => setTargetInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    applyTarget();
                  }
                }}
              />
              <button type="button" onClick={applyTarget}>
                Simpan
              </button>
            </div>
          </div>
          <button
            type="button"
            className="reset-button"
            onClick={(event) => {
              event.stopPropagation();
              setCount(0);
              setShowCompleted(false);
              setCompletionShown(false);
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
          <p className="target-progress">Target: {target}</p>
          <p className="counter-hint">Tap dimana saja untuk menambah</p>
        </div>
      </main>

      {showCompleted && (
        <div
          className="completion-backdrop"
          role="presentation"
          onClick={(event) => event.stopPropagation()}
        >
          <div
            className="completion-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="completion-title"
          >
            <div className="completion-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="m5 12 4 4L19 7" />
              </svg>
            </div>
            <p className="completion-kicker">Target tercapai</p>
            <h2 id="completion-title">Selesai!</h2>
            <p>Kamu berhasil mencapai target <strong>{target}</strong> tap.</p>
            <button
              type="button"
              onClick={() => setShowCompleted(false)}
            >
              Lanjutkan
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default App;
