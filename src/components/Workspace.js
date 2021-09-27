import React, { useState, useEffect } from "react";
import Split from "react-split";
import MarkdownEditor from "./MarkdownEditor";
import MarkdownPreviewer from "./MarkdownPreviewer";
import placeholder from "./placeholder";

function Workspace() {
  const [markDown, setMarkDown] = useState(placeholder);
  const [orientation, setOrientation] = useState("horizontal");

  useEffect(() => {
    let changeOrientation = () => {
      setOrientation(window.innerWidth < 600 ? "vertical" : "horizontal");
    };
    changeOrientation();
    window.onresize = changeOrientation;
  }, []);

  return (
    <div className="work-area">
      <Split
        className="wrapper-card"
        sizes={[50, 50]}
        minSize={orientation === "horizontal" ? 270 : 100}
        expandToMin={true}
        gutterAlign="center"
        direction={orientation}>
        <MarkdownEditor content={markDown} changeContent={setMarkDown} />
        <MarkdownPreviewer content={markDown} />
      </Split>
    </div>
  );
}

export default Workspace;
