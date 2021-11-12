import "./App.css";
import React, { useRef, useState } from "react";

function App() {
  const target = useRef();
  const [showCompArr, setShowCompArr] = useState([]);
  const [renderCopmArr, setRenderCopmArr] = useState([]);

  const compArr = [
    { name: "大输入框", id: "big" },
    { name: "小输入框", id: "small" },
    { name: "文本域", id: "area" },
  ];

  const compType = {
    big: <div className="render_comp">这是大输入框</div>,
    small: <div className="render_comp">这是小输入框</div>,
    area: <div className="render_comp">这是文本区域</div>,
  };

  const dragStart = (e) => {
    const type = e.target.id;
    showCompArr.push(type);
    setShowCompArr([...showCompArr]);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragDrop = (e) => {
    const comp = showCompArr.pop();
    setShowCompArr([...showCompArr]);

    renderCopmArr.push(comp);
    setRenderCopmArr([...renderCopmArr]);
  };

  return (
    <div className="App">
      <div className="left_pane">
        <h3 style={{ textAlign: "center" }}>组件区域</h3>
        <div className="comp_body_left">
          {compArr.map((item, index) => (
            <div
              className="comp"
              key={item.id}
              id={item.id}
              draggable={true}
              onDragStart={dragStart}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className="right_pane">
        <h3 style={{ textAlign: "center" }}>展示区域</h3>
        <div
          className="comp_body_right"
          ref={target}
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDrop={dragDrop}
        >
          {renderCopmArr.map((item, index) => (
            <div key={index}>{compType[item]}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
