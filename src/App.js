import "./styles.css";

import { useState } from "react";

const List = () => {
  const [listA, setListA] = useState({
    React: false,
    Angular: false,
    Vue: false,
    Svelte: false
  });
  const [listB, setListB] = useState({
    Javascript: false,
    HTML: false
  });

  const handleCheckedTransfer = (from, to, setTo, setFrom) => {
    const fromlist = { ...from };
    const tolist = { ...to };

    for (let key in fromlist) {
      if (fromlist[key]) {
        tolist[key] = fromlist[key];
        delete fromlist[key];
      }
    }

    setTo(tolist);
    setFrom(fromlist);
  };

  return (
    <div className="wrapper">
      <div className="listcontainer">
        {Object.keys(listA).map((l, i) => {
          return (
            <div className="lists">
              <input
                type="checkbox"
                id={l}
                checked={listA[l]}
                onChange={() => {
                  setListA({ ...listA, [l]: !listA[l] });
                }}
              />
              <label htmlFor={l}>{l}</label>
            </div>
          );
        })}
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setListA({ ...listA, ...listB });
            setListB({});
          }}
        >
          All left
        </button>
        <button
          onClick={() => {
            handleCheckedTransfer(listB, listA, setListA, setListB);
          }}
        >
          Checked left{" "}
        </button>
        <button
          onClick={() => {
            handleCheckedTransfer(listA, listB, setListB, setListA);
          }}
        >
          Checked right{" "}
        </button>
        <button
          onClick={() => {
            setListB({ ...listA, ...listB });
            setListA({});
          }}
        >
          All right{" "}
        </button>
      </div>
      <div className="listcontainer">
        {Object.keys(listB).map((l, i) => {
          return (
            <div className="lists">
              <input
                type="checkbox"
                id={l}
                checked={listB[l]}
                onChange={() => {
                  setListB({ ...listB, [l]: !listB[l] });
                }}
              />
              <label htmlFor={l}>{l}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default function App() {
  return (
    <div className="App">
      {/* Leftside List */}
      <List className="list" />

      {/* Rightside List */}
    </div>
  );
}
