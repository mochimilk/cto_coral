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
  Search,
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

const sampleContentToolbar = `
<ContentToolbar
  panelConfig="left" // "left", "right", "both", {null}
  isPanelOpen={isPanelOpen}
  togglePanel={togglePanel}
  isRightPanelOpen={isRightPanelOpen}
  toggleRightPanel={toggleRightPanel}
  commandKey={commandKey}
>

  <Toolbar>
  // Inject Fluent components like ToolbarButton
  </Toolbar>

  <Toolbar>
  // Inject Fluent components like ToolbarButton
  </Toolbar>

</ContentToolbar>
`;

const sampleContent = `
<div className="content">
  //Start building
</div>
`;

const samplePanelTree = `
src/
├── Components/                     
├── Hooks/                   
├── Imports/                     
│
├── Modules/    
│   ├── Content/
│   │   ├── Content.tsx                # Copy Content from here
│   │   ├── Content.css    
│   └── Panels/ 
│
├── Pages/                   
│   ├── HomePage/
│   ├── Dashboard/
│   │   ├── Dashboard.css
│   │   ├── Dashboard.tsx
│   │   ├── Dashboard.test.tsx
│   │   ├── DashboardPanelLeft.tsx
│   │   └── DashboardContent.tsx        # Paste and rename (You do not have to rename the export within the tsx file)
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for the dropdown

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="contentContainer">
      <div></div>
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
          <h1>Content</h1>
          <Tag shape="circular" appearance="outline" icon={<FolderOpen />}>
            src/Modules/Content/Content.tsx
          </Tag>

          <br />

          <h2> ContentToolbar</h2>

          <p>
            The <code className="span">ContentToolbar</code> lives in the
            content panel (<code className="span">Content.tsx</code>) of your
            page, and it is what you will need to define tools used in your app.
            This is a hybrid component that uses a custom Coral container that
            wraps Fluent's Toolbar component.
          </p>
          <br/><br/>
<Divider/>
          <h3>Understanding the props</h3>
          {/* Example */}
          <div
            style={{
              padding: "48px",
              backgroundColor: "var(--colorNeutralBackground4)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "var(--colorNeutralBackground1)",
                width: "100%",
              }}
            >
              <ContentToolbar
                panelConfig="both" // If your page is only using one panel, define it here with "left" or "right". Removing this defaults to both.
                isPanelOpen={isPanelOpen}
                togglePanel={togglePanel}
                isRightPanelOpen={isRightPanelOpen}
                toggleRightPanel={toggleRightPanel}
                commandKey={commandKey}
              >
     
              </ContentToolbar>
            </div>
          </div>
          <ul>
            <h4>Configurable props</h4>
            <li>
              <code className="span">panelConfig</code>: Defines whether the the
              content header should display "
              <span className="token attr-value">left</span>", "
              <span className="token attr-value">right</span>", or "
              <span className="token attr-value">both</span>" panel toggle(s).
              Use &#123;null&#125; to omit entirely.
            </li>

            <h4
              onClick={toggleDropdown}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                marginLeft: "-20px",
              }}
            >
              <span
                style={{
                  transform: isDropdownOpen ? "rotate(90deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                }}
              >
                ▶
              </span>
              <span style={{ marginLeft: "8px" }}>
                Misc props (You do not need to touch these)
              </span>
            </h4>
            {isDropdownOpen && (
              <ul style={{ marginLeft: "-20px" }}>
                <li>
                  <code className="span">isPanelOpen</code>: Detects panel
                  boolean.
                </li>
                <li>
                  <code className="span">togglePanel</code>: Toggle handler.
                </li>
                <li>
                  <code className="span">isRightPanelOpen</code>: Detects panel
                  boolean.
                </li>
                <li>
                  <code className="span">toggleRightPanel</code>: Toggle
                  handler.
                </li>
                <li>
                  <code className="span">commandKey</code>: Handler to open and
                  close panels using hotkeys.
                </li>
              </ul>
            )}
          </ul>
          <br />
          <div className="infoTile">
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Double%20Exclamation%20Mark.png"
              alt="Double Exclamation Mark"
              width="32"
              height="32"
            />
            <p>
              Even if you are not using a given panel, we recommend that you
              keep all "Misc" props intact.
            </p>
          </div>
<Divider/>
          <h3>Adding tools</h3>
          <p>
            You can then add Fluent components (e.g., ToolbarButton) in between
            the given <code className="span">Toolbar</code> components. The
            first <code className="span">Toolbar</code> Adds Toolbar items to
            the left, while the second adds it to the right.
            <br />
            <br />
            You can choose to omit the Toolbars entirely if your app doesn't
            require them, but <code className="span">ContentToolbar</code> still
            requires both if you are adding tools to just the right (order of
            operations).
            <br />
            <br />
            Only use up to 2 <code className="span">Toolbar</code> components.
          </p>

          <br />

          {/* Example */}
          <div
            style={{
              padding: "48px",
              backgroundColor: "var(--colorNeutralBackground4)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "var(--colorNeutralBackground1)",
                width: "100%",
              }}
            >
              <ContentToolbar
                panelConfig="both" // If your page is only using one panel, define it here with "left" or "right". Removing this defaults to both.
                isPanelOpen={isPanelOpen}
                togglePanel={togglePanel}
                isRightPanelOpen={isRightPanelOpen}
                toggleRightPanel={toggleRightPanel}
                commandKey={commandKey}
              >
                <Toolbar>
                  <ToolbarButton icon={<OrganizationHorizontal />}>
                    Button
                  </ToolbarButton>
                  <ToolbarButton icon={<Open />}>Button</ToolbarButton>
                </Toolbar>

                <Toolbar>
                  <ToolbarButton icon={<Search />}></ToolbarButton>
                </Toolbar>
              </ContentToolbar>
            </div>
          </div>

          <CodeBlock
            code={sampleContentToolbar.trim()}
            fileName="Content"
            language="tsx"
          />

          <br />

          <br />
          <Divider />
          <h2> Adding content</h2>

          <p>
            To add content within, look for{" "}
            <code className="span">&#60;div className="content"&#62;</code>{" "}
            underneath <code className="span">ContentToolbar</code>. This is
            where you can start populating your app with anything and
            everything. Easy-peasy.
          </p>

          <CodeBlock
            code={sampleContent.trim()}
            fileName="Content"
            language="tsx"
          />

          <br />

          <div className="infoTile">
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Double%20Exclamation%20Mark.png"
              alt="Double Exclamation Mark"
              width="32"
              height="32"
            />
            <p>
              We recommend nesting an extra <code className="span">div</code>{" "}
              inside <code className="span">content</code>. This way you can
              ignore the <code className="span">Content.css</code> page tied to
              the content and import your own css.
            </p>
          </div>

          <br />
          <Divider />

          <h3>
            {" "}
            Unique panels across multiple pages &nbsp;
            <Tag size="small" appearance="outline">
              Advanced Configuration
            </Tag>
          </h3>

          <p>
            If you are creating an app that uses another page (or pages), and
            each page uses it's own unique panel(s), it is recommended that you
            create copies of
            <code className="span">PanelLeft.tsx</code> and/or
            <code className="span">PanelRight.tsx</code> and move them into
            dedicated folders under your pages. Here is an example of a file
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
