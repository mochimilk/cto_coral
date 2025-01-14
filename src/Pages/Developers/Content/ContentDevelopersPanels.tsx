import React, { useState } from "react";
import "../../../Styles/App.css";
import Overlay from "../../../Components/Overlay/Overlay.tsx"; // Import the Overlay component
import {
  Button,
  Tooltip,
  Toolbar,
  ToolbarButton,
  Divider,
  Tag,
} from "@fluentui/react-components";

import {
  FolderOpen,
  Link,
  Open,
  OrganizationHorizontal,
} from "../../../Imports/bundleIcons.tsx";
import { useContentHooks } from "../../../Hooks/useContentHooks.tsx";
import CodeBlock from "../../../Components/CodeBlock/CodeBlock.tsx";
import ContentToolbar from "../../../Hooks/useContentToolbarHooks.tsx";
import "../../../Modules/Content/Content.css";

// Utility function to extract domain from URL
const getDomain = (url: string) => {
  try {
    const { hostname } = new URL(url);
    return hostname;
  } catch (error) {
    console.error("Invalid URL:", url);
    return url;
  }
};

const samplePanelPageConfigTree = `
// Example of PanelRight being disabled

  return (
    <div className="layout" style={{ display: "flex" }}>
      {/* PanelLeft setup */}
      {isPanelOpen && (
        <div className="panelLeft">
          <PanelLeft />
          <div
            className="resize-handle-left"
            onMouseDown={handleMouseDownLeft}
          />
        </div>
      )}

      {/* Content setup */}
      <div className="contentContainer" >
        <Component
            isPanelOpen={isPanelOpen}
            togglePanel={togglePanel}
            isRightPanelOpen={isRightPanelOpen}
            toggleRightPanel={toggleRightPanel}
        />
      </div>

      {/* PanelRight setup */}                  // PanelRight disabled

      {/* {isRightPanelOpen && (
        <div className="panelRight">
          <div
            className="resize-handle-right"
            onMouseDown={handleMouseDownRight}
          />
          <PanelRight />
        </div>
      )} */}
    </div>
  );
`;

const samplePanelTree = `
src/
├── Components/                     
├── Hooks/                   
├── Imports/                     
│
├── Modules/    
│   ├── Content/
│   ├── Panels/
│   │   ├── PanelLeft.tsx               # Copy the panel from here
│   │   ├── PanelRight.tsx
│   │   └── Panels.css             
│
├── Pages/                   
│   ├── HomePage/
│   ├── Dashboard/
│   │   ├── Dashboard.tsx
│   │   ├── Dashboard.test.tsx
│   │   ├── Dashboard.css
│   │   └── DashboardPanelLeft.tsx      # Paste and rename (You do not have to rename the export within the tsx file)
│   └── NotFoundPage/
│
├── Styles/         
├── App.tsx          
├── index.tsx
`;

interface ContentProps {
  isPanelOpen: boolean;
  togglePanel?: () => void;
  isRightPanelOpen: boolean;
  toggleRightPanel?: () => void;
}

const ContentDevelopers: React.FC<ContentProps> = ({
  isPanelOpen,
  togglePanel,
  isRightPanelOpen,
  toggleRightPanel,
}) => {
  const { commandKey } = useContentHooks({ togglePanel, toggleRightPanel });
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <div className="contentContainer">
      <ContentToolbar
        panelConfig="left" // If your page is only using one panel, define it here with "left" or "right". Removing this defaults to both.
        isPanelOpen={isPanelOpen}
        togglePanel={togglePanel}
        isRightPanelOpen={isRightPanelOpen}
        toggleRightPanel={toggleRightPanel}
        commandKey={commandKey}
      >
        <Toolbar>
          <ToolbarButton
            icon={<OrganizationHorizontal />}
            onClick={toggleOverlay}
          >
            Find in tree
          </ToolbarButton>
          <ToolbarButton icon={<Open />}>Open in GitHub</ToolbarButton>
        </Toolbar>

        <Toolbar>
          <ToolbarButton icon={<Link />}></ToolbarButton>
        </Toolbar>
      </ContentToolbar>

      <div className="content">
        <div style={{ width: "100%", maxWidth: "728px", margin: "0 auto" }}>
          <h1>Panels</h1>
          <Tag shape="circular" appearance="outline" icon={<FolderOpen />}>
            src/Modules/Panels
          </Tag>

          <h3> Enabling and disabling panels</h3>

          <p>
            {" "}
            By default, the <code className="span">Panels</code> component lives
            on either side of the app; left and right respectively. Left, right,
            or both can be utilized, or panels can disabled entirely.
            <br />
            <br />
            If your app is only using a single panel, navigate to{" "}
            <code className="span">src/Pages/DefaultPage.tsx</code> and remove
            the undesired panel. Below is an example of an app that does not use{" "}
            <code className="span">PanelRight</code>:
          </p>
          <CodeBlock
            code={samplePanelPageConfigTree.trim()}
            fileName="DefaultPage"
            language="tsx"
          />
          <br />
          <div className="infoTile">
          <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Double%20Exclamation%20Mark.png" alt="Double Exclamation Mark" width="32" height="32" />
            <p>Remember to configure the relevant <a href="">ContentHeader</a> prop if you do remove a panel! </p>
        
          </div>

          <br />
          <Divider />

          <h3>Differentiated panels with unique functions in each page(s) &nbsp;<Tag size='small'appearance="outline">Advanced Configuration</Tag></h3>

          <p>
            If you are creating an app that uses another page (or pages), and
            each page uses it's own panel(s) with unique functions, it is recommended that you
            create copies of
            &nbsp;<code className="span">PanelLeft.tsx</code> and/or
            &nbsp;<code className="span">PanelRight.tsx</code> and move them into
            dedicated folders under your pages folder. Here is an example of a file
            tree that would do this:
          </p>

          <CodeBlock
            code={samplePanelTree.trim()}
            fileName=""
            language="bash"
          />


        </div>
      </div>
    </div>
  );
};

export default ContentDevelopers;
