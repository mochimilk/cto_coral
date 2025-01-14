import React from "react";
import "../../../Styles/App.css";
import {
  Button,

  Toolbar,
  ToolbarButton,
  Tooltip,
} from "@fluentui/react-components";
import { Link } from "../../../Imports/bundleIcons.tsx";
import { useContentHooks } from "../../../Hooks/useContentHooks.tsx";
import CodeBlock from "../../../Components/CodeBlock/CodeBlock.tsx";
import ContentToolbar from "../../../Hooks/useContentToolbarHooks.tsx";

interface ContentProps {
  isPanelOpen: boolean;
  togglePanel?: () => void; // Optional to conditionally render left toggle
  isRightPanelOpen: boolean;
  toggleRightPanel?: () => void; // Optional to conditionally render left toggle
}



const ContentDevelopers: React.FC<ContentProps> = ({
  isPanelOpen,
  togglePanel,
  isRightPanelOpen,
  toggleRightPanel,
}) => {
  const { commandKey } = useContentHooks({ togglePanel, toggleRightPanel });

  // Sample Code
  const sampleClone = `
git clone https://github.com/<your-username>/<repository-name>.git
cd <repository-name>
`;
  const sampleDependencies = `
npm install
# or
yarn install
`;
  const sampleRun = `
npm start
# or
yarn start
`;

  return (
    <div className="contentContainer">
      {/*📌 Below is the setup for the content toolbar.
       ***You may remove this if your app doesn't need a toolbar. */}

      <ContentToolbar
        panelConfig="left" // If your page is only using one panel, define it here with "left" or "right". Removing this defaults to both.
        isPanelOpen={isPanelOpen}
        togglePanel={togglePanel}
        isRightPanelOpen={isRightPanelOpen}
        toggleRightPanel={toggleRightPanel}
        commandKey={commandKey}
      >
        <Toolbar></Toolbar>
        <Toolbar>
          <ToolbarButton icon={<Link />}></ToolbarButton>
        </Toolbar>
      </ContentToolbar>

      {/*📌 Below is the setup for Content.
       ***You can import just about anything into className"content" and it should show up in the content panel
       ***Dependencies for .md files and react-markdown are preinstalled.
       ***Don't forget call your import above!
       ***/}

      <div className="content">
        <div style={{ width: "100%", maxWidth: "728px", margin: " 0 auto" }}>
          <h1>Installation</h1>
          <ol>
            <li>
              <h3>Fork repository</h3>
            </li>
            <p>
              <div className="infoTile">
                <img
                  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Jellyfish.png"
                  alt="Jellyfish"
                  width="32"
                  height="32"
                />
                <p>Fork Coral from GitHub.</p>
                <a
                  href="https://github.com/mochimilk/cto_eden/fork"
                  target="_blank"
                >
                  <Button appearance="primary">Fork</Button>
                </a>
              </div>
            </p>

            <li>
              <h3>Clone the forked repository</h3>
              <CodeBlock code={sampleClone.trim()} />
            </li>

            <li>
              <h3>Install dependencies</h3>
              <p>
                Make sure you have
           
                  <a href="https://nodejs.org/en" target="_blank">
                    Node.js
                  </a>
           
      
                and npm or yarn installed. Then, run:
              </p>
              <CodeBlock code={sampleDependencies.trim()} />
            </li>

            <li>
              <h3>Run the development server</h3>
              <p>Start the application in development mode::</p>
              <CodeBlock code={sampleRun.trim()} />
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ContentDevelopers;
