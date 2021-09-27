import React, { useState, useEffect } from "react";
import * as marked from "marked";

function MarkdownPreviewer({ content }) {
  const [html, setHtml] = useState(getHtml(content));

  useEffect(() => {
    setHtml(getHtml(content));
  }, [content]);

  return (
    <div className="markdown-preview scroll">
      <div className="section-title">
        <h3>Preview</h3>
      </div>
      <div
        id="preview"
        className="html-div"
        dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
}

const getHtml = (markdown) => {
  return marked(markdown);
};

export default MarkdownPreviewer;
