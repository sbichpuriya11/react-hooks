import "./App.css";
import UseCallbackHook from "./Hooks/UseCallbackHook";
import UseContextHook from "./Hooks/UseContextHook";
import UseCustomHook from "./Hooks/UseCustomHook";
import UseEffectHook from "./Hooks/UseEffectHook";
import UseImperativeHook from "./Hooks/UseImperativeHook";
import UseLayoutEffectHook from "./Hooks/UseLayoutEffectHook";

import UseMemoHook from "./Hooks/UseMemoHook";
import UseReducerHook from "./Hooks/UseReducerHook";
import UseRefHook from "./Hooks/UseRefHook";
import UseStateHook from "./Hooks/UseStateHook";

function App() {
  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className="col col-3 border border-dark offset-1 d-flex align-items-center justify-content-center">
            <UseStateHook />
          </div>
          <div className="col col-3 border border-dark offset-1 d-flex align-items-center justify-content-center">
            <UseEffectHook />
          </div>
          <div className="col col-3 border border-dark offset-1 d-flex align-items-center justify-content-center">
            <UseRefHook />
          </div>
        </div>
        <div className="row my-3">
          <div className="col col-3 border border-dark offset-1 d-flex align-items-center justify-content-center">
            <UseReducerHook />
          </div>
          <div className="col col-3 border border-dark offset-1 d-flex align-items-center justify-content-center">
            <UseContextHook />
          </div>
          <div className="col col-3 border border-dark offset-1 d-flex align-items-center justify-content-center">
            <UseMemoHook />
          </div>
        </div>
        <div className="row my-3">
          <div className="col col-3 border border-dark offset-1 d-flex align-items-center justify-content-center">
            <UseCallbackHook />
          </div>
          <div className="col col-3 border border-dark offset-1 d-flex align-items-center justify-content-center">
            <UseImperativeHook />
          </div>
          <div className="col col-3 border border-dark offset-1 d-flex align-items-center justify-content-center">
            <UseLayoutEffectHook />
          </div>
        </div>
        <div className="row my-3">
          <div className="col col-3 border border-dark offset-1 d-flex align-items-center justify-content-center">
            <UseCustomHook />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
