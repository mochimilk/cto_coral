import React, { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "./prism-material-oceanic.css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";

import { Button, Caption1 } from "@fluentui/react-components";

const CodeBlock = ({ code, language = "bash", fileName = "" }) => {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy Code");

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setButtonText("Code Copied!");
      setTimeout(() => setButtonText("Copy Code"), 2000);
    });
  };

  return (
    <div
      style={{
  
        border: "1px solid var(--colorNeutralStroke2)",
        borderRadius: "8px",
        marginTop: "24px",

      }}

    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          flex: "1 1 auto",
          justifyContent: "space-between",
          padding: ".6rem .6rem .6rem 1rem",
          boxSizing: "border-box",
        }}
      >
        <Caption1 style={{ color: "var(--colorNeutralForeground4)" }}>
          {fileName ? `${fileName}.${language}` : language}
        </Caption1>
        <Button
          onClick={handleCopy}
          size="small"
          appearance="subtle"
        >
          {buttonText}
        </Button>
      </div>
      <pre
        style={{
          backgroundColor: "var(--colorNeutralBackground4)",
          color: "var(--colorNeutralForeground2)",
          padding: "1rem",
          borderRadius: "0 0 8px 8px",
          overflowX: "auto",
          margin: "0",
        }}
      >
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
